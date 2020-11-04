import styled from 'styled-components';

export const Container = styled.div`
  width: 184px;
  height: 46px;
  background: ${({clicked, theme}) => clicked ? theme.palette.mainGradient : '#fff' };
  border-radius: 133px;
  border: 1px solid #BDBDBD;
  box-shadow: 0 4px 4px rgba(0,0,0, 0.25);
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  transition: filter .2s;

  &:hover {
    filter: brightness(80%);
  }

  p {
    color: ${({clicked}) => clicked ? '#fff' : '#000' };
  }
`;

export const ProjectImg = styled.div`
  background: #000;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  
  img {
    width: 20px;
    height: 20px;
    object-fit: cover;
  }  
`;
