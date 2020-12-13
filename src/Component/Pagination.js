import React from 'react'

const Pagination = ({postPerpage,totalPage,paginate}) => {

    const pageNumber = [];
    
    for(let i=1;i<=Math.ceil(totalPage/postPerpage); i++){
        pageNumber.push(i)
    }

    return (
        <div>
            <nav>
                <ul>
                   {pageNumber.map(number =>(
                       <li class="page-link" className="list" key={number}><button type="" onClick={()=>paginate(number)}>{number}</button></li>
                   ))}
                </ul>
            </nav>
        </div>
    )
}
export default Pagination