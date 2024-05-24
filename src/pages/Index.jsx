import { Box, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Index = () => {
  const [financialData, setFinancialData] = useState([]);

  useEffect(() => {
    // Mock financial data
    const data = [
      { name: "S&P 500", value: "4,500.50", change: "+0.5%" },
      { name: "Dow Jones", value: "35,000.75", change: "-0.3%" },
      { name: "NASDAQ", value: "14,000.20", change: "+1.2%" },
    ];
    setFinancialData(data);
  }, []);

  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.800" color="white" p={4} mb={6} justifyContent="space-between">
        <Heading size="lg">Financial Times</Heading>
        <HStack spacing={8}>
          <Link href="#">Home</Link>
          <Link href="#">Markets</Link>
          <Link href="#">Companies</Link>
          <Link href="#">Tech</Link>
          <Link href="#">Opinion</Link>
        </HStack>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Box as="main" colSpan={{ base: 1, md: 2 }}>
          <Heading size="md" mb={4}>Latest News</Heading>
          <VStack spacing={4} align="stretch">
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/800x400" alt="News 1" />
              <Box p={4}>
                <Heading size="sm">News Headline 1</Heading>
                <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/800x400" alt="News 2" />
              <Box p={4}>
                <Heading size="sm">News Headline 2</Heading>
                <Text mt={2}>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/800x400" alt="News 3" />
              <Box p={4}>
                <Heading size="sm">News Headline 3</Heading>
                <Text mt={2}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
              </Box>
            </Box>
          </VStack>
        </Box>

        <Box as="aside" colSpan={1}>
          <Heading size="md" mb={4}>Market Data</Heading>
          <VStack spacing={4} align="stretch">
            {financialData.map((item, index) => (
              <Box key={index} borderWidth="1px" borderRadius="lg" p={4}>
                <Heading size="sm">{item.name}</Heading>
                <Text>Value: {item.value}</Text>
                <Text>Change: {item.change}</Text>
              </Box>
            ))}
          </VStack>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Index;