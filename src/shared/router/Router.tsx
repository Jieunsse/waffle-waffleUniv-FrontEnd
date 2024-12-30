import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from '../../App/page/mainPage/MainPage.tsx';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};
