import React from 'react'

const Superdata = ({data}) => {
    return (
        
            <div className="card">
                
            <img src={data.images.sm} alt={data.name}/>
                <div className ="supername">
                {data.name}
                </div>
            </div>  
      
           
        
            
        
    )
}

export default Superdata