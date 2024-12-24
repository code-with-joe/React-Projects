import { useCallback, useState, useEffect } from "react";
import "./App.css";

function App() {
  const [lenght, setLenght] = useState(6);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [result, setResult] = useState("");

  const generatePassword = useCallback(() => {
    let password = "";
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) char += "0123456789";
    if (symbol) char += "!@#$%^&*()_+";
    for (let i = 0; i < lenght; i++) {
      password += char.charAt(Math.floor(Math.random() * char.length));
    }
    setResult(password);
  }, [lenght, number, symbol, setResult]);

  useEffect(() => {
    generatePassword();
  }, [lenght, number, symbol, generatePassword]);

  const copyPassword = useCallback(() => {
    window.navigator.clipboard.writeText(result);
  }, [result]);

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="flex items- justify-center flex-col w-[26vw] py-5 px-3 bg-cyan-400 rounded-lg">
          <div className=" text-left">
            <h1 className=" text-xl font-bold mb-4 ml-2">
              Password Generator 🤖
            </h1>
          </div>

          <div>
            <input
              type="text"
              value={result}
              onChange={(e) => setResult(e.target.value)}
              readOnly
              className="w-[20vw] h-[2.6vw]  text-lg rounded-lg px-4 py-2 outline-none"
            />
            <button
              onClick={copyPassword}
              className="bg-orange-400 text-center px-4 py-[0.4vw] ml-[-1vw] text-lg font-semibold rounded-lg hover:bg-orange-500"
            >
              Copy
            </button>
          </div>
          <div className="flex items-center justify-between mt-4 ml-5 mr-5">
            <label htmlFor="lenght" className="text-base ">
              Password Lenght
            </label>
            <input
              type="number"
              name="lenght"
              id="lenght"
              value={lenght}
              onChange={(e) => setLenght(e.target.value)}
              className="w-10 outline-none text-center px-1 rounded-sm [&::-webkit-inner-spin-button]:appearance-none "
            />
          </div>
          <div className="flex items-center justify-between mt-4 ml-5 mr-5">
            <label htmlFor="number" className="text-base ">
              Include Number
            </label>
            <input
              type="checkbox"
              name="number"
              id="number"
              defaultChecked={number}
              onChange={(e) => setNumber(e.target.checked)}
              className="w-4 h-4 cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-between mt-4 ml-5 mr-5">
            <label htmlFor="symbol" className="text-base ">
              Include Symbols
            </label>
            <input
              type="checkbox"
              name="symbol"
              id="symbol"
              defaultChecked={symbol}
              onChange={(e) => setSymbol(e.target.checked)}
              className="w-4 h-4 cursor-pointer"
            />
          </div>
          <div>
            <button
              onClick={generatePassword}
              className=" bg-blue-400 text-center px-4 py-[0.4vw] mt-5 text-lg font-semibold rounded-md hover:bg-blue-500"
            >
              Next...
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
