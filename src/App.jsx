import { useState } from "react";
import React from "react";
import "./App.css";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import bgImage from "./assets/background.jpg";

function App() {
  const [ammount, setAmmount] = useState("");
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
    setConvertedAmt(ammount * currencyInfo[from]);
  };

  const convert = () => {
    setConvertedAmt(ammount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
    backgroundPosition: "center",
      }}
    >
      <div className="w-full">
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
                onCurrencyChange={(currency) => selectCurrency(currency)}
                selectCurrency={from}
                onAmountChange={(ammount) => setAmmount(ammount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
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
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
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
