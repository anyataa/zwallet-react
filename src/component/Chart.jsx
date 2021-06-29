import React, { useState, useEffect } from 'react'
import {Bar} from 'react-chartjs-2'
const chartColors = {
    purple: "#6379F4",
    grey: "#7a7886",
  };
const DynamicChart = () => {
       const [chartData, setChartData]  = useState({});    
      
const Chart = () => {
       setChartData({
       labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
       datasets: [{
                         label: '# of Votes',
                         data: [100000, 120000, 110000, 50000, 10000, 120000, 124000, 134000],
                         barPercentage: 0.2,
                         backgroundColor: [
                            chartColors.purple,
                            chartColors.grey,
                            chartColors.purple,
                            chartColors.purple,
                            chartColors.grey,
                            chartColors.grey,
                            chartColors.purple,
                          ],
                         borderColor:  [
                            chartColors.purple,
                            chartColors.grey,
                            chartColors.purple,
                            chartColors.purple,
                            chartColors.grey,
                            chartColors.grey,
                            chartColors.purple,
                          ],
                         borderWidth: 1
                     }]
              });
}
     useEffect(() => {
        Chart();
      }, []);

return(
          <div className="App">
              <div>
                  <Bar
                    data={chartData}
                  
                    options={{
                        responsive:true,
                        maintainAspectRatio: true ,
                        title: { text: "THICCNESS SCALE", display: false },
                        legend: {
                            display: false,
                            fontSize: 0,
                          },
                        scales:{
                            yAxes:[ {
                                ticks:{
                                    beginAtZero: true
                                }
                            }
                            ]
                        }
                    }}
                  />
              </div>
          </div>
      )
 }
export default DynamicChart;