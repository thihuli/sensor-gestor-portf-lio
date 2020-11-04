import React from 'react';

import * as S from './styles';

function TeamProjects({ clicked, img, project }) {
  return (
    <S.Container clicked={clicked}>
      <S.ProjectImg>
        <img src={img} />
      </S.ProjectImg>
      <p>{project}</p>
    </S.Container>
  );
}

export default TeamProjects;