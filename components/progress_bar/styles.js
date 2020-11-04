import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: ${({heightbar}) => heightbar ? `${heightbar}px` : '18px' };
  display: flex;
  justify-content: center;
  align-items: center;

  progress {
    width: 100%;
    height: 100%;
    -webkit-appearance: none;
    appearance: none;
    margin-right: 10px;
  }

  progress[value]::-webkit-progress-bar {
    background: #fff;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
    
  }

  progress[value]::-webkit-progress-value {
    background: ${({theme }) => theme.palette.success};
    border-radius: 50px;
  }

  .text {    
    font-size: 18px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #fff;
  }
`;
