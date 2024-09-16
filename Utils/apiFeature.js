// const { ethers } = require("hardhat");
import { ethers, providers } from 'ethers';

import Web3Modal from 'web3modal';

import { ChatAppAddress, ChatAppABI } from '../Context/constants'

export const CheckIfWalletConnected = async () => {
    try {
        if (!window.ethereum) return console.log("Install MetaMask");
        const accounts = await window.ethereum.request({
            method: "eth_accounts",
        });
        const firstAccount = accounts[0];
        return firstAccount;
    } catch (error) {
        console.log("Install MetaMask");
    }
};
export const connectWallet = async () => {
    try {
        if (!window.ethereum) return console.log("Install MetaMask");
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        const firstAccount = accounts[0];
        console.log("Connected")
        return firstAccount;
    } catch (error) {
        console.log("Install MetaMask");
    }
};

const fetchContract = (signerOrProvider) =>
    new ethers.Contract(ChatAppAddress, ChatAppABI, signerOrProvider);

export const connectingWithContract = async () => {
    try {

        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.BrowserProvider(connection)
        const signer = await provider.getSigner();
        // console.log(signer)
        const contract = fetchContract(signer);

        return contract;
    } catch (error) {
        console.log("Install MetaMask");
    }
};

export const convertTime = (time) => {
    const timestamp = Number(time);
    const date = new Date(timestamp * 1000);
    const realTime = date.toLocaleString();
    // const newTime = new Date(time.toNumber());


    // const realTime = newTime.getHours() +
    //     "/" + newTime.getMinutes() +
    //     "/" + newTime.getSeconds() +
    //     " Date:" + newTime.getDate() +
    //     "/" + newTime.getMonth() +
    //     (newTime.getMonth() + 1) +
    //     "/" +
    //     newTime.getFullYear();

    return realTime;
}