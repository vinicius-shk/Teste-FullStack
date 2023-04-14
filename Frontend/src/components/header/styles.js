import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  height: 2em;
  padding-left: 20%;
  gap: 30px;
`;

export const Select = styled.select`
  width: 10%;
  height: 80%;
  border-radius: 5px;
  background-color: #0c6291;
  color: white;
`;

export const Option = styled.option`
  background-color: white;
  color: black;
  height: 20em;
`;

export const Input = styled.input`
  width: 30%;
  height: 80%;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Button = styled.button`
  width: 10%;
  color: black;
  height: 80%;
  border-radius: 5px;
  background-color: #a3d9ff;
`;