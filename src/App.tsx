import Box from '@mui/material/Box';
import {Route, Routes} from 'react-router-dom';
import Navbar from "./component/Navbar/Navbar";
import Tracker from './component/Tracker/Tracker';
import PageNoFoundPicture from '../src/images/404PageNotFound.jpg';
import TrackerForm from './component/TrackerForm/TrackerForm';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
        <main>
           <Routes>
             <Route path="/" element={(<Tracker />)} />
             <Route path="/meals/new" element={(<TrackerForm />)} />
             <Route path="*" element={(
               <Box
                 sx={{display: "flex", alignItems:'center',
                 justifyContent: 'center', marginTop: '50px'}} >
                 <Box component="img"
                      sx={{width: '50rem', height: '50rem'}}
                      src={PageNoFoundPicture}
                      alt="Page Not Found"/>
               </Box>
             )}/>
           </Routes>
        </main>

    </>
  );
}

export default App;
