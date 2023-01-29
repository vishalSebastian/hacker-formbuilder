import { TextField } from '@mui/material';
import React from 'react';

/** You would need to make this component dynamic, its using hardcoded values */
export const FieldNumber = ({ options, label }) => {
    return <TextField type={"number"} label="Filled" variant="filled" />
}