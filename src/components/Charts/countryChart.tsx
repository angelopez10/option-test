import React, { useContext } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { Context } from "../../store/appContext";

ChartJS.register(
  ArcElement,

  Tooltip,
  Legend
);



const labels = ["Noticias por Pais", "Noticias por Palabra clave", "Total"];



export function CountryChart() {
    const {store} = useContext(Context)

    const data = {
        labels: labels,
        datasets: [
          {
            label: "# of Votes",
            data: [store.countryNews?.length, store.keywordNews?.length, (store.keywordNews?.length + store.countryNews?.length)],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      };
  return (
    <Pie
    width={300}
    height={300}
    options={{ maintainAspectRatio: false }}
    data={data}
      
    />
  );
}
