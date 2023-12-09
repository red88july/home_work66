import * as React from 'react';
import Box from '@mui/material/Box';
import TypeWriter from '../../images/ic-typewriter.png';
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
    useTheme
} from '@mui/material';
import {MealProperties} from '../../types';
import {useCallback, useState} from 'react';
import axiosApi from "../../axiosApi";

const TrackerForm = () => {
    const theme = useTheme();

    const [meal, setMeal] = useState<MealProperties>({
        meal: '',
        description: '',
        calories: 0,
    });

    const [selectedMeal, setSelectedMeal] = useState<string>('');

    const inputChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const {name, value} = event.target;

            if (value === '') {
                alert(`Field ${name} is not to be empty.`);
            } else {
                setMeal((prevState) => ({
                    ...prevState,
                    [name]: value,
                }));
            }
        }, []);

    const onFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const contentData = {
                meal: selectedMeal,
                description: meal.description,
                calories: meal.calories,
            };

            await axiosApi.post(`/meal.json`, contentData);
        } catch (error) {
            console.error(`Error while submitting form: ${error}`);
        } finally {
            setMeal({
                meal: '',
                description: '',
                calories: 0,
            });

            setSelectedMeal('');
        }
    };

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: theme.spacing(15),
            width: '100%'
        }}>
            <Box component="img" sx={{width: 150, height: 150}} src={TypeWriter}/>
            <Typography variant={'h6'} sx={{}}>Add / Edit meal</Typography>
            <form onSubmit={onFormSubmit}>
                <FormControl sx={{marginTop: theme.spacing(1), width: '350px'}}>
                    <InputLabel id="demo-simple-select-label">Choose meal...</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedMeal}
                        label="Choose meal..."
                        onChange={(e) => setSelectedMeal(e.target.value as string)}
                    >
                        <MenuItem value='Breakfast'>Breakfast</MenuItem>
                        <MenuItem value='Snack'>Snack</MenuItem>
                        <MenuItem value='Lunch'>Lunch</MenuItem>
                        <MenuItem value='Dinner'>Dinner</MenuItem>
                    </Select>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        name="description"
                        onChange={inputChange}
                        multiline
                        label="Meal Description"
                        rows={6}
                        sx={{marginTop: theme.spacing(2), width: '100%'}}
                    />
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        name="calories"
                        value={meal.calories}
                        onChange={inputChange}
                        label="Set calories (kcal)"
                        size="small"
                        sx={{marginTop: theme.spacing(2), width: '100%'}}
                    />
                    <Button
                        type="submit" // Specify type="submit" to make the button trigger the form submission
                        sx={{marginTop: theme.spacing(2), width: '100%'}}
                        variant="contained"
                        color="success"
                    >
                        Save
                    </Button>
                </FormControl>
            </form>
        </Box>
    );
};

export default TrackerForm;

