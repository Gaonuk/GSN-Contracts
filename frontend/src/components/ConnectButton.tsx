import { Button, Box, Text } from "@chakra-ui/react";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import Identicon from "./Identicon";
import { darkTheme, SwapWidget } from "@uniswap/widgets"

type Props = {
    handleOpenModal: any;
}

const jsonRPC = 'https://eth-mainnet.alchemyapi.io/v2/CTnXza7hp_y2CoC_v5kGb2yO7akMKmYM'

export default function ConnectButton({ handleOpenModal }: Props) {

    const { activateBrowserWallet, account, deactivate, library } = useEthers();
    const etherBalance = useEtherBalance(account);

    function handleConnectWallet() {
        activateBrowserWallet();
    }

    console.log(etherBalance)

    return account ? (
        <Box>
            <Box
                display="flex"
                alignItems="center"
                background="gray.700"
                borderRadius="xl"
                py="0"
            >
                <Box px="3">
                    <Text color="white" fontSize="md">
                        {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)} ETH
                    </Text>
                </Box>
                <Button
                    onClick={handleOpenModal}
                    bg="gray.800"
                    border="1px solid transparent"
                    _hover={{
                        border: "1px",
                        borderStyle: "solid",
                        borderColor: "blue.400",
                        backgroundColor: "gray.700",
                    }}
                    borderRadius="xl"
                    m="1px"
                    px={3}
                    height="38px"
                >
                    <Text color="white" fontSize="md" fontWeight="medium" mr="2">
                        {account &&
                            `${account.slice(0, 6)}...${account.slice(
                                account.length - 4,
                                account.length
                            )}`}
                    </Text>

                    <Identicon />
                </Button>
            </Box>
            <SwapWidget provider={library} theme={darkTheme} jsonRpcEndpoint={jsonRPC}></SwapWidget>
        </Box>
    ) : (
        <Button onClick={handleConnectWallet}>Connect to a wallet</Button>
    );
}