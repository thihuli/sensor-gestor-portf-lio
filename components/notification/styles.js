import styled from 'styled-components';
import { SCREEN_SIZES } from '../../utils/screen';

export const Container = styled.div`
  /* display: ${({visible}) => visible ? 'flex' : 'none'}; */
  display: flex;

  position: absolute;
  top: 0;
  left: ${({visible}) => visible ? "74px" : "-1200px"};

  z-index: 1;

  transition: left 1s;

  flex-direction: column;

  overflow-y: auto;

  width: calc(100vw - 74px);
  height: 100vh;

  background-color: #f8f8f8;

  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20);

  @media(min-width: ${SCREEN_SIZES.sm}){
    width: 300px;
  }
`;

export const Item = styled.div`
  user-select: none;
  background-color: ${({read}) => read ? '#E8E8E8' : '#f5f5f5'};

  padding: 10px;

  border-bottom: 1px solid #d3d3d3;

  p{
    color: rgba(0, 0, 0, .7);
    margin-top: 0;
    margin-bottom: 6px;
  }

  span{
    color: rgba(0, 0, 0, .4);
  }
`;