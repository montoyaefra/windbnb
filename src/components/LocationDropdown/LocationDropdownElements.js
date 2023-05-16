import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  width: calc(50% - 11.5rem);

  top: 6rem;
  background: #fff;
  left: 8rem;
  border-radius: 1rem;
  box-shadow: 0 1px 6px rgb(0 0 0 / 10%);
  overflow: hidden;
`;

export const UL = styled.ul`
  padding: 1rem;
  list-style-type: none;
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 0.9rem;
  line-height: 1.125rem;
  color: #4f4f4f;

  ${(props) =>
    props.onHover &&
    css`
      cursor: pointer;
      :hover {
        background: #f2f2f2;
      }
    `}
`;
