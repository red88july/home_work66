import {Button, FormControl, InputLabel, MenuItem, Select, TextField, useTheme} from '@mui/material';
import * as React from 'react';
import {useNavigate} from 'react-router-dom';

const TrackerForm= () => {
  const theme = useTheme();
  const navigate = useNavigate();


  const [meal, setMeal] = React.useState<string>('');

  // const handleChange = (event: React.FormEvent<HTMLSelectElement | HTMLInputElement>) => {
  //   setMeal(event.target.value as string);
  // };

  const handelClick = () => {
    navigate('/');
  };

  return (
    <FormControl sx={{ marginTop: theme.spacing(15), width: '25%' }}>
      <InputLabel id="demo-simple-select-label">Choose meal...</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={meal}
        label="Choose meal..."
        // onChange={handleChange}
      >
        <MenuItem value="breakfast">Breakfast</MenuItem>
        <MenuItem value="snack">Snack</MenuItem>
        <MenuItem value="lunch">Lunch</MenuItem>
        <MenuItem value="dinner">Dinner</MenuItem>
      </Select>
      <TextField
        id="outlined-basic"
        variant="outlined"
        multiline
        label="Meal Description"
        rows={6}
        sx={{ marginTop: theme.spacing(2), width: '100%' }}
      />
      <TextField
        id="outlined-basic"
        variant="outlined"
        label="Set calories (kcal)"
        size="small"
        sx={{ marginTop: theme.spacing(2), width: '100%' }}
      />
      <Button onClick={handelClick} sx={{ marginTop: theme.spacing(2), width: '100%' }} variant="contained" color="success">
        Save
      </Button>
    </FormControl>
  );
};

export default TrackerForm;