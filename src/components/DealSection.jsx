import { Box, Grid, Text, Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const DealSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products?limit=4')
      .then(response => setProducts(response.data));
  }, []);

  const dealPercentages = [30, 50, 70, 90];

  return (
    <Box p="4">
      <Text fontSize="2xl" mb="4">Hot Deals</Text>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {products.map((product, index) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" position="relative">
            <Image src={product.image} alt={product.title} objectFit="contain" height="200px" width="full" />
            <Box p="4">
              <Text fontWeight="bold" fontSize="xl">{product.title}</Text>
              <Text color="red.500" fontWeight="bold">{dealPercentages[index % dealPercentages.length]}% OFF</Text>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default DealSection;
