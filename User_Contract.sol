pragma solidity ^0.4.17;


import "./interfaces/TokenToTokenSwap_Interface.sol";
import "./interfaces/Factory.sol";
import "./WrappedEther.sol";
import "./libraries/SafeMath.sol";



contract UserContract{
  TokenToTokenSwap_Interface swap;
  Wrapped_Ether token;
  Factory_Interface factory;

  address public factory_address;

  function Initiate(uint _amounta, uint _amountb, bool _isLong, address basetoken) payable public {
    factory = Factory_Interface(factory_address);
    address swap_contract = factory.deployContract();
    swap = TokenToTokenSwap_Interface(swap_contract);
    swap.CreateSwap(_amounta, _amountb, _isLong);
    token = Wrapped_Ether(basetoken);
    token.CreateToken.value(msg.value)();
    token.transfer(swap_contract,msg.value);
  }

  function Enter(uint _amounta, uint _amountb, bool _isLong, address _swapadd, address basetoken) payable public {
    swap = TokenToTokenSwap_Interface(_swapadd);
    swap.EnterSwap(_amounta, _amountb, _isLong);
    token = Wrapped_Ether(basetoken);
    token.CreateToken.value(msg.value)();
    token.transfer(_swapadd,msg.value);
    swap.createTokens();
  }

  function setFactory(address _factory_address) public {
    factory_address = _factory_address;
  }
}