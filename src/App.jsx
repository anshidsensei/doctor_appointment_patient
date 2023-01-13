import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HOME_PAGE } from './config/routes';
import HomePage from './ui/pages/home_page';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path={HOME_PAGE} element={<HomePage />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
