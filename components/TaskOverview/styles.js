import styled from 'styled-components';
import { SCREEN_SIZES } from '../../utils/screen';

export const Container = styled.div`
  .progress {
    display: grid;
    padding: 15px;
    grid-template-columns: 1.2fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px;

    @media(min-width: ${SCREEN_SIZES.md}) {
      display: flex;
      padding: 15px 40px;

      .progressbar {
        width: 20%;
      }
    }

    .progressbar {
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

  }

  .contentpendency {
    .container-pendency-board {
      width: 700px;
    }
    @media(min-width: ${SCREEN_SIZES.md}) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

export const Deadline = styled.div`
  width: 100%;
  height: 20px;
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

  @media(min-width: ${SCREEN_SIZES.md}) {
      width: 15%;
    }
`;

export const IconsAlert = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.palette.mainGradient};
  border-radius: 45px;
  height: 20px;
  color: #fff;

  @media(min-width: ${SCREEN_SIZES.md}) {
      width: 15%;
    }
  

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

export const ProgressSteps = styled.div`
  h6 {
    margin: 4px 0;
    user-select: none;
  }

  div.content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    color: #5C15B7;
    margin-bottom: 15px;
  }

  svg {
    font-size: 18px;
    color: #5C15B7;
  }

  div.briefing {
    padding: 0 15px;
    height: 25px;
    background: ${({theme}) => theme.palette.steps};
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 45px;
    border-bottom-left-radius: 45px;
    user-select: none;
    transition: filter .2s;

    :hover{
      filter: brightness(80%);
    }
  }

  div.steps {
    padding: 0 15px;
    height: 25px;
    background: ${({theme}) => theme.palette.steps};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3px 5px;
    user-select: none;
    transition: filter .2s;

    :hover{
      filter: brightness(80%);
    }
  }


  div.steps.front-end {
    background: ${({ theme }) => theme.palette.success};
  }

  div.steps.back-end {
    background: ${({ theme }) => theme.palette.mainGradient};
    color: #fff;
  }

  div.bug-fix {
    padding: 0 15px;
    height: 25px;
    background: ${({ theme }) => theme.palette.mainGradient};
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    border-top-right-radius: 45px;
    border-bottom-right-radius: 45px;
    color: #fff;
    transition: filter .2s;

    :hover{
      filter: brightness(80%);
    }
  }
`;


export const PendenciesWeek = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 15px;
  justify-content: center;

  .title {
    display: flex;
    align-items: center;
    /* justify-content: center; */
    color: #95A8C3;
    margin-bottom: 20px;

    h3 {
      margin-right: 60px;
    }

    svg {
      font-size: 30px;
      color: #95A8C3;
    }
  }

  .pendencies {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 15px;
  }

  .pendencies.to-do {
    background: #FFFFFF;
    border: 0.6px solid #CBCBCB;
    box-sizing: border-box;
    box-shadow: inset 7px 0px 10px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .titlependency {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #95A8C4;
      margin-bottom: 5px;

      svg {
        font-size: 20px;
      }

    }
  }

  .pendencyboard {
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      color: #95A8C4;
      margin-bottom: 20px;
    }
  }

  @media(min-width: ${SCREEN_SIZES.md}) {
    flex-direction: row;
    margin-left: 20px;

    .pendenciesweek {
      margin-right: 30px;
    }
  }

`;