import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Label = styled.label`
  font-size: 1.4em;
`;

export const Button = styled.button`
  background-color: #e1ecf4;
  border: 1px solid blue;
  padding: 8px;
  border-radius: 5px;
  font-size: 1.4em;
  font-weight: bold;
  color: blue;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 250px;
  padding: 8px;
  border-radius: 5px;
  font-size: 1.4em;
  border: 1px solid #cecece;
  outline: transparent;
`;
