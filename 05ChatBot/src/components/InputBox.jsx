import React from 'react'
import useMsg from '../context/contexts'
function InputBox() {
   const {msg, setMsg,generateContent, setSender} = useMsg()
   


   const handleClick = (e) => {
    e.preventDefault();
    if (msg.trim()) {
     
      setSender((prevSender) => [
        ...prevSender,
        { text: msg, type: 'user' },
      ]);
      generateContent(msg); 
      setMsg(''); 
    }
  };
    
  return (
    <>
    <input type="text" 
    value={msg}
    placeholder='Message...'
    onChange={(e) => setMsg(e.target.value)}
    className={'w-[280px] h-9 bg-white rounded-full border-none outline-none pl-3 pr-[52px] relative'}/>
    <button type="button"
    onClick={handleClick}
    className={`${msg.trim() ? 'bg-blue-500' : 'bg-blue-300'} w-11 h-7 rounded-full  absolute flex items-center justify-center ml-[228px] border-none outline-none`}>
 <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-6 fill-slate-200' viewBox="0 0 512 512"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg></button>
  
    </>
  )
}

export default InputBox