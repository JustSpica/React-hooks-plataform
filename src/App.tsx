import { BrowserRouter } from 'react-router-dom';

import { Router } from 'routes';

import 'services/firebase';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
