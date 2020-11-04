import styled from 'styled-components';

export const Container = styled.div`
  background: ${({theme}) => theme.palette.verticalGradient};
  height: 100%;

  width: 74px;

  padding: 10px 0;
  z-index: 2;
  position: fixed;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > div{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const Logo = styled.img`
  width: calc(100% - 20px);
  margin: 0 10px;

  cursor: pointer;
  margin-bottom: 20px;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: 10px;
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  cursor: pointer;

  font-size: 22px;

  color: ${({ selected, theme }) => selected ? theme.palette.secondary.main : 'white'};

  :hover{
    background-color: rgba(0, 0, 0, .2);
  }
`;
