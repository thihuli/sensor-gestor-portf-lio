import React from 'react';
import PendingProject from '../PendingProject';
import ProgressBar from '../progress_bar';
import PendenciesBoard from '../PendenciesBoard';
import IndividualTask from '../IndividualTask';

import * as S from './styles';

import { AiOutlineCheckCircle, AiOutlineClockCircle, AiOutlineCheck } from 'react-icons/ai';
import { BiTask } from 'react-icons/bi'
import { FiAlertCircle } from 'react-icons/fi'

function TaskOverview({ data }) {
  return (
    <S.Container>
      <div className='progress'>
        <div className='progressbar'>
          <progress className="bar"
            value={data.progress}
            max="100"></progress>
          <div className="text">{data.progress}%</div>
        </div>
        <S.Deadline>
          <p>Entrega final: {data.deadline.date}</p>
        </S.Deadline>
        <S.IconsAlert>
          <BiTask className='task' />

          <div className='outline-circle'>
            <AiOutlineCheckCircle />
            <p className='numberTasks'>{data.alerts.checks}</p>

          </div>
          <div className='outline-circle'>
            <AiOutlineClockCircle />
            <p className='numberTasks'>{data.alerts.clocks}</p>

          </div>
          <div className='outline-circle'>
            <FiAlertCircle />
            <p className='numberTasks'>{data.alerts.alert}</p>
          </div>
        </S.IconsAlert>
      </div>
      <S.ProgressSteps >
        <h6>Etapas do Progresso</h6>
        <div className='content'>
          <div className='briefing' >
            <AiOutlineCheck />
            <p>Briefing</p>
          </div>
          <div className='wireframe'>
            <AiOutlineCheck />
            <p>Wireframe</p>
          </div>
          <div className='layout'>
            <AiOutlineCheck />
            <p>Layout</p>
          </div>
          <div className='front-end'>
            <AiOutlineCheck />
            <p>Front End</p>
          </div>
          <div className='back-end'>
            <AiOutlineCheck />
            <p>Back End</p>
          </div>
          <div className='bug-fix'>
            <AiOutlineCheck />
            <p>Bug Fix</p>
          </div>
        </div>
      </S.ProgressSteps>
      <div className='contentpendency'>
        <div className='container-pendency-board'>
          <PendenciesBoard
            date={data.PendenciesBoard.date}
            title={data.PendenciesBoard.title}
            progressbar={data.PendenciesBoard.progressbar}
            pendencies={data.PendenciesBoard.pendencies}
            description={data.PendenciesBoard.description}
          >
            {data.tasksItens.map((item, index) => (
              <IndividualTask
                office={item.office}
                tasks={item.taks}
                titleName={item.name}
                key={index}
              />
            ))}
          </PendenciesBoard>
        </div>
        <S.PendenciesWeek>
          <div className='pendenciesweek'>
            <div className='title'>
              <h3>Pendencias</h3>
              <p>Semana</p>
            </div>
            <div className='pendencies'>
              {data.pendencies.map((pendency, index) => {
                return (
                  <PendingProject
                    title={pendency.title}
                    taskDeadline={pendency.taskDeadline}
                    user={pendency.user}
                    delivery={pendency.delivery}
                    status={pendency.status}
                    description={pendency.description}
                    thumbnail={pendency.thumbnail}
                    key={index}
                  />
                )
              })}
            </div>
          </div>

          <div className='pendencyboard'>
            <h3>Suas Pendencias</h3>
            <div className='pendencies to-do'>
              <div className='titlependency'>
                <BiTask />
                <h4>Pendencias a fazer</h4>
              </div>
              {data.pendencies.map((pendency, index) => {
                return (
                  <PendingProject
                    title={pendency.title}
                    taskDeadline={pendency.taskDeadline}
                    user={pendency.user}
                    delivery={pendency.delivery}
                    status={pendency.status}
                    description={pendency.description}
                    thumbnail={pendency.thumbnail}
                    key={index}
                  />
                )
              })}
            </div>
            <div className='pendencies to-do'>
              <div className='titlependency'>
                <BiTask />
                <h4>Pendencias concluidas</h4>
              </div>

              {data.pendencies.map((pendency, index) => {
                return (
                  <PendingProject
                    title={pendency.title}
                    taskDeadline={pendency.taskDeadline}
                    user={pendency.user}
                    delivery={pendency.delivery}
                    status={pendency.status}
                    description={pendency.description}
                    thumbnail={pendency.thumbnail}
                    key={index}
                  />
                )
              })}
            </div>
          </div>
        </S.PendenciesWeek>
      </div>
    </S.Container>
  );
}

export default TaskOverview;