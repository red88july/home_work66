import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import {Link, Toolbar, Typography} from '@mui/material';
import ReactIcon from '../../images/ic-react.png';
import PlusIcon from '../../images/ic-plus.png';
import MuiIcon from '../../images/ic-mui.png';
import '../../style.css';

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar sx={{backgroundColor: '#90caf9'}}>
        <Box className="main-box-style">
          <Link className="link-box-style" href="/">
            <Box component="img" className="link-logo-style" src={ReactIcon}/>
            <Box component="img" className="link-logo-style" src={PlusIcon}/>
            <Box component="img" className="link-logo-style" src={MuiIcon}/>
          </Link>
          <Box className="main-title-style">
            <Typography variant="h4" mb={1} color="#263238">Home work 66</Typography>
            <Typography variant="subtitle1" color="#37474f">Application Calories tracker</Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;