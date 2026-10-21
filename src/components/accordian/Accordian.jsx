import  {useState} from 'react'
import data from "./data"
import './Accordian.css'

const Accordian = () => {

    const [selected, setSelected]=useState(null);

    function handleSingleSelection(getCurrentId){
        console.log(getCurrentId);
        setSelected(getCurrentId === selected ? null:getCurrentId);
    }

  return (
    <div className='wrapper'>
        <div className='accordian'>
            {
                data && data.length>0 ?
                  data.map(dataItem=> <div className='item'>
                    <div onClick={()=>handleSingleSelection(dataItem.id)} className='title'>
                        <h3>{dataItem.question}</h3>
                        <span>{selected===dataItem.id?'-':'+'}</span>
                    </div>
                    {/* answer */}
                    {
                        selected === dataItem.id && (
                          <div className='content'>
                            <p>{dataItem.answer}</p>
                          </div>
                        )
                      }
                    

                  </div>)
                : <div>Data not found !</div>
            }

        </div>

    </div>
  )
}

export default Accordian