import React from 'react';
import {
    Box,
    Heading,
    Text,
    SimpleGrid,
    Image,
    Stack,
    Button,
    useBreakpointValue
} from '@chakra-ui/react';

const JuniorsFavorites = () => {
    // Sample data for favorites (Replace with real data)
    const favorites = [
        {
            id: 1,
            title: 'Kids Jacket',
            imageSrc: 'https://assets.tatacliq.com/medias/sys_master/images/51889193091102.jpg',
            price: '$45.99',
        },
        {
            id: 2,
            title: 'Cute Sneakers',
            imageSrc: 'https://assets.tatacliq.com/medias/sys_master/images/51889193222174.jpg',
            price: '$29.99',
        },
        {
            id: 3,
            title: 'Graphic Tee',
            imageSrc: 'https://assets.tatacliq.com/medias/sys_master/images/51889193287710.jpg',
            price: '$19.99',
        },
        {
            id: 4,
            title: 'Colorful Backpack',
            imageSrc: 'https://assets.tatacliq.com/medias/sys_master/images/51889193156638.jpg',
            price: '$39.99',
        },
    ];

    return (
        <Box
            py={10}
            px={6}
            bg="gray.50"
            borderRadius="lg"
            boxShadow="md"
            mb={10}
        >
            <Stack spacing={4} align="center" mb={6}>
                <Heading size="lg">Junior's Favorites</Heading>
                <Text color="gray.600">Top picks for the little ones</Text>
            </Stack>
            <SimpleGrid
                columns={{ base: 1, sm: 2, md: 2, lg: 4 }}
                spacing={8}
                maxW="1200px"
                mx="auto"
            >
                {favorites.map((item) => (
                    <Box
                        key={item.id}
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        boxShadow="lg"
                        transition="all 0.3s ease"
                        _hover={{ transform: 'scale(1.02)', boxShadow: '2xl' }}
                    >
                        <Image
                            src={item.imageSrc}
                            alt={item.title}
                            objectFit="cover"
                            width="100%"
                            height="300px"
                        />
                        <Box p={4}>
                            <Heading size="md" mb={2}>{item.title}</Heading>
                            <Text fontSize="xl" fontWeight="bold" color="teal.500">{item.price}</Text>
                            <Button
                                colorScheme="teal"
                                variant="solid"
                                mt={4}
                            >
                                View Details
                            </Button>
                        </Box>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default JuniorsFavorites;
