
    import TextField from '@mui/material/TextField';
    import Autocomplete from '@mui/material/Autocomplete';
    import React from 'react';
    import companies from './data/companies'; // Assuming this is the path
    
    const TableAutoFill = ({ value, onChange }) => {
        return (
          <Autocomplete
            value={value}
            onChange={(event, newValue) => onChange(newValue)}
            options={companies}
            getOptionLabel={(option) => option} 
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Company" variant="outlined" />}
          />
        );
    };
    
export default TableAutoFill;
