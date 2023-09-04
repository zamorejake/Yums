import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Header from './pages/Header';
import Footer2 from './pages/Footer';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className='flex flex-col h-screen justify-between'>
    <ApolloProvider client={client}>
        <Header />
        <Outlet />
        <Footer2 />
    </ApolloProvider>
    </div>
  );
}

export default App;
