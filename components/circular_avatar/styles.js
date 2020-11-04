import styled, { css } from 'styled-components';

export const Container = styled.div`

  background-image: url(${({src}) => src});
  width: ${({size}) => size || 64}px;
  height: ${({size}) => size || 64}px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  
  ${({ onClick }) => onClick ? css`
    transition: filter .2s;
    cursor: pointer;

    :hover{
      filter: brightness(80%);
    }
  ` : null};

`;
