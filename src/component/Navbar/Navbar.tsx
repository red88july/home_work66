import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import {Toolbar, Typography} from '@mui/material';
import ReactIcon from '../../images/ic-react.png';
import PlusIcon from '../../images/ic-plus.png';
import MuiIcon from '../../images/ic-mui.png';

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar sx={{backgroundColor: '#90caf9'}}>
        <Box sx={{
          display: 'flex',
          gap: 3,
          flexWrap: 'wrap'
        }}>

          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            paddingTop: '10px',
            paddingBottom: '10px'
          }}>
            <Box component="img" sx={{width: 50, height: 50}} src={ReactIcon} />
            <Box component="img" sx={{width: 25, height: 25}} src={PlusIcon} />
            <Box component="img" sx={{width: 50, height: 50}} src={MuiIcon} />
          </Box>

          <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography variant="h4" mb={1} color='#263238'>Home work 66</Typography>
            <Typography variant="subtitle1" color='#37474f'>Application Calories tracker</Typography>
          </Box>

        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;