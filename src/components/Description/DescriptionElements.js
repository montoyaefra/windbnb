import styled from 'styled-components';

export const Descriptions = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 0.75rem;
  min-height: 1.813rem;
`;

export const H1 = styled.h1`
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;

export const HeadWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  margin-bottom: 1rem;
  max-width: 90rem;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const SuperHost = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: bold;
  font-size: 0.75rem;
  line-height: 0.93rem;
  text-transform: uppercase;
  color: #4f4f4f;
  border: 1px solid #4f4f4f;
  border-radius: 0.75rem;
  padding: 0.3rem 0.6rem;
  margin-right: 0.75rem;
`;

export const TypeHost = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 0.87rem;
  line-height: 1.06rem;
  color: #828282;

  margin: 0.3rem;
`;

export const Ratings = styled(TypeHost)`
  font-weight: 500;
  display: flex;
  align-items: center;
  color: #4f4f4f;
`;

export const Title = styled(TypeHost)`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.25rem;
  color: #333333;
  margin-bottom: 4rem;
`;

export const Images = styled.img`
  width: 24.69rem;
  height: 16.82rem;
  border-radius: 1.5rem;
  overflow: hidden;
  margin-bottom: 0.938rem;
`;
