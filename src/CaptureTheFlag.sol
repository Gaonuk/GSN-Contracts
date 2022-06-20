// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import "@opengsn/BaseRelayRecipient.sol";

contract CaptureTheFlag is BaseRelayRecipient {

    event FlagCaptured(address previousHolder, address currentHolder);

    constructor(address forwarder) {
        _setTrustedForwarder(forwarder);
    }

    string public override versionRecipient = "2.2.0";

    address public currentHolder = address(0);

    function captureTheFlag() external {
        address previousHolder = currentHolder;

        currentHolder = msg.sender;

        emit FlagCaptured(previousHolder, currentHolder);
    }
}