import { useState } from 'react'

const Bulb = () => {

    const [isOn, setOn]=useState(false);
    function handleToggle(){
      setOn(!isOn);
    }

    const [num, setNum]=useState(0);
    // function incrementNum(){
    //   setNum(prev=>prev+1);
    // }


  return (
    <div className='h-80 pb-60 justify-center pt-35 flex'>
      <div className='bg-teal-500'>
        <h1>{num}</h1>
        <button onClick={()=>{setNum(prev=>prev+1)}}>Hit me!</button>
      </div>
      <div className='flex items-center justify-center gap-6 bg-teal-100'>
        <div className={`h-10 w-10 rounded-full bg-yellow-300 ${isOn?'shadow-[0_0_25px_5px_rgba(253,224,71,0.8)] border border-yellow-200':'bg-zinc-900'} `}>
        </div>
        <button onClick={handleToggle} className='rounded-md'>{isOn?"ON":"OFF"}</button>
      </div>

    </div>
  )
}

export default Bulb