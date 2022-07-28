import React, { createContext, useContext, useEffect, useState } from 'react';

const Crypto = createContext()
const CryptoContex = ({children}) => {

    const [ currency, setCurrency ] = useState('USD');
    const [ symbol, setSymbol ] = useState('$');

    useEffect(()=>{
        if(currency === 'USD'){
            setSymbol('$');
        }else{
            setSymbol('€');
        }
    },[currency])

    return (
        <Crypto.Provider value={{ currency, symbol, setCurrency }}>
            { children }
        </Crypto.Provider>
    );
};

export default CryptoContex;

export const CryptoState = ()=>{
   return  useContext(Crypto)
}