import {useEffect, useState}from "react";
import TextField from "@mui/material/TextField";
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Box } from "@mui/material";

export default function DatePicker({getDate}) {
  const [value, setValue] = useState([null, null]);

  useEffect(() => {
    
    getDate(value)
  }, [value]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <DateRangePicker
      startText="Fecha Inicio"
      endText="Fecha Final"
      value={value}
      onChange={(newValue) => setValue(newValue)}
      renderInput={(startProps, endProps) => (
        <>
          <TextField {...startProps} />
          <Box sx={{ mx: 2, color: "white" }}>  </Box>
          <TextField {...endProps} />
        </>
      )}
    />
    </LocalizationProvider>
  );
}
