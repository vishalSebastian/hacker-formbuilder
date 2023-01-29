import { TextField } from '@mui/material';
import React from 'react';

/** You would need to make this component dynamic, its using hardcoded values */
export const FieldText = ({ options, label }) => {
    return <TextField  id="filled-basic" label="Filled" variant="filled" />
}