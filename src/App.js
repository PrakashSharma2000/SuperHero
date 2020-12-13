import React ,{useState , useEffect} from 'react'
import './App.css';

import Header from "./Component/Header"
import Superheros from './Component/Superheros'
import Pagination from './Component/Pagination'
import axios from "axios" //for fetching data from http site {from api}
function App() {
  
 

  const [data, setData] = useState([])
  const [isLoading, setisLoading] = useState(true)

  //Pagination part...
  const [currentState, setcurrentState] = useState(1)
  const [dataPerpage] = useState(20)
  
  const indexOfLastpage= currentState * dataPerpage;
  const indexOfFirstpage = indexOfLastpage - dataPerpage;
  const currentpost = data.slice(indexOfFirstpage,indexOfLastpage);

  const paginate = (pagenumber) => setcurrentState(pagenumber);

  useEffect(() => {
    const fetchitem =async () =>{
      const result =await axios(`https://akabab.github.io/superhero-api/api/all.json`)
      setData(result.data)
      setisLoading(false)
    }
   fetchitem() 
  }, [])
  return (
    <div className="App">
    <Header/>
      <Superheros data={currentpost} isLoading={isLoading}/>
      <Pagination postPerpage ={dataPerpage} totalPage ={data.length} paginate={paginate}/>
    </div>
  );
}


export default App;
