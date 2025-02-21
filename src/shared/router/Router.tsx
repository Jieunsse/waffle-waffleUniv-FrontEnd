import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Test } from '@src/test/Test.tsx';
import { Home } from '@pages/home/Home.tsx';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
