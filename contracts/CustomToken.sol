// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

contract CustomToken is ERC20, Ownable {
  uint constant _initial_supply = 100 * (10 ** 18);

  constructor() ERC20("CustomToken", "CC") {
    _mint(msg.sender, _initial_supply);
  }

  function mint(address account, uint256 amount) public onlyOwner {
    _mint(account, amount);
  }
}
