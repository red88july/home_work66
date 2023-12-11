import * as React from 'react';
import axiosApi from '../../axiosApi';
import {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {FetchedData, MealsData} from '../../types';
import Box from '@mui/material/Box';
import {Button, Typography} from '@mui/material';
import '../../style.css';
import ButtonSpinner from "../ButtonSpinner/ButtonSpinner";

const Tracker: React.FC = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [content, setContent] = useState<MealsData[]>([]);
    const [request, setRequest] = useState(false);

    useEffect(() => {
        const fetchedData = async () => {
            try {
                let response;
                if (id) {
                    response = await axiosApi.get(`/meal/${id}.json`);
                } else {
                    response = await axiosApi.get('/meal.json');
                }

                const dataKeysValues: FetchedData[] = Object.values(response.data);
                const dataValues: MealsData[] = dataKeysValues.flatMap((nestedMeal: FetchedData) =>
                    Object.values(nestedMeal).map((meal) => meal)
                );
                setContent(dataValues);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        setRequest(false);
        void fetchedData();
    }, [id]);

    const handleDelete = async (id: string) => {
        setRequest(true);
        try {
            const response = await axiosApi.delete(`/meal/${id}.json`);
            const updatedData = content.filter((updmeal) => updmeal.id !== id);
            console.log(`Updated`, updatedData);
            setContent(updatedData);
            console.log('Delete Response:', response);
        } catch (error) {
            console.error('Error deleting data:', error);
        } finally {
            setRequest(false);
        }
    };

    const sumCalories = useCallback(() => {
        return content.reduce((acc, value) => acc + Number(value.calories), 0);
    }, [content]);

    const handelClick = () => {
        navigate('/meals/new');
    };

    return (
        <>
            <Box className="cont-title-style">
                <Typography className="typography-title-style"
                            variant={'h4'}>Calorie tracker</Typography>
            </Box>
            <Box className="con-header-style">
                <Typography sx={{marginTop: 2}} variant={'h6'}>Total calories: {sumCalories()} kCal</Typography>
                <Button onClick={handelClick} variant="contained">Add new meal</Button>
            </Box>
            {content.map((data, index) => {
                return (
                    <Box key={index} className="con-card-style">
                        <Box className="con-mealinfo-style">
                            <Typography sx={{marginBottom: 1}} variant={'subtitle1'}>{data.meal}</Typography>
                            <Typography sx={{color: 'grey'}} variant={'h6'}>{data.description}</Typography>
                        </Box>
                        <Box className="con-eventbtn-style">
                            <Typography className="typography-totalcalories-style" variant={'h5'}>{data.calories}</Typography>
                            <Box className="con-btn-style">
                                <Button
                                    type="button"
                                    variant="contained"
                                    color="success"
                                    className="btn-edit">
                                    {request ? <ButtonSpinner/> : 'Edit '}
                                </Button>
                                <Button
                                    type="button"
                                    variant="contained"
                                    color="secondary"
                                    className="btn-delete"
                                    onClick={() => handleDelete(data.id)}>
                                    {request ? <ButtonSpinner/> : 'Delete'}
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                );
            })}
        </>
    );
};

export default Tracker;