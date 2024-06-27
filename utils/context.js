import { BigNumber, ethers } from "ethers";
import { contract, tokenContract } from "./contract";
import { toEth, toWei } from "./utils";

export async function swapEthToToken(tokenName, amount) {
    try {
        let tx = { value: toWei(amount) };

        const contractObj = await contract();
        const data = await contractObj.swapEthToToken(tokenName, tx);
        const receipt = await data.wait();
        console.log(receipt);
        return receipt;
    } catch (e) {
        console.log(e);
    }
}

export async function hasValidAllowance(owner, tokenName, amount) {
    try {
        const contractObj = await contract();
        const address = await contractObj.getTokenAddress(tokenName);
        const tokenContractObj = await tokenContract(address);
        const data = await tokenContractObj.allowance(owner, "0x78c83fAF47d814E70F6bF3948738703C93BfEDEb")
        console.log(data);
        const result = BigNumber.from(data.toString()).gte(BigNumber.from(toWei(amount)));
        console.log(result);
        return result;
    } catch (e) {
        console.log(e);
    }
}

export async function swapTokenToEth(tokenName, amount) {
    try {
        const contractObj = await contract();
        const data = await contractObj.swapTokenToEth(tokenName, toWei(amount));

        const receipt = await data.wait();
        console.log(receipt);
        return receipt;
    } catch (e) {
        console.log(e);
    }
}


export async function swapTokenToToken(srcToken, destToken, amount) {
    try {
        const contractObj = await contract();
        const data = await contractObj.swapTokenToToken(srcToken, destToken, toWei(amount));
        const receipt = await data.wait();
        console.log(receipt);
        return receipt;
    } catch (e) {
        console.log(e);
    }
}


export async function getTokenBalance(tokenName, address) {
    const contractObj = await contract();
    const balance = await contractObj.getBalance(tokenName, address);
    return balance;
}

export async function getTokenAddress(tokenName) {
    const contractObj = await contract();
    const address = await contractObj.getTokenAddress(tokenName);
    return address;
}

export async function increaseAllowance(tokenName, amount) {
    const contractObj = await contract();
    const address = await contractObj.getTokenAddress(tokenName);
    const tokenContractObj = await tokenContract(address);
    const data = await tokenContractObj.approve("0x78c83fAF47d814E70F6bF3948738703C93BfEDEb", toWei(amount));
    const receipt = await data.wait();
    console.log(receipt);
    return receipt;
}

export async function getAllHistory() {
    try {
        const contractObj = await contract();
        const getAllHistory = await contractObj.getAllHistory();

        const historyTransaction = getAllHistory.map((history, i) => ({
            historyId: history.historyId.toNumber(),
            tokenA: history.tokenA,
            tokenB: history.tokenB,
            inputValue: toEth(history?.inputValue),
            outputValue: toEth(history?.outputValue),
            userAddress: history.userAddress,

        }))
        return historyTransaction;
    } catch (e) {
        console.log(e);
    }

}


