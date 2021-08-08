import axios from "axios";
import React, { useState, useEffect } from "react";
import { Chart as ChartJS, Bar } from "react-chartjs-2";

function getDay(day) {
  var today = new Date();
  var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
  today.setTime(targetday_milliseconds); // Note that this line of code is the key

  var tYear = today.getFullYear();
  var tMonth = today.getMonth();
  var tDate = today.getDate();
  tMonth = doHandleMonth(tMonth + 1);
  tDate = doHandleMonth(tDate);
  return tYear + "-" + tMonth + "-" + tDate;
}
function doHandleMonth(month) {
  var m = month;
  if (month.toString().length == 1) {
    m = "0" + month;
  }
  return m;
}

const chartColors = {
  purple: "#6379F4",
  grey: "#7a7886",
};

const DynamicChart = () => {
  const [chartData, setChartData] = useState({});
  const [chartLast7Days, setChartLast7Days] = useState(
    JSON.parse(localStorage.getItem("graph-data"))
      ? JSON.parse(localStorage.getItem("graph-data"))
      : []
  );
  //  const [chartLabel, setChartLabel] = useState(JSON.parse(localStorage.getItem("transaction-data"))?JSON.parse(localStorage.getItem("transaction-data")).listBalance: [])
  const [daysLabel, setDaysLabel] = useState(null);
  const [balanceHistory, setbalanceHistory] = useState(null);

  const Chart = () => {
    // Set Day based on date
    var dayName = [];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    for (let i = -6; i < 1; i++) {
      var d = new Date(getDay(i));
      dayName.push(days[d.getDay()]);
      setDaysLabel(dayName);
    }

    axios
      .get(
        `http://localhost:8080/zwallet-api/transaction/graph/${
          JSON.parse(localStorage.getItem("userData")).accountId
        }`
      )
      .then((res) => {
        setbalanceHistory(res.data.data);
        console.log(res.data.data.length, balanceHistory);
        localStorage.setItem("graph-data", JSON.stringify(res.data.data));

        var dayColor = [];
        var previousBalance = 0;
        if (res.data.data) {
          console.log("in");
          for (let i = 0; i < res.data.data.length; i++) {
            if (previousBalance > res.data.data[i]) {
              dayColor.push(chartColors.grey);
              console.log("in");
            } else {
              dayColor.push(chartColors.purple);
              console.log("ina");
            }
            previousBalance = res.data.data[i];
          }
        }
        console.log("daycolor", dayColor);
        setChartData({
          //  labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
          labels: dayName,
          datasets: [
            {
              label: "",
              borderWidth: 2,
              borderRadius: Number.MAX_VALUE,
              borderSkipped: false,
              data: [
                res.data.data.seventh,
                res.data.data.sixth,
                res.data.data.fifth,
                res.data.data.forth,
                res.data.data.third,
                res.data.data.second,
                res.data.data.first,
              ],
              //  data: [100,200,300],
              barPercentage: 0.2,
              backgroundColor: dayColor,
              borderColor: dayColor,
              borderWidth: 1,
            },
          ],
        });
      });
  };
  useEffect(() => {
    Chart();
  }, []);

  return (
    <div className="App">
      <br />
      <br />
      <br />
      <div>
        <Bar
          data={chartData}
          options={{
            plugins: {
              legend: { display: false },
            },
            responsive: true,
            maintainAspectRatio: true,
            title: { text: "THICCKNESS SCALE", display: false },
            scales: {
              x: {
                grid: {
                  drawBorder: false,
                  color: "rgba(0, 0, 0, 0)",
                },
              },
              y: {
                display: false,
                grid: {
                  drawBorder: false,
                  color: "rgba(0, 0, 0, 0)",
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};
export default DynamicChart;
