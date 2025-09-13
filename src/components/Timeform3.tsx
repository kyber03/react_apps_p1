import { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

interface props{
  onAdd:(activity:string,hours:number) => void
}

const Timeform3 = ({onAdd}:props) => {
  const[activity,setActivity] = useState("")
  const[hours,setHours] = useState("")

  const handleSubmit = () => {

    if(!activity.trim()||!hours){
      alert("Please fill the details")
    }
    onAdd(activity,Number(hours))
    setActivity("")
    setHours("")
  }

  return (
    <div>
      <div className='flex flex-col gap-3 p-6'>
       <Input  placeholder='Activity Eg.Sleep'
       value={activity}
       onChange={(e)=>setActivity(e.target.value)}/>
          <Input  placeholder='Hours Eg.8'
       value={hours}
       onChange={(e)=>setHours(e.target.value)}/> </div>
       <Button className='block mx-auto bg-[#2c3e50] text-1xl m-2' onClick={handleSubmit}>

        Add activity
       </Button>
    </div>
  )
}

export default Timeform3
