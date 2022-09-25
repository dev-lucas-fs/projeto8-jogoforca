import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 20px;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const Left = styled.div`
  display: flex;
  width: 50%;
`;

export const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding: 20px 0;
`;
