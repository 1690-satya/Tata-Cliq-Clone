import React, { useEffect, useState } from 'react';
import {Link as RouterLink} from 'react-router-dom'
import axios from "axios";
import {
    Box,
    SimpleGrid,
    Image,
    Text,
    Button,
    Stack,
    useColorModeValue,
    Spinner,
} from '@chakra-ui/react';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products?limit=20')
        .then((res)=>{
          setProducts(res.data);
          setLoading(false);
        })
        .catch(err =>{
          console.error('Error fetching Productsb :',err);
          setLoading(false);
        })
    }, []);

    if (loading) {
        return (
            <Box
                minH="100vh"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Spinner size="xl" />
            </Box>
        );
    }

    return (
        <Box p={5}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={5}>
                {products.map(product => (
                    <Box
                        key={product.id}
                        p={5}
                        shadow="md"
                        borderWidth="1px"
                        borderRadius="lg"
                        bg={useColorModeValue('white', 'gray.800')}
                    >
                        <Image
                            src={product.image}
                            alt={product.title}
                            boxSize="150px"
                            objectFit="contain"
                            mx="auto"
                        />
                        <Stack mt={4} spacing={3}>
                            <Text fontWeight="bold">{product.title}</Text>
                            <Text>{product.price} USD</Text>
                            <Button
                                colorScheme="teal"
                                as={RouterLink}
                                to={`/product/${product.id}`}
                            >
                                View Details
                            </Button>
                        </Stack>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default ProductsPage;
 

