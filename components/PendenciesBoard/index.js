import React from 'react';

import ProgressBar from '../progress_bar';

import * as S from './styles';

import { BiTask } from 'react-icons/bi'





function PendenciesBoard({ title, date, pendencies, description, children, progressbar }) {
  return (
    <S.Container>
      <S.Header>
        <p className='title'>{title}</p>
        <ProgressBar value={progressbar} heightbar={36} />
        <div className='textFooter'>
          <div className='date'>
            <p>Entrega Final: </p> <span>{date}</span>
          </div>

          <div className='pendencies' >
            <BiTask /> {pendencies} pendências
          </div>
        </div>
      </S.Header>
      <S.Body>
        <div className='description'>
          <p className='title'>Descrição:</p>
          <p className='textDescription'>{description}</p>
        </div>

        <h2 className='teamsTitle'>Equipes alocadas:</h2>
        <div className='board-teams'>
          <img src='/assets/teamFront-End.png' />
          <div className='developers'>
            {children}
          </div>
        </div>
        <div className='board-teams'>
          <img src='/assets/teamBack-End.png' />
          <div className='developers'>
            {children}
          </div>
        </div>


      </S.Body>

    </S.Container>
  );
};

export default PendenciesBoard;
