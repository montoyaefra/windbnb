import logo from "../../images/logo.svg"
import Description from '../Description/Description';
import NavSearch from '../NavSearch/NavSearch';
import { Wrapper, NavWrap } from './HeaderElements.js';
const Header = () => {
  return (
    <>
      <Wrapper>
        <NavWrap>
          <img src={logo} style={{ height: 100, width: 150 }} alt="Logo" />
          <NavSearch />
        </NavWrap>
        <Description />
      </Wrapper>
    </>
  );
};

export default Header;
