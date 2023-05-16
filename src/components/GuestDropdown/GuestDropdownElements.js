import styled, { css } from 'styled-components';

export const WrapperG = styled.div`
  position: fixed;
  width: calc(50% - 11.5rem);
  top: 6rem;
  background: #fff;
  left: 28rem;
  border-radius: 1rem;
  box-shadow: 0 1px 6px rgb(0 0 0 / 10%);
  overflow: hidden;
`;

export const GuestWrapper = styled.div`
  padding: 1rem;

  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 0.9rem;
  line-height: 1.125rem;
  color: #4f4f4f;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 0.875rem;
  line-height: 1.125rem;
`;

export const TitleSub = styled(Title)`
  ${(props) =>
    props.text &&
    css`
      padding-top: 0.3rem;
      font-weight: 300;
      color: #828282;
    `}
`;

export const Count = styled.span`
  padding-left: 1rem;
  padding-right: 1rem;
  font-weight: 600;
`;

export const ButtonG = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid #828282;
  background: #fff;
  border-radius: 4px;
  cursor: pointer;

  ${(props) =>
    props.disabled &&
    css`
      background-color: #f8f9fa;
    `}
`;

export const BtnWrapper = styled.div`
  margin-top: 0.5rem;
  height: 1.5rem;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
`;
