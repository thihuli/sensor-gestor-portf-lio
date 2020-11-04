import styled, { css } from 'styled-components';

export const Container = styled.div`
  box-shadow: 0 2px 3px rgba(0,0,0, 0.3);
  ${({status}) => {
    if(status === 'A fazer') {
      return css`
        background: ${({theme}) => theme.palette.steps};
        svg {
          color: #5C5DB6;
        }
        .header {
          color: #5C5DB6;
        }
      `
    }
    if(status === 'Em andamento') {
      return css`
        background: ${({theme}) => theme.palette.mainGradient};
        svg {
          color: #FFF;
        }
        .header {
          color:  #FFF;
        }
      `
    }
    if(status === 'Concluido') {
      return css`
        background: ${({theme}) => theme.palette.success};
        svg {
          color:  #5C5DB6;
        }
        .header {
          color: #5C5DB6;
        }
      `
    }
    if(status === 'Atrasado') {
      return css`
        background: ${({theme}) => theme.palette.warning};
        svg {
          color: #FFF;
        }
        .header {
          color:  #FFF;
        }
      `
    }
  }}
  
  transition: border-radius .3s;
  transition-delay: ${({visible}) => visible ? "0" : ".2s"};
  border-radius: ${({visible}) => visible ? "27px 27px 27px 27px " : "27px"};
  
  

  .header-pending {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8px;
  }

  .pendency {
    font-size: 14px;
    margin: 0 10px;
    width: 110px;
  }

  .date {
    font-size: 14px;
    margin-right: 10px;
  }

  svg {
    font-size: 30px;
    cursor: pointer; 
  }

  .arrow{
    margin-right: 10px;
    ${({visible}) => {
      if(visible) {return css `
        transform: rotate(180deg);
      `}
      if(!visible){
        return css `
        transform: rotate(0deg);
      `
      } 
    }}

    transition: transform .8s;
  }

`;

export const Content = styled.div`
  height: ${({visible}) => visible ? "395" : "0"}px;
  background: ${({theme}) => theme.palette.steps};
  border-radius: 0 0 28px 28px;
  transition: height .2s;
  transition-delay: ${({visible}) => visible ? ".4s" : "0s"};
  user-select: none;

  .container {
    display: ${({visible}) => visible ? 'flex' : 'none' };
    flex-direction: column;
    padding: 8px;

    img {
      width: 40%;
      margin-right: 8px;
      object-fit: contain;
    }

    .header-content {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      margin-top: 20px;

      span {
        line-height: 17px;
      }

      p {
        margin-top: 8px;
        color: #5C5DB6;
      }
    }

    .thumbnail {
      display: flex;
      margin-top: 20px;
      
      span {
        padding: 10px;
      }
      p {
        margin-top: 10px;
        text-align: justify;        
      }
    }    
  }

`;
