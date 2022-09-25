import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  object-fit: cover;

  @media (min-width: 1200px) {
    max-width: 350px;
  }
`;
