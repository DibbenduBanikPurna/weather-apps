import React from 'react';

const Search = ({handleChange,handleSubmit}) => {
   //console.log(handleSubmit)
    return (
       <div className="container">
           <div  className="mt-2">
 
 <div className="d-flex">
   
   <input type="text" onChange={(e)=>handleChange(e.target.value)} className="form-control mt-2" id="country" placeholder="Enter Search Area"/>
 
 <button onClick={handleSubmit}  className="btn btn-secondary btn-lg btn-primary mt-2">Search</button>
 </div>
</div>
       </div>
         
       
    );
};

export default Search;