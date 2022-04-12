import { ethers } from "ethers";

function getEth() {
  //@ts-ignore
  const eth = window.ethereum;
  if (!eth) {
    throw new Error("get Metamask");
  }
  return eth;
}

async function hasAccounts() {
  const eth = getEth();

  const accounts = (await eth.request({ method: "eth_accounts" })) as string[];

  return accounts && accounts.length;
}

async function requestAccounts() {
  const eth = getEth();

  const accounts = (await eth.request({
    method: "eth_requestAccounts",
  })) as string[];

  return accounts && accounts.length;
}

async function run() {
  if (!(await hasAccounts()) && !(await requestAccounts())) {
    throw new Error("Please let me take your money");
  }
  const hello = new ethers.Contract(
    process.env.CONTRACT_ADDRESS,
    ["function hello() public pure returns (string memory)"],
    new ethers.providers.Web3Provider(getEth())
  );
  document.body.innerHTML = await hello.hello();
}

run();
