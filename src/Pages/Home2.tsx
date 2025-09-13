import MoodInput2 from "@/components/MoodInput2"
import MoodOutput2 from "@/components/MoodOutput2"

import { useState } from "react"


const Home2 = () => {
  const [mood,setMood] = useState<string>("")
  const [subject,setSubject] = useState<string>("")
  const [footer,setFooter] = useState<string>("")
  const[generated,setGenerated] = useState(false)

  const handleGenerate = () => {
    const lowerMood = mood.toLowerCase()

    if(lowerMood.includes("happy")){
      setSubject("Feeling great")
      setFooter("Awesome day")
    }
    else if(lowerMood.includes("angry")){
      setSubject("Cool Buddy")
      setFooter("Deep Breaths")
    }
    else if(lowerMood.includes("sad")){
      setSubject("Exhausted....")
      setFooter("Sending Hugs")
    }
    else{
      setSubject("Mood update...")
      setFooter("Catch you later")
    }

    setGenerated(true)
  }

  const handleReset = () => {
    setFooter("")
    setSubject("")
    setMood("")
    setGenerated(false)
  }
  return (
    <div className="gap-40xl">
      <h2 className='text-2xl font-bold text-gray-800 text-center p-5'>2.Mood Mail Generator</h2>
      

      {!generated?
     (<MoodInput2 mood={mood} setMood={setMood} disabled={generated} onGenerate={handleGenerate}/>)
     :
     
     ( <MoodOutput2 subject={subject} 
      footer={footer} 
      onReset={handleReset}/>)
       }
       
    </div>
  )
}

export default Home2
