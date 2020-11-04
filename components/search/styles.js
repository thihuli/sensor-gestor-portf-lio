import styled from 'styled-components';
import { SCREEN_SIZES } from '../../utils/screen';

// TODO - REMOVE 74px and put sidesize

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: calc(100vw - 74px);
  height: 60px;
  background: ${({theme}) => theme.palette.mainGradient};
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20);

  padding: 10px;

  display: ${({visible}) => visible ? 'flex' : 'none'};

  form{
    display: flex;
    flex: 1;

    input.search-input{
      width: 100%;
      height: 40px;
      border: 0;
      border-radius: 15px 0 0 15px;
      outline: none;
      background-color: #f8f8f8;
      padding: 0 15px;
      font-size: 18px;
      color: rgba(0, 0, 0, .7);
    }

    button.search-button{

      display: flex;
      justify-content: center;
      align-items: center;

      width: 40px;
      height: 40px;

      border: 0;
      
      border-radius: 0 15px 15px 0;

      cursor: pointer;

      color: rgba(0,0,0,.7);

      font-size: 18px;

      transition: filter .2s;

      :hover{
        filter: brightness(80%);
      }
    }
  }

  @media(min-width: ${SCREEN_SIZES.sm}){
    transition: width .2s;

    width: 600px;
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto;

    border-radius: 0 0 6px 6px;
  }
`;
