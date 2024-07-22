import {
    Box,
    Flex,
    Button,
    HStack,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    useDisclosure,
    useColorModeValue,
    Icon,
    chakra,
    Input
} from '@chakra-ui/react';
import { FiShoppingCart, FiMenu } from 'react-icons/fi';
import { BsPerson } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="1.5rem"
            bg={useColorModeValue('white', 'gray.800')}
            color={useColorModeValue('gray.600', 'white')}
            borderBottomWidth={1}
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
        >
            <HStack spacing="24px">
                <Link to="/">
                    <Box as="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJubXDaT-Vhu8oKFvEKsEipo58f-nWO2nHg&usqp=CAU" alt="TataCliq Logo" height="50px" />
                </Link>
            </HStack>
            <Flex alignItems={'center'}>
            <Input
                placeholder="Search"
                width="300px"
                mr={4}
                display={{ base: 'none', md: 'flex' }}
            />
            <HStack spacing="24px">
                <Link to="/login">
                    <Button colorScheme="teal" variant="outline">
                        Login
                    </Button>
                </Link>
                <Link to="/signup">
                    <Button colorScheme="teal" variant="outline">
                        Signup
                    </Button>
                </Link>
                <Link to="/cart">
                    <IconButton
                        aria-label="Cart"
                        icon={<FiShoppingCart />}
                        variant="outline"
                        colorScheme="teal"
                    />
                </Link>
            </HStack>
            </Flex>
        </Flex>
    );
};

export default Navbar;
