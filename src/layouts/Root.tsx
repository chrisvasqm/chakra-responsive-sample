import { Outlet } from 'react-router-dom';
import { Grid, GridItem } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

function Root() {
  return (
    <Grid templateColumns='repeat(12, 1fr)' bg='gray.50'>
      <GridItem
        as='aside'
        colSpan={2}
        bg={'purple.400'}
        minHeight='100vh'
        w={[100, 200]}
        p='30px'
      >
        <span>sidebar</span>
      </GridItem>
      <GridItem as='main' colSpan={10} p='40px'>
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}

export default Root;
