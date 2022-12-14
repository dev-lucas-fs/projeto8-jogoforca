import styled from "styled-components";

export const Container = styled.ul`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;

export const Letter = styled.li`
  width: 100%;
  max-width: 30px;
  padding: 10px 0;
  border-bottom: 2px solid #333;
  text-align: center;
  font-size: 1.6em;
  font-weight: bold;
  color: ${(props) => props.win};
`;
