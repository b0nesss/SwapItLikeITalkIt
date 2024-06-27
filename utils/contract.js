import {ethers} from 'ethers'

import CustomDexABI from "./dexaabi.json"
import CustomTokenABI from "./tokenabi.json"



export const tokenContract = async (address) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const {ethereum} = window;

    if(ethereum){
        const signer = provider.getSigner();
        const contractReader = new ethers.Contract(address, CustomTokenABI, signer);
        return contractReader;
    }
   
}


export const contract = async () =>{
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const {ethereum} = window;
    console.log(`${CustomDexABI.abi} is ABI`)
    if(ethereum){
        const signer = provider.getSigner();
        const contractReader = new ethers.Contract("0x78c83fAF47d814E70F6bF3948738703C93BfEDEb", CustomDexABI, signer);
        return contractReader;
    }
}

//0x78c83fAF47d814E70F6bF3948738703C93BfEDEb - new address

//0x8C3dfF46acDc96987983bc723B7f2cAAF0653EF4 - old address