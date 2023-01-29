import { TextField } from '@mui/material';
import React from 'react';

/** You would need to make this component dynamic, its using hardcoded values */
export const FieldNumber = ({ options, label,error }) => {
    return <TextField data-testid="data-numberfield" error={error}  type={"number"} label="Filled" variant="filled" />
}