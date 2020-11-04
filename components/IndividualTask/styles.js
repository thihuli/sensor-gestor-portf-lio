import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 34px;
  border-radius: 20px;
  background: ${({theme}) => theme.palette.mainGradient};
  display: flex;
  padding: 0 10px;
  cursor: pointer;
  transition: filter .2s;

  :hover{
    filter: brightness(80%);
  }
  
  /* margin: 5px 0; */
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;

    h2 {
      font-size: 8px;
      margin: 0 8px;
    }

    p {
      font-size: 9px;
      display: none;
    }
  }

  .task {
    display: flex;
    align-items: center;

    justify-content: center;

    p {
      color: ${({theme}) => theme.palette.secondary.main};
      font-weight: 500;
      font-size: 12px;
    }
    svg {
      color: ${({theme}) => theme.palette.secondary.main};
      font-size: 13px;
    }
  }
`;
