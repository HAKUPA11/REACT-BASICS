// import React from 'react'
import data from './data'

const Card = () => {

  
  return (
    <div className="pb-100 flex gap-15 mt-30" >
      {data.map((item)=><div className="h-60 w-50 flex flex-col rounded-md overflow-hidden">
        <img className="h-4/6 object-cover" src={item.url} alt="" srcset="" />
        <div>
          <h3 className="text-sm">{item.title}</h3>
          <p className="text-xs">{item.text}</p>
        </div>
        <button className="text-rose-800 rounded-md">
          Hit me!
        </button>
      </div>)}
      
    </div>
  )
}

export default Card