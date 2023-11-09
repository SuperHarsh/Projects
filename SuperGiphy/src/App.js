import Random from "./Components/Random";
import Tag from "./Components/Tag";


function App() {


  return(
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="wrapper w-[100vw] h-[100vh]"></div>
      <div className="absolute">
        <h1 className="text-black main-heading">SuperGiphy</h1>
        <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
          <Random></Random>
          <Tag></Tag>
        </div>
      </div>
    </div>
  )
}

export default App;
