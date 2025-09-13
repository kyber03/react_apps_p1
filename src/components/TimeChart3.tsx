import { Pie } from "react-chartjs-2"
import { Chart as chartJS,ArcElement,Legend,Tooltip } from "chart.js"

chartJS.register(ArcElement,Legend,Tooltip)

interface props{
    data:{activity:string, hours:number}[]
}

const TimeChart3 = ({data}:props) => {
   
    const chartData = {

        labels:data.map((d)=>d.activity),
        datasets:[
            {
                label:"Hours",
                data:data.map((d)=>d.hours),
                backgroundColor:[
                    '#FF6384','#36A2EB','#FFCE56','#34D399','#A78BFA'
                ],
                borderWidth:1
            }
        ]
    }

  return <Pie data={chartData}/>
}

export default TimeChart3
