import { Box, Button, Flex, HStack, Heading, Spacer, Text } from '@chakra-ui/react';

function Navbar() {
  return (
    <Flex as='nav' p={'10px'} alignItems={'center'}>
      <Heading as='h1'>Dojo Tasks</Heading>

      <Spacer />

      <HStack spacing={4}>
        <Box bg={'gray.200'} p={'10px'}>
          M
        </Box>
        <Text>mario@ninja.com</Text>
        <Button colorScheme='purple'>Logout</Button>
      </HStack>
    </Flex>
  );
}

export default Navbar;
