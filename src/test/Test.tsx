import { Nav } from '../shared/component/nav/Nav.tsx';
import NavStyles from '../shared/component/nav/Nav.module.css';
// import { WriteButton } from '../shared/component/button/WriteButton/WriteButton.tsx';
// import WriteButtonStyles from '../shared/component/button/WriteButton/WriteButton.module.css';

export const Test = () => {
  return (
    <div>
      <Nav className={NavStyles.navbar} />
      <br />
    </div>
  );
};
