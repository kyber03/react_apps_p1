import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type Props = {
    mood:string,
    setMood:(val:string)=> void,
    onGenerate:()=>void,
    disabled:boolean
}

const MoodInput2 = ({mood,setMood,onGenerate,disabled}:Props  )=> {
  return (
    <div className="p-4 gap-30xl">
      <Input 
      placeholder="Angry, Happy or Sad"
      value={mood}
      onChange={(e)=>setMood(e.target.value)}
      disabled={disabled}/>
      <Button className="w-full" onClick={onGenerate} disabled={disabled}>
        Generate Mail Response
      </Button>
    </div>
  )
}

export default MoodInput2
