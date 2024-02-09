// App.tsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './containers/LoginPage';
import CustomVideo from "./CustomVideo";
import Main from './Main'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage></LoginPage>} />
        <Route path="/home" element={<Main></Main>} />
        <Route path="/home/:id" element={<CustomVideo></CustomVideo>} />
        {/* Add other routes for different pages if needed */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;