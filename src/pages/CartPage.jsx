import React from 'react';
import {
  Box,
  Image,
  Text,
  VStack,
  Heading,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { useCart } from '../CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <Box p={5}>
      <Heading mb={5}>Shopping Cart</Heading>
      {cartItems.length === 0 ? (
        <Text>Your cart is empty</Text>
      ) : (
        <VStack spacing={4}>
          {cartItems.map((item, index) => (
            <Box
              key={index}
              p={5}
              w="100%"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              bg={useColorModeValue('white', 'gray.800')}
              shadow="lg">
              <Stack direction="row" align="center" spacing={4}>
                <Image boxSize="100px" src={item.image} alt={item.title} />
                <Box flex="1">
                  <Heading fontSize="xl">{item.title}</Heading>
                  <Text fontSize="md">${item.price}</Text>
                </Box>
                <Button colorScheme="red" onClick={() => removeFromCart(item.id)}>
                  Remove
                </Button>
              </Stack>
            </Box>
          ))}
        </VStack>
      )}
    </Box>
  );
};

export default CartPage;
