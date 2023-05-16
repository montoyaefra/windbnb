import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  box-shadow: 0 1px 6px rgb(0 0 0 / 10%);
  border-radius: 1rem;
  overflow: hidden;

  ${(props) =>
    props.expand &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      padding: 2rem 8rem;
      margin-bottom: 2rem;
      width: 100%;

      background: #ffffff;
    `}
`;

export const Input = styled.input`
  padding: 0 1rem;
  border: 0;
  border-right: 1px solid #f2f2f2;
  font-size: 0.8rem;
  width: 8.5rem;
  flex-direction: column;
  color: #828282;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  

  ${(props) =>
    props.disabled &&
    css`
      background: #ffffff;
    `}

  ${(props) =>
    props.expandInput &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      font-size: 1rem;
      height: 100%;
      width: 50%;
      background: #ffffff;
      box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);

      cursor: pointer;
    `}

  ${(props) =>
    props.radius &&
    css`
      border-top-left-radius: 1rem;
      border-bottom-left-radius: 1rem;
    `}
`;

export const Button = styled.button`
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  padding: 1rem;
  background: #ffffff;

  ${(props) =>
    props.expandBtn &&
    css`
      color: #ffffff;

      background-color: #eb5757;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;
