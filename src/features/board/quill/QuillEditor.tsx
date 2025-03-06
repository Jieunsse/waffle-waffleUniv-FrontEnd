import ReactQuill from 'react-quill';
import style from './quillEditor.module.css';
import 'react-quill/dist/quill.snow.css';

export const QuillEditor = () => {
  return (
    <div>
      <ReactQuill theme="snow" className={style.editor} />
    </div>
  );
};
