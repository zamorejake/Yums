import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Header from './pages/Header';
import Footer2 from './pages/Footer';
import { CartProvider } from './pages/CartContext';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
        <CartProvider>
        <Header />
        <Outlet />
        <Footer2 />
        </CartProvider>
    </ApolloProvider>
  );
}

export default App;
