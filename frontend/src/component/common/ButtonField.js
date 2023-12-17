import React from 'react';
import { Button } from '@mui/material';

const ButtonField = ({ label, onClick, color = 'primary', variant = 'contained', margin = '10px 0', ...rest }) => {
  return (
    <Button color={color} variant={variant} onClick={onClick} sx={{ margin }} {...rest}>
      {label}
    </Button>
  );
};

export default ButtonField;