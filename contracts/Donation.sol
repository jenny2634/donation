pragma solidity ^0.4.24;
//pragma experimental ABIEncoderV2;

contract Donation {
   function getContractBalance() public view returns (uint){
       return address(this).balance;
   }
   function donate(uint money) public payable returns (bool){
       return true;
   }
}