import React, { useState, useEffect } from 'react'
import { Chart as ChartJS, Bar} from 'react-chartjs-2'
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
                         label: '',
                         borderWidth: 2,
                          borderRadius: Number.MAX_VALUE,
                          borderSkipped: false,
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
            <br /><br /><br />
              <div>
                  <Bar
                    data={chartData}
                    // width={"10rem"}
                    // height={'5rem'}
                    options={{
                      plugins: {
                        legend: {display:false
                        }
                      },
                        responsive:true,
                        maintainAspectRatio: true ,
                        title: { text: "THICCKNESS SCALE", display: false },
                          scales: {
                            // x: {
                            //   grid: {
                            //     display: false,
                            //     drawBorder: false,
                            //     drawOnChartArea: false,
                            //     drawTicks: false,
                            //   }
                            // },
                            // xAxes: [{
                            //     gridLines: {
                            //         color: "rgba(0, 0, 0, 0)",
                            //     }
                            // }],
                            x: {
                              grid: {
                                drawBorder: false,
                                color:  'rgba(0, 0, 0, 0)',
                                },
                                
                              },
                            y: {
                              display: false,
                              grid: {
                                drawBorder: false,
                                color:  'rgba(0, 0, 0, 0)',
                                
                                },
                                
                              },
                            // yAxes: [{
                            //     gridLines: {
                            //         display: false
                            //     }   
                            // }]
                        }
                    }}
                  />
              </div>
          </div>
      )
 }
export default DynamicChart;