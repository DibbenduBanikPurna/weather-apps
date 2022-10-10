import React from 'react';
import './Result.css'
const Result = ({data,history,historySearch}) => {
    console.log(history)
    const historyItems=history.map((item,index)=>{
        return <li onClick={()=>historySearch(item)} key={index}>{item}</li>

    }
    )
    return (

        <div className='container'>
            <div className='row b'>
            {data.length!==0
            ?<>
            
            
           
          
                <div className='col-md-4'>
                <h4>History</h4>
                <br/>
            {<ul>{historyItems}</ul>}
            
                </div>
                <div className='col-md-4'>
                <h2 className='text-center'>{data?.name}</h2>
                <div>Max Temp:{data?.main?.temp_max}</div>
                <div > <img src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`} alt="" /></div>

                </div>
                <div className='col-md-4'>
                <div className='text-right mt-5'>Min Temp:{data?.main?.temp_min}</div>
             
             <div className='text-right mt-5 '>{data?.weather[0]?.main}</div>
           
             
                </div>
                </>: <h3 className='text-center'>"Please Enter the city"</h3>}
            </div>
            
             
           
        </div>
    );
};

export default Result;