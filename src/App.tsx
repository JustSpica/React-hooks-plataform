import { BrowserRouter } from 'react-router-dom';

import { AuthenticationProvider } from 'contexts/AuthenticationContext';

import { Router } from 'routes';

import 'services/firebase';

function App() {
  return (
    <BrowserRouter>
      <AuthenticationProvider>
        <Router />
      </AuthenticationProvider>
    </BrowserRouter>
  );
}

export default App;
