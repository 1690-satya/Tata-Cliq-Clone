import React from 'react';
import {
    Box,
    Heading,
    Text,
    SimpleGrid,
    Image,
    Stack,
    useBreakpointValue
} from '@chakra-ui/react';

const TickTalk = () => {
    // Sample data for Tick-Talk (Replace with real data)
    const promotions = [
        {
            id: 1,
            imageSrc: 'https://assets.tatacliq.com/medias/sys_master/images/51889194663966.jpg',
            text: 'Exclusive Deals on Electronics!',
        },
        {
            id: 2,
            imageSrc: 'https://assets.tatacliq.com/medias/sys_master/images/51889194729502.jpg',
            text: 'Fashion Sale Up to 70% Off!',
        },
        {
            id: 3,
            imageSrc: 'https://assets.tatacliq.com/medias/sys_master/images/51889194860574.jpg',
            text: 'Home Essentials at Best Prices!',
        },
        {
            id: 4,
            imageSrc: 'https://assets.tatacliq.com/medias/sys_master/images/51889194795038.jpg',
            text: 'Limited Time Offers Just for You!',
        },
    ];

    return (
        <Box
            py={10}
            px={6}
            bg="white"
            borderRadius="lg"
            boxShadow="md"
            mb={10}
        >
            <Stack spacing={4} align="center" mb={6}>
                <Heading size="lg">Tick-Talk</Heading>
                <Text color="gray.600">Don’t miss our latest promotions</Text>
            </Stack>
            <SimpleGrid
                columns={{ base: 1, sm: 2, md: 2, lg: 4 }}
                spacing={8}
                maxW="1200px"
                mx="auto"
            >
                {promotions.map((promo) => (
                    <Box
                        key={promo.id}
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        boxShadow="lg"
                        position="relative"
                        transition="all 0.3s ease"
                        _hover={{ transform: 'scale(1.02)', boxShadow: '2xl' }}
                    >
                        <Image
                            src={promo.imageSrc}
                            alt={`Promotion ${promo.id}`}
                            objectFit="cover"
                            width="100%"
                            height="300px"
                        />
                        <Box
                            position="absolute"
                            bottom={0}
                            left={0}
                            right={0}
                            bg="rgba(0, 0, 0, 0.5)"
                            color="white"
                            p={4}
                            textAlign="center"
                        >
                            <Text fontSize="lg" fontWeight="bold">{promo.text}</Text>
                        </Box>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default TickTalk;
