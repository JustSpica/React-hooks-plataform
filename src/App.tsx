import { BrowserRouter } from 'react-router-dom';

import { AuthenticationProvider } from 'contexts/AuthenticationContext';

import { Router } from 'routes';

import 'services/firebase';

function App() {
  return (
    <AuthenticationProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthenticationProvider>
  );
}

export default App;
