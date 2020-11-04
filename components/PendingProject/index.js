import React, { useState } from 'react';

import CircularImage from '../circular_image';

import * as S from './styles';

import { AiOutlineQuestionCircle, AiOutlineCheck, AiOutlineClockCircle} from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';

function PendingProject({ title, taskDeadline, user, status, delivery, description, thumbnail, isOpen, disible}) {
  const [visible, setVisible] = useState(isOpen);
  const [time, setTime] = useState(false)

  setTimeout(() => {
    visible ? setTime(true) : setTime(false);
  }, 500)

  const arrowDisible = (value) => {
    value ? null : setVisible(!visible)
  }

  return (
    <S.Container visible={visible}  status={status}>
      <div className='header-pending'>
        {status === 'Concluido' ? <AiOutlineCheck/> : status === 'Em andamento' ? <AiOutlineClockCircle /> : <AiOutlineQuestionCircle />}   
        <p className='pendency'>{title}</p>
        <p className='date'>{taskDeadline}</p>
        <IoIosArrowDown className='arrow' onClick={() => arrowDisible(disible)} />
        <CircularImage size={30} />
      </div>
      {visible  && time?
        <S.Content visible={visible} >
          <div className='container'>
            <div className='header-content'>
              <span>
                Usuário Responsável:
                <p>{user}</p>
              </span>
              <span>
                Status:
                <p>{status} </p>
              </span>
              <span>
                Entrega:
                <p>{delivery} </p>
              </span>
            </div>
            <div className='thumbnail' >
              <img src={thumbnail} alt='thumbnail' />
              <span>
                Descrição:
                <p>{description} </p>
              </span>
            </div>
          </div>
        </S.Content> :
        <></>}
    </S.Container>
  );
}

export default PendingProject;