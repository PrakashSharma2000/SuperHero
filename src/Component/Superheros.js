import React from 'react'
import Superdata from "./Superdata"

const Superheros = ({data , isLoading}) => {
   return isLoading ?(
        <div>
           <h1>data is loading...</h1>
        </div>
    ) : (   <div className="agrid">
                {data.map(val =>(
                    <Superdata key={val.id} data={val} />
                ))}
            </div>
        
    )
}

export default Superheros