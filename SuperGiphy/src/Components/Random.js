import Spinner from './Spinner';
import Usegif from '../Hooks/Usegif';

const Random = () => {

    const {gif,load,fetchdata} = Usegif();

    function clickHandler(){
        fetchdata();
    }

  return (
    <div className='w-1/2 bg-white rounded-2xl border-2 border-white bg-opacity-60 flex flex-col items-center gap-y-5 mt-[15px] div1'>
        <h1 className='uppercase random mt-[15px]'>Randomphy</h1>

        {
            load ? (<Spinner/>) : (<img src={gif} width="450" alt='GIF'></img>)
        }

        <div className="relative inline-block px-4 py-2 mb-[15px] font-medium group hover:cursor-pointer" onClick={clickHandler}>
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white">G e n e r a t e</span>
        </div>
    </div>
  )
}

export default Random