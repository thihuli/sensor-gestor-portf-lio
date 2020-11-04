import styled from 'styled-components';

import { SCREEN_SIZES } from '../../utils/screen';

export const Container = styled.div`
  padding-left: 15px;

  @media(max-width: ${SCREEN_SIZES.md}){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  div.bar-chart {
    margin-bottom: 20px;
  }

  
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media(min-width: ${SCREEN_SIZES.md}){
    flex-direction: row;
  }

  .bar-chart p {
    padding-left: 35px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    margin-top: 12px;
    color: #454242
  }

  .area-chart .area-text {
    display: flex;
    align-items: center;
  }

  .area-text p {
    width: 40%;
    
  }

  .area-chart h5, p {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #454242;
    padding-left: 35px;
  }

  .pie-chart {
    
  }

  .area-chart {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ProjectName = styled.div`
  display: flex;  
  align-items: center;

  p {
    font-size: 25px;
    font-weight: bold;
    line-height: 34px;
    background: -webkit-${({ theme }) => theme.palette.mainGradient}; 
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    
  }

  div.background {
    background-color: #000;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 6px;

    img {
      width: 70%;
      object-fit: contain;
    }
  }
`;

export const Legends = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  /* gap: 5px; */
  margin: 10px 0;
  gap: 10px;

  
  @media(min-width: ${SCREEN_SIZES.md}){
    display: flex;
    flex-direction: column;
  }

  div.circle {
    display: flex;
    align-items: center;
    div {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin-right: 6px;
    }
  }

  .purple {
    background-color: #A25DB6;
  }
  .green {
    background-color: #00FFC2;
  }
  .red {
    background-color: #FE5D5D;
  }
  .gray {
    background-color: #D7D7D7;
  }
`;