import styled from 'styled-components'

export const Container = styled.header`
  height: 16em;
  width: 16em;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 1em;
  row-gap: 0.5em;
`;

export const Image = styled.img`
  max-height: 70%;
  min-height: 70%;
  mix-blend-mode: color-dodge;
`;

export const ContText = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.p`
  font-size: medium;
`;

export const Description = styled.p`
  font-size: small;
`;

export const Price = styled.p`
  font-size: small;
`;

export const Button = styled.button`
  border-radius: 6px;
  background-color: #0c6291;
  color: white;
  width: 40%;
  height: 10%;
`;