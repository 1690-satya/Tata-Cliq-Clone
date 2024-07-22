import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    Box,
    Heading,
    Text,
    SimpleGrid,
    Image,
    Stack,
    Button
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

const BlockbusterDeals = () => {
    // Sample data for deals (You can replace this with real data)
    const deals = [
        {
            id: 1,
            title: 'Summer Sale',
            imageSrc: 'https://assets.tatacliq.com/medias/sys_master/images/51869117415454.jpg',
            description: 'Up to 50% off on summer collections!',
        },
        {
            id: 2,
            title: 'Winter Collection',
            imageSrc: 'https://assets.tatacliq.com/medias/sys_master/images/51869117087774.jpg',
            description: 'Exclusive winter wear at amazing prices!',
        },
        {
            id: 3,
            title: 'Electronics Extravaganza',
            imageSrc: 'https://assets.tatacliq.com/medias/sys_master/images/51889194336286.jpg',
            description: 'Huge discounts on top electronics brands!',
        },
        {
            id: 4,
            title: 'Shoe Collection',
            imageSrc: 'https://assets.tatacliq.com/medias/sys_master/images/51869116956702.jpg',
            description: 'Huge discounts on top shoe brands!',
        },
        {
            id: 5,
            title: 'Women Wear',
            imageSrc: 'https://assets.tatacliq.com/medias/sys_master/images/51869117480990.jpg',
            description: 'Huge discounts on top women wear brands!',
        },
        {
            id: 6,
            title: 'Bags and Accesories',
            imageSrc: 'https://assets.tatacliq.com/medias/sys_master/images/51869120135198.jpg',
            description: 'Huge discounts on top women accesories brands!',
        },
    ];

    return (
        <Box
            py={10}
            px={6}
            bg="white"
            borderRadius="lg"  // Border radius for card
            boxShadow="md"
            mb={10}
        >
            <Stack spacing={4} align="center" mb={6}>
                <Heading size="lg">Blockbuster Deals</Heading>
                <Text color="gray.600">Don't miss out on our limited-time offers</Text>
            </Stack>
            <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                spacing={8}
                maxW="1200px"
                mx="auto"
            >
                {deals.map((deal) => (
                    <Box
                        key={deal.id}
                        borderWidth="1px"
                        borderRadius="lg"  // Consistent border radius for cards
                        overflow="hidden"
                        position="relative"
                        boxShadow="lg"
                        transition="all 0.3s ease"
                        _hover={{ transform: 'scale(1.02)', boxShadow: '2xl' }}
                    >
                        <Image
                            src={deal.imageSrc}
                            alt={deal.title}
                            objectFit="cover"
                            width="100%"
                            height="200px"
                        />
                        <Box p={4}>
                            <Heading size="md" mb={2}>{deal.title}</Heading>
                            <Text mb={4} color="gray.600">{deal.description}</Text>
                            <Button
                                as={RouterLink} to="/products"
                                colorScheme="teal"
                                variant="solid"
                                rightIcon={<ChevronRightIcon />}
                            >
                                Shop Now
                            </Button>
                        </Box>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default BlockbusterDeals;

