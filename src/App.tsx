import './App.css';
import Root from './layouts/Root';

import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import { Container, Heading } from '@chakra-ui/react';

function App() {
  return (
    <>
      <Routes>
        <Route
          path='*'
          element={
            <Container>
              <Heading textAlign='center'>Page not found</Heading>
            </Container>
          }
        />
        <Route path='/' element={<Root />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='profile' element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}
12;
export default App;
