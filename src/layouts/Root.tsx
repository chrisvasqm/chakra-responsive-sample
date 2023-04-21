import { Outlet } from 'react-router-dom';
import { Grid, GridItem } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

function Root() {
  return (
    <Grid templateColumns='repeat(12, 1fr)' bg='gray.50'>
      <GridItem
        as='aside'
        colSpan={{ base: 12, lg: 4, xl: 2 }}
        bg={'purple.400'}
        minHeight={{ base: '100px', lg: '100vh' }}
        p='30px'
      >
        <span>sidebar</span>
      </GridItem>
      <GridItem as='main' colSpan={{ base: 12, lg: 8, xl: 10 }} p='40px'>
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}

export default Root;
