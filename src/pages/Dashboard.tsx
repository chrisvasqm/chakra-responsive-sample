import { Box, SimpleGrid } from '@chakra-ui/react';

function Dashboard() {
  return (
    <SimpleGrid columns={4} spacing={10} p={4} minChildWidth={'250px'}>
      <Box bg='white' h='200px' border='1px solid' />
      <Box bg='white' h='200px' border='1px solid' />
      <Box bg='white' h='200px' border='1px solid' />
      <Box bg='white' h='200px' border='1px solid' />

      <Box bg='white' h='200px' border='1px solid' />
      <Box bg='white' h='200px' border='1px solid' />
      <Box bg='white' h='200px' border='1px solid' />
      <Box bg='white' h='200px' border='1px solid' />

      <Box bg='white' h='200px' border='1px solid' />
      <Box bg='white' h='200px' border='1px solid' />
      <Box bg='white' h='200px' border='1px solid' />
      <Box bg='white' h='200px' border='1px solid' />
    </SimpleGrid>
  );
}

export default Dashboard;
