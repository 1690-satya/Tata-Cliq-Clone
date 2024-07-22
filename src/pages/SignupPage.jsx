import React from 'react';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useBreakpointValue,
    useColorModeValue,
} from '@chakra-ui/react';

const SignupPage = () => {
    return (
        <Box
            minH="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg={useColorModeValue('gray.50', 'gray.800')}
            py={12}
            px={6}
        >
            <Stack
                spacing={8}
                mx="auto"
                maxW="lg"
                py={12}
                px={6}
                boxShadow="lg"
                bg={useColorModeValue('white', 'gray.700')}
                borderRadius="lg"
            >
                <Stack align="center">
                    <Heading fontSize="4xl">Create a new account</Heading>
                </Stack>
                <Box
                    rounded="lg"
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow="lg"
                    p={8}
                >
                    <Stack spacing={4}>
                        <FormControl id="name">
                            <FormLabel>Name</FormLabel>
                            <Input type="text" />
                        </FormControl>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" />
                        </FormControl>
                        <FormControl id="confirm-password">
                            <FormLabel>Confirm Password</FormLabel>
                            <Input type="password" />
                        </FormControl>
                        <Stack spacing={10}>
                            <Button
                                bg="teal.400"
                                color="white"
                                _hover={{
                                    bg: 'teal.500',
                                }}
                            >
                                Sign Up
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
};

export default SignupPage;
