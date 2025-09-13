import TimeTrackerApp3 from "./Pages/TimeTrackerApp3"
import MessageForm from "./components/MessageForm"
import Home2 from "./Pages/Home2"

 

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#dfe9f3] to-[#fafafa]">
      <div className="w-4/5 mx-auto my-6 bg-[#2c3e50] text-white text-3xl font-semibold font-sans 
      text-center rounded-xl p-6 shadow-xl"> React App - Set 2 </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-svh p-4 md:p-6 overflow-y-auto">
     <div className="app bg-[#faf0e6] p-6 rounded-2xl shadow-md ">  <MessageForm/></div>
     <div className="app bg-[#faf0e6] p-6 rounded-2xl shadow-md"> <Home2/></div>
     <div className="app bg-[#faf0e6] p-6 rounded-2xl shadow-md"> <TimeTrackerApp3/></div>
      
      
    </div>
    </div>
  )
}

export default App
