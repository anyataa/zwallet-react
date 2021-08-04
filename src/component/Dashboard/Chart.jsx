import React, { useState, useEffect } from 'react'
import { Chart as ChartJS, Bar} from 'react-chartjs-2'


function getDay(day){  
  var today = new Date();  
  var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;          
          today.setTime (targetday_milliseconds); // Note that this line of code is the key
    
  var tYear = today.getFullYear();  
  var tMonth = today.getMonth();  
  var tDate = today.getDate();  
  tMonth = doHandleMonth(tMonth + 1);  
  tDate = doHandleMonth(tDate);  
  return tYear+"-"+tMonth+"-"+tDate;  
}  
function doHandleMonth(month){  
  var m = month;  
  if(month.toString().length == 1){  
     m = "0" + month;  
  }  
  return m;  
}

const chartColors = {
    purple: "#6379F4",
    grey: "#7a7886",
  };


  
const DynamicChart = () => {
  
       const [chartData, setChartData]  = useState({});   
       const [chartLast7Days, setChartLast7Days] = useState(JSON.parse(localStorage.getItem("transaction-data"))?JSON.parse(localStorage.getItem("transaction-data")).listBalance:[]) ;
       const [chartLabel, setChartLabel] = useState(JSON.parse(localStorage.getItem("transaction-data"))?JSON.parse(localStorage.getItem("transaction-data")).listBalance: [])
       const [daysLabel, setDaysLabel] = useState(null)
       const [balanceHistory, setbalanceHistory] = useState(null)

       
      
const Chart = () => {
  console.log("iniii")
  console.log(chartLast7Days[0].[0],chartLast7Days[1].[0], chartLast7Days[2].[0],chartLast7Days[3].[0], chartLast7Days[4].[0],chartLast7Days[5].[0], chartLast7Days[6].[0],chartLast7Days[7].[0])
  
       setChartData({
      //  labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
       labels: daysLabel,
       datasets: [{
                         label: '',
                         borderWidth: 2,
                          borderRadius: Number.MAX_VALUE,
                          borderSkipped: false,
                        //  data: chartLast7Days[1,7].[1],
                        //  data: [100,200,400,6600,100,100,800],
                         data: balanceHistory,
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
       if (chartLabel){
        // var dayName = [days[d.getDay()]];
        var dayName = [];
        // console.log(dayName,"anya", getDay(-6))
        for (let i = -7; i < 0; i++) {
          var days = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
          var d = new Date(getDay(i));
          dayName.push(days[d.getDay()]);
          // console.log(dayName, getDay(i))
        }
        setDaysLabel(dayName)
        setbalanceHistory([chartLast7Days[0].[0],chartLast7Days[1].[0], chartLast7Days[2].[0],chartLast7Days[3].[0], chartLast7Days[4].[0],chartLast7Days[5].[0], chartLast7Days[6].[0],chartLast7Days[7].[0]])
       }
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