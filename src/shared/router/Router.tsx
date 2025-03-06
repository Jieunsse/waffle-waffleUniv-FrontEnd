import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Test } from '@src/test/Test.tsx';
import { Home } from '@pages/home/Home.tsx';
import { BoardPage } from '@pages/board/BoardPage.tsx';
import { Post } from '@pages/post/Post.tsx';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/board" element={<BoardPage />} />
        <Route path="/post" element={<Post />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
