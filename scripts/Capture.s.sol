pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "../src/CaptureTheFlag.sol";

contract MyScript is Script {
    function run() external {
        vm.startBroadcast();

        CaptureTheFlag t = new CaptureTheFlag();

        vm.stopBroadcast();
    }
}
