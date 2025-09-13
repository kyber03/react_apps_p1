import TimeChart3 from "@/components/TimeChart3"
import Timeform3 from "@/components/Timeform3"
import { useState } from "react"


const TimeTrackerApp3 = () => {

  const [data,setData] = useState<{activity:string; hours:number}[]>([])

  const handleAdd = (activity:string, hours:number) =>{
      setData((prev)=>[...prev,{activity,hours}])
   console.log(data)
  }
  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white rounded shadow space-y-6">
       <h1 className="text-2xl text-center font-semibold text-[#2c3e50]">3.Time Tracker</h1>
       <Timeform3  onAdd={handleAdd}/>
       <TimeChart3 data={data}/>
    </div>
  )
}

export default TimeTrackerApp3

