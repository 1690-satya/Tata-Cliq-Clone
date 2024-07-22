// import React, { useEffect, useState } from 'react';
// import {
//     Box,
//     Image,
//     Text,
//     Button,
//     Stack,
//     useColorModeValue,
//     Spinner,
// } from '@chakra-ui/react';
// import { useParams } from 'react-router-dom';

// const ProductDetailsPage = () => {
//     const { productId } = useParams();
//     const [product, setProduct] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetch(`https://fakestoreapi.com/products/${productId}`)
//             .then(res => res.json())
//             .then(data => {
//                 setProduct(data);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 console.error('Error fetching product details:', error);
//                 setLoading(false);
//             });
//     }, [productId]);

//     if (loading) {
//         return (
//             <Box
//                 minH="100vh"
//                 display="flex"
//                 alignItems="center"
//                 justifyContent="center"
//             >
//                 <Spinner size="xl" />
//             </Box>
//         );
//     }

//     if (!product) {
//         return (
//             <Box
//                 minH="100vh"
//                 display="flex"
//                 alignItems="center"
//                 justifyContent="center"
//             >
//                 <Text>Product not found</Text>
//             </Box>
//         );
//     }

//     return (
//         <Box p={5}>
//             <Stack spacing={8} direction={{ base: 'column', md: 'row' }}>
//                 <Image
//                     src={product.image}
//                     alt={product.title}
//                     boxSize="300px"
//                     objectFit="contain"
//                     mx="auto"
//                 />
//                 <Stack spacing={4}>
//                     <Text fontSize="2xl" fontWeight="bold">
//                         {product.title}
//                     </Text>
//                     <Text fontSize="lg">{product.description}</Text>
//                     <Text fontSize="xl" fontWeight="bold">
//                         ${product.price}
//                     </Text>
//                     <Text fontSize="md">Rating: {product.rating.rate} / 5</Text>
//                     <Button colorScheme="teal">Buy Now</Button>
//                     <Button colorScheme="teal" variant="outline">
//                         Add to Cart
//                     </Button>
//                 </Stack>
//             </Stack>
//         </Box>
//     );
// };

// export default ProductDetailsPage;


// src/pages/ProductDetailsPage.js

'use client'

import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from '@chakra-ui/react'
import { MdLocalShipping } from 'react-icons/md'
import { useParams } from 'react-router-dom'; // Import useParams for fetching product ID
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [productId]);

  if (!product) return <p>Loading...</p>;

  return (
    <Container maxW={'5xl'} py={{ base: 18, md: 24 }}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}>
        <Flex>
          <Image
            rounded={'md'}
            alt={product.title}
            src={product.image}
            fit={'cover'}
            align={'center'}
            w={'80%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {product.title}
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              ${product.price.toFixed(2)}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                {product.description}
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                {/* Mock features, replace or adjust based on actual product data */}
                <List spacing={2}>
                  <ListItem>Feature 1</ListItem>
                  <ListItem>Feature 2</ListItem>
                  <ListItem>Feature 3</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Feature 4</ListItem>
                  <ListItem>Feature 5</ListItem>
                  <ListItem>Feature 6</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Category:
                  </Text>{' '}
                  {product.category}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Rating:
                  </Text>{' '}
                  {product.rating.rate} ({product.rating.count} reviews)
                </ListItem>
                {/* Add other product details as needed */}
              </List>
            </Box>
          </Stack>

          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            Buy Now
          </Button>
          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            Add to cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  )
}
