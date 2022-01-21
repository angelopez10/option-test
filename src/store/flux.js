import axios from "axios";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      countries: [],
      keywordNews: [],
      countryNews: []
    },
    actions: {
      getAllCountriesList: () => {
        try {
          axios
            .get("https://countriesnow.space/api/v0.1/countries/")
            .then((res) => {
              setStore({ countries: res.data.data });
            });
        } catch (error) {
          console.log(error.msg);
        }
      },
      getAllKeywordNews: (item) => {
        try {
          axios
            .get(`https://newsapi.org/v2/top-headlines?q=${item.keyword}&from=${item.startDate}&to=${item.endDate}&apiKey=${process.env.API_KEY}`)
            .then((res) => {
              
                
              setStore({ keywordNews: res.data.articles });
            });
        } catch (error) {
          console.log(error.msg);
        }
      },
      getAllCountryNews: (item) => {
        try {
          axios
            .get(`https://newsapi.org/v2/top-headlines?country=${item.country}&from=${item.startDate}&to=${item.endDate}&apiKey=${process.env.API_KEY}`)
            .then((res) => {
              setStore({ countryNews: res.data.articles });
            });
        } catch (error) {
          console.log(error.msg);
        }
      },
    },
  };
};

export default getState;
