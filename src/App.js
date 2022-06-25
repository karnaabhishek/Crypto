import './App.css';
import {useEffect, useState} from 'react';
import Chart from './Chart/Chart';
import Table from './Chart/Table';
import { Routes, Route} from "react-router-dom";
import Navbars from './Chart/Navbars';
import 'bootstrap/dist/css/bootstrap.min.css';
import Detail from './Chart/Detail';
import Hello from './Chart/Hello';
function App() {
  const [data, setData] = useState({})
  
  
  useEffect(()=> {
       
    const fetchData= async()=> {
        const url = 'https://api.coindesk.com/v1/bpi/currentprice.json'

      await fetch(url).then((data)=> {

          const res = data.json();
          
          return res
          
      }).then((res) => {
        const value = Object.values(res.bpi)
        const values = value.map((x)=>x.rate)
        const code = value.map((x)=>x.code)
         setData([values, value, code])
      }).catch(e => {
             console.log("error", e)
         })
     }
     fetchData();
     setInterval(() => {
       fetchData();
     }, 10000);
     
  },[])

  return (
    <div className="App">
      <Navbars s/>
      <Routes>
        <Route path="/" element={<Hello/>}/>
        <Route path="/chart" element={<Chart/>} />
        <Route path="/table" element={<Table data = {data[1]}/>} />
        <Route path="/detail" element={<Detail data = {data[1]}/>} />
      </Routes>
    </div>
  );
}

export default App;
