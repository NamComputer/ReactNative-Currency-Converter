import React, { createContext, useState, useEffect } from 'react';
import { api } from './api'
import { Alert } from 'react-native';

export const ConversionContext = createContext();

const DEFAULT_BASE_CURRENCY = 'USD';
const DEFAULT_QUOTE_CURRENCY = 'GBP';

export const ConversionContextProvider = ({ children }) => {
  const [baseCurrency, _setbaseCurrency] = useState(DEFAULT_BASE_CURRENCY);
  const [quoteCurrency, setquoteCurrency] = useState(DEFAULT_QUOTE_CURRENCY);
  const [date, setDate] = useState();
  const [rates, setRates] = useState({});
  const [isLoading, setisLoading] = useState(true)

  const setbaseCurrency = (currency) => {
    
    return api(`/latest?base=${currency}`)
    
      .then((res) => {
        _setbaseCurrency(currency);
        setDate(res.date);
        setRates(res.rates);
        
      })
      .catch((error) => {
        Alert.alert('Sorry, something went wrong.', error.message);
      })

      .finally( () => {
        setisLoading(false)
      })
  };


  const swapCurrencies = () => {
    setbaseCurrency(quoteCurrency);
    setquoteCurrency(baseCurrency);
  };

  const contextValue = {
    baseCurrency,
    quoteCurrency,
    setbaseCurrency,
    setquoteCurrency,
    swapCurrencies,
    date,
    rates,
    isLoading
  };

  useEffect ( () => {
    setbaseCurrency(DEFAULT_BASE_CURRENCY)
  }, [])

  return (
    <ConversionContext.Provider value={contextValue}>
      {children}
    </ConversionContext.Provider>
  );
};