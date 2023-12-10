import {Button, Typography} from '@mui/material';
import Box from '@mui/material/Box';
import {useNavigate} from 'react-router-dom';
import * as React from 'react';
import '../../style.css';


const Tracker: React.FC = () => {
  const navigate = useNavigate();
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
        <Typography sx={{marginTop: 2}} variant={'h6'}>Total calories: 900 kal</Typography>
        <Button onClick={handelClick} variant="contained">Add new meal</Button>
      </Box>
      <Box className="con-card-style">
        <Box className="con-mealinfo-style">
          <Typography sx={{marginBottom: 1}} variant={'subtitle1'}>Breakfast</Typography>
          <Typography sx={{color: 'grey'}} variant={'h6'}>Eggs, bacon</Typography>
        </Box>
        <Box className="con-eventbtn-style">
          <Typography className="typography-totalcalories-style" variant={'h5'}>900 kCal</Typography>
          <Box className="con-btn-style">
            <Button type="button" variant="contained" color="success"
                    className="btn-edit">Edit</Button>
            <Button type="button" variant="contained" color="secondary"
                    className="btn-delete">Delete</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Tracker;