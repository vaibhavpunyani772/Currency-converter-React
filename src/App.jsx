import { useState } from "react";
import React from "react";
import "./App.css";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import bgImage from "./assets/background.jpg";

function App() {
  const [ammount, setAmmount] = useState(null);
  const [to, setTo] = useState("inr");
  const [from, setFrom] = useState("usd");
  const [convertedAmt, setConvertedAmt] = useState("");

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setTo(from);
    setFrom(to);

    const newAmt = convertedAmt;
    setAmmount(newAmt);
    setConvertedAmt(ammount ? parseFloat(ammount) * currencyInfo[from] : "");
  };

  const convert = () => {
    setConvertedAmt(ammount ? parseFloat(ammount) * currencyInfo[to] : "");
  };

  return (
    
    <div
    
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat px-3 md:px-0"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-5xl font-bold text-gray-100 pt-0 h-6 " >Currency Conveter</h1>
      <div className="w-full mb-30">
        <div className="w-full max-w-2xl mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={ammount}
                currencyOption={options}
                onCurrencyChange={(currency) => setFrom(currency)} // ✅ FIXED
                selectCurrency={from}
                onAmountChange={(value) => setAmmount(value)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-[#0d6380] text-white px-2 py-0.5 h-10 w-15"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmt}
                currencyOption={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                currencydisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#0d6380] text-white px-4 py-3 rounded-lg"
              onClick={convert}
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
      <footer className="text-center py-4 text-white text-lg w-full fixed bottom-0 ">
        Made by <span className="font-semibold">Vaibhav ✌️ </span>
      </footer>
    </div>
  );
}

export default App;
