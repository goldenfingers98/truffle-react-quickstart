import React, { useEffect, useState } from "react";
import SimpleStorage from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";
import { useDispatch } from 'react-redux';
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HelloWorld from './components/HelloWorld';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    initWeb3()
  }, []);

  const initWeb3 = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorage.networks[networkId];
      // Loading the contrat with the convinient Ethereum Application Binary Interface (ABI)
      const instance = new web3.eth.Contract(
        SimpleStorage.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      dispatch({ type: 'setAddress', payload: accounts[0] });
      dispatch({ type: 'setWeb3', payload: web3 });
      dispatch({ type: 'setInstance', payload: instance });
      // setReady(true);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  }


  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<HelloWorld />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
