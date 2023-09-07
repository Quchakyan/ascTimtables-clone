import { createContext, useContext, useEffect, useReducer, useState } from 'react';

const OrderContext = createContext();

export function useOrder() {
  return useContext(OrderContext);
}

export function OrderProvider({ children }) {
  const [price, setPrice] = useState(0);
  const [macLicense, setMacLicense] = useState(false);
  const [yearlyMaintenance, setYearlyMaintenance] = useState(false);
  const [texts, setTexts] = useState(false);
  const [type, setType] = useState("");
  const [total, setTotal] = useState(price);
  const changePrice = (price) => {
    setPrice(price);
  };
  const changeType = (type) => {
    setType(type);
  };
  const changeYearlyMaintenance = (prev) => {
    setYearlyMaintenance(prev);
  };
  const changeMacLicense = (price) => {
    setMacLicense(price);
  };
  const changeTexts = (price) => {
    setTexts(price)
  }
  useEffect(() => {
    let newTotal = 0;
    if (price) newTotal +=price;
    if (macLicense) newTotal += 10;
    if (yearlyMaintenance) newTotal += 79;
    if (texts) newTotal += 49;
    setTotal(newTotal);
  }, [macLicense, price, yearlyMaintenance, texts, total])
  return (
    <OrderContext.Provider value={{ price, type, yearlyMaintenance, macLicense, texts, total,  changePrice, changeType, changeYearlyMaintenance, changeMacLicense,changeTexts }}>
      {children}
    </OrderContext.Provider>
  );
}
