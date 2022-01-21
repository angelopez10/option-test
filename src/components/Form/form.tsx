import { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DatePicker from "./datePicker";
import { Context } from "../../store/appContext";
import {Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function Form() {
  const { store, actions } = useContext(Context);
  const [userAnswer, setUserAnswer] = useState({
    keyword: "",
    country: "",
    startDate: "", 
    endDate: ""
  })

  useEffect(() => {
    actions.getAllCountriesList();
    console.log(process.env.API_KEY)
  }, []);

  console.log(store.countries);

  const handleChange = (e: any) => {
    setUserAnswer({...userAnswer, [e.target.name]: e.target.value})
  }

  const getDateFromChild = (e: any) => {
    if(e[0]){
      setUserAnswer({...userAnswer, startDate: e[0]})
    }
    
    if(e[1]){
      setUserAnswer({...userAnswer, endDate: e[1]})
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    let startDateFormated = new Date(userAnswer.startDate)
    let endDateFormated = new Date(userAnswer.endDate)
    let startDateWithoutTimestamp = startDateFormated.toISOString().split("T")
    let endDateWithoutTimestamp = endDateFormated.toISOString().split("T")
    let body = {
      keyword: userAnswer.keyword,
      country: userAnswer.country,
      startDate: startDateWithoutTimestamp[0],
      endDate: endDateWithoutTimestamp[0]
    }

    actions.getAllKeywordNews(body)
    actions.getAllCountryNews(body)
  }

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 5, width: "50ch", display: "flex", justifyContent: "center", alignItems: "center"},
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Box>
      <TextField
        id="outlined-basic"
        label="Palabra Clave"
        variant="outlined"
        size="medium"
        name="keyword"
        onChange={handleChange}
        sx={{
          "& > :not(style)": { mr: 2 },
        }}
      />
      <FormControl fullWidth sx={{
          "& > :not(style)": { ml: 2 },
        }}>
        <InputLabel id="demo-simple-select-label">Pais</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={userAnswer.country}
          label="Country"
          name="country"
          onChange={handleChange}
        >
          {store.countries && store.countries.map((item: any, i: number) => {
            return <MenuItem value={item.iso2} key={i}>{item.country}</MenuItem>
          })}
        </Select>
      </FormControl>
      </Box>
      <DatePicker getDate={getDateFromChild}/>
      <Button variant="contained" type="submit">Buscar</Button>
    </Box>
  );
}
