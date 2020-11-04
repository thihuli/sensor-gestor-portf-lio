import styled from 'styled-components';
import { SCREEN_SIZES } from '../utils/screen';

export const Container = styled.div`
  /* display: flex;
  flex-direction: column; */
  padding: 40px;
  /* background: green; */
  /* overflow-x: hidden; */
  display: grid;
  grid-template-columns: 1fr;
`;

export const scrollHorizontal = styled.div`
  height: 100px;
  display: flex;
  gap: 20px;
  overflow-x: scroll;
  margin-bottom: 50px;

  ::-webkit-scrollbar-track {
      background-color: #EAEAEA;
      border-radius: 150px;
      border: 1px solid #DEDEDE;
      box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
      
    }
    ::-webkit-scrollbar {
      background: #EAEAEA;
      border-radius: 150px;
    }
    ::-webkit-scrollbar-thumb {
      background: #C4C4C4;
      border-radius: 150px;
    }    

`;

export const ProjectGraphics = styled.div`
  border: 3px solid #A25DB6;
  border-radius: 45px;
  padding: 10px 30px;
  height: 440px;

  .title {
    display: flex;
    align-items: center;
  }

  .title p {
    font-style: normal;
    font-weight: bold;
    font-size: 29px;
    line-height: 34px;
    background: -webkit-${({ theme }) => theme.palette.mainGradient}; 
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
  }

  .title .outline {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;

    img {
      object-fit: cover;
      
    }
  }
`;

export const Main = styled.div`
  border: 1px solid #534747;
  box-sizing: border-box;
  box-shadow: inset 0 4px 4px rgba(0,0,0,0.25);
  border-radius: 45px;
  margin: 40px 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  /* background: red; */
  
`;

export const Deadline = styled.div`
  width: 250px;
  height: 39px;
  background: ${({ theme }) => theme.palette.mainGradient};
  border-radius: 45px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  padding: 0 10px;
  user-select: none;
  text-align: center;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 21px;
  margin-right: 20px;

  /* @media(min-width: ${SCREEN_SIZES.md}) {
      width: 15%;
    } */
`;

export const IconsAlert = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.palette.mainGradient};
  border-radius: 45px;
  height: 39px;
  color: #fff;

  /* @media(min-width: ${SCREEN_SIZES.md}) {
      width: 15%;
    }
   */

  svg{
    font-size: 15px;
  }
  .task {
    margin-right: 3px;
  }
  .outline-circle {
    display: flex;
    align-items: center;
    margin: 0 3px;
  }

  .numberTasks {
    font-size: 9px;
    margin-bottom: 5px;
  }
`;

export const Header = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;


  .progress-bar {
    width: 260px;
    margin-right: 100px;
    width: 20%;
    height: 39px;
    display: flex;
    justify-content: center;
    align-items: center;

    progress {
      width: 100%;
      height: 39px;
      -webkit-appearance: none;
      appearance: none;
      margin-right: 10px;
    }

    progress[value]::-webkit-progress-bar {
      background: ${({theme }) => theme.palette.success};
      box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 50px;
      
    }

    progress[value]::-webkit-progress-value {
      background: ${({theme }) => theme.palette.mainGradient};
      border-radius: 50px;
    }

    .text {     
      font-size: 18px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #000;
      }
  }
`;

export const Neck = styled.div`
  width: 100%;
  margin-top: 20px;
  user-select: none;
  padding: 0 20px;

  h5 {
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 21px;
      margin-bottom: 15px;
      margin-left: 20px;
    }

  .phases {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    
  }

  .phases .phase {
    background: ${({theme }) => theme.palette.steps};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 100%;
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: filter .2s;
    :hover{
      filter: brightness(80%);
    }

    svg {
      font-size: 30px;
    }


    p , svg{
        -moz-transform: skew(50deg, 0deg);
        -webkit-transform: skew(50deg, 0deg);
        -o-transform: skew(50deg, 0deg);
        -ms-transform: skew(50deg, 0deg);
        transform: skew(50deg, 0deg);
        margin: 0 10px;
      }
      
  }

  .wireframe, .layout ,.front-end , .back-end {
      -moz-transform: skew(-50deg, 0deg);
      -webkit-transform: skew(-50deg, 0deg);
      -o-transform: skew(-50deg, 0deg);
      -ms-transform: skew(-50deg, 0deg);
      transform: skew(-50deg, 0deg);      
  }

  .briefing {
    border-top-left-radius: 25% 20%;
    border-bottom-left-radius: 50% 100%;
    transform: skew(-50deg, 0deg)
  }

  .bug-fix {
    border-top-right-radius: 50% 100%;
    border-bottom-right-radius: 25% 20%;
    transform: skew(-50deg, 0deg);
  }
`;

export const Body = styled.div`
  display: flex;
  margin-top: 40px;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;

  .container{
    
  }

  .pendency-board {
    display: flex;
    flex: 2;
    max-width: 500px;
    
  }

  .pendency-open {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 15px;
    max-width: 500px;
  }

  .title-pendency-open {
    display: flex;
    margin-bottom: 40px;

    h5, svg {
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 30px;
      color: #95A8C4;
    }

    svg {
      margin-right: 4px;
    }

    .text-title {
      display: flex;
      align-items: center;
    }

    .week {
      margin-left: 30px;
      display: flex;
      align-items: center;
      gap: 5px;

      h5 {
        margin-right: 10px;
      }

      div {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #E8E8E8;
        box-shadow: inset 2px 1px 4px rgba(0, 0, 0, 0.25)
      }
    }
  }

  .pendency-take {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    gap: 20px;
    

    h5 {
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 30px;
      color: #95A8C4;
      margin-bottom: 40px;
    }
  }

  .content {
    border: 0.7px solid #CBCBCB;
    box-sizing: border-box;
    box-shadow: inset 7px 0px 10px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    padding: 10px 8px;
  }

  .todo-do, .completed {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }

  .title {
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    color: #95A8C4;
    margin-bottom: 15px;
  }


`;