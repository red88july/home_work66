import * as React from 'react';
import axiosApi from '../../axiosApi';
import {useCallback, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {MealsData} from '../../types';
import Box from '@mui/material/Box';
import {Button, Typography} from '@mui/material';
import '../../style.css';

const Tracker: React.FC = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState<MealsData[]>([]);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await axiosApi.get(`/meal.json`);
        const data = Object.values(response.data) as MealsData[];
        setContent(data) ;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    void fetchedData();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await axiosApi.delete(`/meal/${id}.json`);
      const updatedData = content.filter((updmeal) => updmeal.id !== id);
      console.log(`Updated`, updatedData);
      setContent(updatedData);
      console.log('Delete Response:', response);
    } catch (error) {
      console.error('Error deleting data:', error);
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
                <Button type="button" variant="contained" color="success" className="btn-edit">
                  Edit
                </Button>
                <Button
                  type="button"
                  variant="contained"
                  color="secondary"
                  className="btn-delete"
                  onClick={() => handleDelete(data.id)}>
                  Delete
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