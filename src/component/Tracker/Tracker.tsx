import {Button, Typography, useTheme} from '@mui/material';
import Box from '@mui/material/Box';
import {useNavigate} from 'react-router-dom';

const Tracker = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handelClick = () => {
    navigate('/meals/new');
  };

  return (
    <>
      <Box sx={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', marginTop: theme.spacing(15),
      }}>
        <Typography
          sx={{marginTop: '2px', color: '#bf360c', fontFamily: 'Roboto'}}
          variant={'h4'}>Calorie tracker</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', marginTop: '20px',
          flexWrap: 'wrap', borderTop: 2
        }}>
        <Typography sx={{marginTop: 2}} variant={'h6'}>Total calories: 900 kal</Typography>
        <Button onClick={handelClick} variant="contained">Add new meal</Button>
      </Box>
    </>
  );
};

export default Tracker;