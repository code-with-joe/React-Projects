import React, { useEffect, useState } from "react";
import './App.css'
function App() {
  const btns = [
    "AC",
    "%",
    "C",
    "/",
    7,
    8,
    9,
    "*",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
   "00",
    0,
    ".",
    "=",
  ];
  // const btns = [1,2,3,4,5,6,7,8,9,0,"+", "/","-",".","*","=","AC","C"]
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const addIntoBox = (value) => {
   if(value == 'AC'){
    handleAllClear()
   }else if (value == 'C'){
     handleClear();
    }else if(value == '='){
       handleCalculate()
    }else
    setInput(input + value);
  };
  const handleClear = () => {
    setInput(input.slice(0,-1))
    setOutput('')
  }
  const handleAllClear = () => {
    setInput('')
    setOutput('')
  }
  const handleCalculate = () => {
    "use strict";
    if(input){
      setOutput(eval(input))
    }else{
      setOutput('')
    }
  }

  useEffect(() => {
  handleCalculate()
  },[setInput])
  return <>
    <div className=" w-[330px] h-[105px]  bg-white rounded-t-xl overflow-hidden">
    <input
        type="text"
        value={input}
        className="w-[330px] h-[50px] text-black border-none outline-none text-2xl font-medium bg-white text-right p-6"
        onChange={(e) => setInput(e.target.value)}
        readOnly
      />
      <input
        type="text"
        value={output}
        onChange={(e) => setOutput(e.target.value)}
        className="w-[330px] h-[50px] text-black border-none  bg-white outline-none text-3xl font-semibold text-right p-6"
        readOnly
      />
    </div>
    
      <div className="flex-row p-[5px] w-[330px] h-[370px] bg-white rounded-b-xl">
      {btns.map((btn, index) => (
        <input
          type="button"
          key={index}
          value={btn}
          className="w-[60px] h-[60px] text-center ml-2 mr-2 mb-[12px] text-xl border-none rounded-full cursor-pointer bg-slate-300 
          shadow-2xl"
          onClick={() => addIntoBox(btn)}
        />
      ))} 
      </div>
     
      
      
      </>
    
  
    }
export default App;