import React from "react";
import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  amountDisable = false,
  selectCurrency = "usd",
  currencyOption = [],
  currencyDisable = false,
  onCurrencyChange,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-gray-200 p-7 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/100 font-semibold text-lg mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent border border-gray-400 rounded-lg py-1.5 pl-2"
          type="number"
          placeholder="Amount"
          value={amount}
          disabled={amountDisable}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>

  
        
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          disabled={currencyDisable}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} // ✅ use string, not Number()
        >
          {currencyOption.map((currency) => {
           
            return <option value={currency} key={currency}> 
           
              {currency}
            </option>
          })}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
