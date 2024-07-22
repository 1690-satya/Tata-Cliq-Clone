import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Button,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import {
  FiShoppingCart,
  FiHeart,
  FiSearch,
  FiChevronDown,
  FiSmartphone,
  FiWatch,
} from "react-icons/fi";
import { FaShoePrints } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [placeholder, setPlaceholder] = useState("Search for Categories");
  const [isCategories, setIsCategories] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholder(
        isCategories ? "Search for Brands" : "Search for Categories"
      );
      setIsCategories(!isCategories);
    }, 2500);

    return () => clearInterval(interval);
  }, [isCategories]);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="black"
      color="white"
      borderBottomWidth={1}
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      position="sticky"
      top="0"
      zIndex="10"
      fontSize="sm"
    >
      <HStack spacing="16px" align="center">
        <Link to="/">
          <Box
            as="img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJubXDaT-Vhu8oKFvEKsEipo58f-nWO2nHg&usqp=CAU"
            alt="TataCliq Logo"
            height="40px"
            borderRadius="full"
            mr={2}
          />
        </Link>
        <Link to="/">
          <Box fontSize="lg" fontWeight="bold" cursor="pointer">
            TATA CLIQ
          </Box>
        </Link>
      </HStack>
      <Flex alignItems={"center"}>
        <HStack spacing="20px" mr={4} fontSize="sm">
          <Text cursor="pointer">Tata CLIQ Luxury</Text>
          <Menu>
            <MenuButton
              as={Button}
              variant="link"
              color="white"
              fontWeight="normal"
              _hover={{ textDecoration: "none" }}
            >
              Brand
            </MenuButton>
            <MenuList bg="white" color="black">
              <MenuItem
                bg="white"
                _hover={{ bg: "gray.100" }}
                icon={<FaShoePrints />}
              >
                Puma
              </MenuItem>
              <MenuItem
                bg="white"
                _hover={{ bg: "gray.100" }}
                icon={<FaShoePrints />}
              >
                Nike
              </MenuItem>
              <MenuItem
                bg="white"
                _hover={{ bg: "gray.100" }}
                icon={<FiSmartphone />}
              >
                Apple
              </MenuItem>
              <MenuItem
                bg="white"
                _hover={{ bg: "gray.100" }}
                icon={<FiSmartphone />}
              >
                Samsung
              </MenuItem>
              <MenuItem
                bg="white"
                _hover={{ bg: "gray.100" }}
                icon={<FiWatch />}
              >
                Tommy Hilfiger
              </MenuItem>
              <MenuItem
                bg="white"
                _hover={{ bg: "gray.100" }}
                icon={<FiWatch />}
              >
                Mischief
              </MenuItem>
              <MenuItem
                bg="white"
                _hover={{ bg: "gray.100" }}
                icon={<FiWatch />}
              >
                Gucci
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<FiChevronDown />}
              variant="link"
              color="white"
              fontWeight="normal"
              _hover={{ textDecoration: "none" }}
            >
              Categories
            </MenuButton>
            <MenuList bg="white" color="black">
              <MenuItem bg="white" _hover={{ bg: "gray.100" }}>
                Women Fashion
              </MenuItem>
              <MenuItem bg="white" _hover={{ bg: "gray.100" }}>
                Men Fashion
              </MenuItem>
              <MenuItem bg="white" _hover={{ bg: "gray.100" }}>
                Beauty Kit
              </MenuItem>
              <MenuItem bg="white" _hover={{ bg: "gray.100" }}>
                Jewellery
              </MenuItem>
              <MenuItem bg="white" _hover={{ bg: "gray.100" }}>
                Kid Fashion
              </MenuItem>
              <MenuItem bg="white" _hover={{ bg: "gray.100" }}>
                Sneakers
              </MenuItem>
            </MenuList>
          </Menu>
          <Text cursor="pointer">Track Orders</Text>
        </HStack>
        <InputGroup
          width="250px"
          display={{ base: "none", md: "flex" }}
          transition="all 0.5s ease-in-out"
        >
          <Input
            placeholder={placeholder}
            bg="gray.800"
            color="white"
            _placeholder={{ color: "gray.500" }}
            transition="all 0.5s ease-in-out"
          />
          <InputRightElement children={<FiSearch color="gray.500" />} />
        </InputGroup>
        <HStack spacing="16px" ml={4}>
          <IconButton
            aria-label="Wishlist"
            icon={<FiHeart />}
            variant="outline"
            colorScheme="whiteAlpha"
            _hover={{ bg: "gray.700" }}
          />
          <Link to="/cart">
            <IconButton
              aria-label="Cart"
              icon={<FiShoppingCart />}
              variant="outline"
              colorScheme="whiteAlpha"
              _hover={{ bg: "gray.700" }}
            />
          </Link>
          <Menu>
            <MenuButton
              as={Button}
              variant="link"
              color="white"
              fontWeight="normal"
              _hover={{ textDecoration: "none" }}
            >
              Sign in / Sign Up
            </MenuButton>
            <MenuList bg="white" color="black">
              <Link to="/login">
                <MenuItem
                  bg="white"
                  _hover={{ bg: "red.500", color: "white" }}
                  borderRadius="md"
                >
                  Login
                </MenuItem>
              </Link>
              <Link to="/signup">
                <MenuItem
                  bg="white"
                  _hover={{ bg: "red.500", color: "white" }}
                  borderRadius="md"
                >
                  Signup
                </MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Navbar;
