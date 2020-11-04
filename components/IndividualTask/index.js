import React from 'react';

import * as S from './styles';
import { BiTask } from 'react-icons/bi'
import CircularImage from '../circular_image';

function IndividualTask({ titleName, office, photo, tasks }) {
  return (
    <S.Container>
      <S.Content>
        <div className='image'>
          <CircularImage 
            photo={photo}
            size={25}
          />
        </div>
        <div className='text'>
          <h2>{titleName}</h2>
          <p>{office}</p>
        </div>
        <div className='task'>
          <p>{tasks}</p>
          <BiTask />
        </div>
      </S.Content>
    </S.Container>
  );
}

export default IndividualTask;
