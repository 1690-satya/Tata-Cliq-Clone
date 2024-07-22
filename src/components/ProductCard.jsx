import { Box, Image, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="4" bg="white">
      <Image src={product.image} alt={product.title} boxSize="200px" objectFit="contain" mx="auto" />
      <Box p="6">
        <Text as="h2" fontWeight="bold" fontSize="xl" mb="2">{product.title}</Text>
        <Text fontSize="lg" color="teal.600" mb="4">${product.price}</Text>
        <Button colorScheme="teal" onClick={() => addToCart(product)} mb="2">Add to Cart</Button>
        <Link to={`/products/${product.id}`}>
          <Button colorScheme="teal" variant="outline">View Details</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default ProductCard;

