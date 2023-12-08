import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import {Toolbar} from "@mui/material";
import ReactIcon from '../images/ic-react.png';
import PlusIcon from '../images/ic-plus.png';
import MuiIcon from '../images/ic-mui.png';

const Navbar = () => {
    return (
            <AppBar >
                <Toolbar sx={{backgroundColor: '#90caf9'}}>
                    <Box sx={{display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                    paddingTop: '10px',
                        paddingBottom: '10px'}}>
                        <Box component="img"
                             sx={{width: 50, height: 50}}
                             src={ReactIcon}
                        />
                        <Box component="img"
                             sx={{width: 25, height: 25}}
                             src={PlusIcon}
                        />
                        <Box component="img"
                             sx={{width: 50, height: 50}}
                             src={MuiIcon}
                        />
                    </Box>
                </Toolbar>
            </AppBar>
    );
};

export default Navbar;