import  { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea" 

const MessageForm = () => {
    const [message,setMessage] = useState<string>("")
    const [delay,setDelay] = useState<number>(10);
    const [isSending,setIsSending] = useState<boolean>(false);
    const [timerId,setTimerId] = useState<NodeJS.Timeout | null>(null)
    const [sentMessage,setSentMessage] = useState<string[]>([])

const handleSend = ()=>{
  setIsSending(true)
  const id = setTimeout(() => {
    setSentMessage(prev=>[...prev,message])
    setMessage("")
    setIsSending(false)
   }, delay * 1000)

  setTimerId(id)
}
const handleCancel = () =>{
 if(timerId) clearTimeout(timerId)
  setIsSending(false)

}
const ClearMessage =()=>{
  setSentMessage([]);
}
  return (
    <div className="w-full h-full mx-auto mt-0 p-6 flex flex-col gap-2">
      <h2 className="text-2xl text-center font-bold text-gray-800 mb-2">1.DM Delay Button</h2>
      <div className="flex-2 overflow-y-auto bg-green-100 rounded-xl space-y-2 pr-2 mr-0 ml-0"> 
   
    {sentMessage && (
      <div className="ml-auto flex flex-col items-right p-3 rounded-lg text-green-900 text-right">
          <h2 className="text-2xl font-semibold text-right text-gray-700 mb-2">Sent Messages</h2>
         {sentMessage.map((msg,index)=>(
          <p className="mt-2 rounded bg-white font-semibold mr-3 pr-3" key={index}>{msg}</p>
        // <p>{sentMessage}</p>

         ))} 
      </div>)
    }
  </div>
      <div className="w-full flex flex-col md:flex-row justify-around gap-2 mt-4 ">
        <div className="w-full md:w-3/5">
        <Textarea  placeholder="Enter a message...." 
       value={message}
       //message tuyped in text area will be stored in Message 
       onChange={(e)=>setMessage(e.target.value)}
       className="min-h-[100px] bg-white"/>
        </div>


{/* once form submitted, it will fetch the values as string, so we should convert this to Number */}
{/* <Button className="w-full">Send with delay</Button> */}
{/* once this button clicked the message will be under sentmessage as it is sent right - handlesend */}
        <div className="flex flex-col md:flex-col justify-around gap-2 w-full md:w-2/5"> 
       {!isSending?( <Button className="w-full" onClick={handleSend}>
                 Send with delay  
                 </Button>):
             (<Button className="w-full" variant="destructive" onClick={handleCancel}>
                  Cancel Message
                </Button>)}
                <div className="flex flex-row gap-2">
                <Input className="w-full text-base" type="Number" placeholder="delay in seconds" value={delay}
        onChange={(e)=>setDelay(Number(e.target.value))} /> 
        <Button className="w-2/3" variant="destructive" onClick={ClearMessage}>
                  Clear
                </Button>
                </div>    

        </div>       
      </div >
      {/* section-sentmessage */}


</div>
  )
}

export default MessageForm
