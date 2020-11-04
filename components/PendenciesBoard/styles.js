import styled from 'styled-components';

export const Container = styled.div`
  height: 650px;
  border: 1px solid #BDBDBD;
  border-radius: 30px;
  box-sizing: border-box;
  box-shadow: 4px 5px 4px rgba(0, 0, 0, 0.25);
`;

export const Header = styled.div`
  height: 154px;
  background: ${({theme}) => theme.palette.mainGradient};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px;

  .title {
    color: #fff;
    margin-bottom: 15px;
    margin-top: -10px;
    font-size: 20px;
    font-style: normal;
  }

  .textFooter {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    .date {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 13px;
      p {
        color: #00FF9B;
        margin-right: 6px;
      }
      span {
        color: #fff;
      }
    }
  }

  .pendencies {
    color: #fff;
    display: flex;
    align-items: center;
    svg {
      margin-right: 5px;
    }
  }
`;

export const Body = styled.div`
  padding: 0 10px;

  .description .title {
    font-size: 20px;
    font-style: normal;
    font-weight: normal;
    color: #454242;
    margin: 0;
  }

  .description .textDescription{
    padding: 0  10px;
    font-size: 12px;
    color: #454242;
    font-style: normal;
    font-weight: normal;
  }

  .teamsTitle {
    font-size: 20px;
    font-style: normal;
    font-weight: normal;
    color: #454242;
  }

  .board-teams {
    height: 180px;
    background: #FFFDFD;
    border: 1px solid #D2D2D2;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 1000px 45px 45px 1000px;
    background-image: url('/assets/EllipseTeams.png');
    background-size: contain;
    background-repeat: no-repeat;
    margin: 5px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px;

    img {
      height: 90%;
    }  
  }

  .developers {
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
