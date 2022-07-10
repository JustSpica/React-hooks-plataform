import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import { AuthenticationProvider } from 'contexts/AuthenticationContext';

import { client } from 'lib/apollo';

import { Router } from 'routes';

import 'services/firebase';

function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <AuthenticationProvider>
          <Router />
        </AuthenticationProvider>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
