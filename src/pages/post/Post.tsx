import { Nav } from '@components/nav/Nav.tsx';
import { SideBar } from '@components/sidebar/SideBar.tsx';
import { Footer } from '@components/footer/Footer.tsx';
import footerStyle from '@components/footer/footer.module.css';
import footerTitleStyle from '@components/title/footerTitle/footerTitle.module.css';
import { QuillEditor } from '@src/features/board/quill/QuillEditor.tsx';
import { PostButton } from '@src/features/board/quill/postButton/PostButton.tsx';
import { BoardTitle } from '@src/features/board/quill/BoardTitle/BoardTitle.tsx';

export const Post = () => {
  return (
    <>
      <Nav />
      <SideBar />
      <BoardTitle />
      <QuillEditor />
      <PostButton />
      <Footer
        className={footerStyle.footer2}
        title01={footerTitleStyle.footerTitle05}
        title02={footerTitleStyle.footerTitle06}
        title03={footerTitleStyle.footerTitle07}
        title04={footerTitleStyle.footerTitle08}
      />
    </>
  );
};
