pragma solidity ^0.4.24;

import "@gnosis.pm/util-contracts/contracts/StandardToken.sol";

contract TokenGNO is StandardToken {
    string public constant symbol = "GNO";
    string public constant name = "Gnosis";
    uint8 public constant decimals = 18;

    function TokenGNO(
    	uint amount
    )
    	public 
    {
        totalTokens = amount;
    	balances[msg.sender] = amount;
    }
}
