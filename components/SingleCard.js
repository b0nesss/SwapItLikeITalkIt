import React, { useEffect, useRef, useState } from "react";
import {
  getTokenAddress,
  getTokenBalance,
  increaseAllowance,
} from "../utils/context";

import { ethers } from "ethers";
import TransactionStatus from "./TransactionStatus";
import toast, {Toaster} from "react-hot-toast";

import { ClipboardIcon, ClipboardCheckIcon, PlusIcon } from "@heroicons/react/outline";
import { fetchToken } from "wagmi/actions";

const SingleCard = ({ index, name, walletAddress }) => {
  const [balance, setBalance] = useState("-");
  const [tokenAddress, setTokenAddress] = useState();
  const [copyIcon , setCopyIcon] = useState({ icon: ClipboardIcon});

  const [txPending, setTxPending] = useState(false);

  const notifyError = (msg) => toast.error(msg, { duration: 6000 });
  const notifySuccess = () => toast.success("Transaction completed.");

  useEffect(() => {
    if(name && walletAddress){
      fetchTokenBalance();
      fetchTokenAddress();
    } else setBalance("-");
  }, [name, walletAddress]);
  
  async function fetchTokenBalance(){
    const balance = await getTokenBalance(name, walletAddress);
    const fbal = ethers.utils.formatUnits(balance.toString(), 18);
    setBalance(fbal.toString());
  }

  async function fetchTokenAddress(){
    const address = await getTokenAddress(name);
    setTokenAddress(address);
  }
}
export default SingleCard;
