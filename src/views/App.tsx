import './App.css'
import Form from "../components/Form/form";
import NavBar from "../components/navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CountryChart } from "../components/Charts/countryChart";
import injectContext from "../store/appContext";
import NewsTable from "../components/Table";
import { Typography } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <header className="App-header">
          <NavBar sectionTitle="News App" />
        </header>
        <div className="form-container">
          <Form />
        </div>
        <div className="chart-container">
          <CountryChart />
        </div>
        <div className="table-container">
         
        <NewsTable />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default injectContext(App);
