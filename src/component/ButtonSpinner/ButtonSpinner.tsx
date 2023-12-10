import React from 'react';
import {CircularProgress} from '@mui/material';


const ButtonSpinner:React.FC = () => {
  return (
    <CircularProgress color="warning" />
  );
};

export default ButtonSpinner;