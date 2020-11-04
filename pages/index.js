import React, { useState, useEffect } from 'react';

import Graphics from '../components/Graphics';
import TeamProjects from '../components/TeamProjects';
import Menu from '../layouts/menu';

import * as S from '../styles/dashboard';

import { BiTask } from 'react-icons/bi';
import { AiOutlineCheck, AiOutlineCheckCircle, AiOutlineClockCircle } from 'react-icons/ai';
import { FiAlertCircle } from 'react-icons/fi';
import PendenciesBoard from '../components/PendenciesBoard';
import IndividualTask from '../components/IndividualTask';
import PendingProject from '../components/PendingProject';

const data = {
  projects: [
    { project: 'Sensor Gestor', clicked: true, img: 'assets/sensorgestorproject.png' },
    { project: 'Sensor Gestor', clicked: true, img: 'assets/sensorgestorproject.png' },
    { project: 'Sensor Gestor', clicked: true, img: 'assets/sensorgestorproject.png' },
    { project: 'Sensor Gestor', clicked: true, img: 'assets/sensorgestorproject.png' },
    { project: 'Sensor Gestor', clicked: true, img: 'assets/sensorgestorproject.png' },
    { project: 'Sensor Gestor', clicked: true, img: 'assets/sensorgestorproject.png' },
    { project: 'Sensor Gestor', clicked: true, img: 'assets/sensorgestorproject.png' },
    { project: 'Sensor Gestor', clicked: true, img: 'assets/sensorgestorproject.png' },
    { project: 'Sensor Gestor', clicked: true, img: 'assets/sensorgestorproject.png' },
    { project: 'Sensor Gestor', clicked: true, img: 'assets/sensorgestorproject.png' },
    { project: 'Sensor Gestor', clicked: true, img: 'assets/sensorgestorproject.png' },
    { project: 'Sensor Gestor', clicked: true, img: 'assets/sensorgestorproject.png' },

  ],
  dataArea: [
    { name: 'Semana 1', Pendencias: 30, Completadas: 10 },
    { name: 'Semana 2', Pendencias: 20, Completadas: 15 },
    { name: 'Semana 3', Pendencias: 15, Completadas: 17 },
    { name: 'Semana 4', Pendencias: 13, Completadas: 20 },
    { name: 'Semana 5', Pendencias: 10, Completadas: 24 },
    { name: 'Semana 6', Pendencias: 6, Completadas: 27 },
    { name: 'Semana 7', Pendencias: 3, Completadas: 30 },
  ],
  dataBar: [
    {
      name: 'Pendencias',
      Alocadas: 15,
      Completas: 25,
      Atrasadas: 30,
      Livres: 5,
    },
  ],
  dataPie: [
    { name: 'Alocadas', value: 15 },
    { name: 'Completas', value: 25 },
    { name: 'Atrasadas', value: 30 },
    { name: 'Livres', value: 5 },
  ],
  deadline: { date: '31/10/2020' },
  alerts: { alert: '5', clocks: '9', checks: '6' },
  tasksFinished: { finished: true },
  tasksItens: [
    {
      name: 'Clarisse da Silva',
      office: 'Junior',
      taks: '5',
    },
    {
      name: 'Clarisse Fulana',
      office: 'estagiária',
      taks: '3',
    },
    {
      name: 'Clarisse de Tal',
      office: 'Junior',
      taks: '7',
    },
    {
      name: 'João Melão',
      office: 'Pleno',
      taks: '15',
    }
  ],
  progress: 65,
  PendenciesBoard: {
    title: 'Front End + Back End',
    date: '13/11/2020',
    progressbar: 45,
    pendencies: 40,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eversince the 1500s, when an unknown printer took a galley of type andscrambled it to make a type specimen."
  },
  pendencies: [
    {
      title: 'Api de notificação',
      taskDeadline: '16/10/2020',
      user: 'Carlos',
      status: 'A fazer',
      delivery: '13/11/2020',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eversince the 1500s, when an unknown printer took a galley of type andscrambled it to make a type specimen.",
      thumbnail: 'assets/previewProject.png'
    },
    {
      title: 'Refazer Página dashboard',
      taskDeadline: '16/10/2020',
      user: 'Thiago Fernandes',
      status: 'Em andamento',
      delivery: '13/11/2020',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eversince the 1500s, when an unknown printer took a galley of type andscrambled it to make a type specimen.",
      thumbnail: 'assets/previewProject.png'
    },
    {
      title: 'Fazer Página Users',
      taskDeadline: '16/10/2020',
      user: 'Lucas Rosario',
      status: 'Atrasado',
      delivery: '13/11/2020',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eversince the 1500s, when an unknown printer took a galley of type andscrambled it to make a type specimen.",
      thumbnail: 'assets/previewProject.png'
    },
    {
      title: 'Integração ',
      taskDeadline: '16/10/2020',
      user: 'Cicero Domeneck',
      status: 'Concluido',
      delivery: '13/11/2020',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eversince the 1500s, when an unknown printer took a galley of type andscrambled it to make a type specimen.",
      thumbnail: 'assets/previewProject.png'
    }
  ]

};






function Dashboard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const { project } = {
      project: Array(9).fill({
        id: 1,
        name: 'Palco Web',
        thumbnail_url: "/assets/palcoWeb.png",
      })
    }
  }, [])

  return (
    <S.Container>
      <S.scrollHorizontal>
        {data.projects.map((item, index) => (
          <div>
            <TeamProjects
              key={index}
              img={item.img}
              project={item.project}
            />
          </div>
        ))}
      </S.scrollHorizontal>
      <S.ProjectGraphics>
        <div className='title'>
          <div className='outline'>
            <img src='assets/palcoWeb.png' />
          </div>
          <p>Palco Web</p>
        </div>
        <Graphics
          dataArea={data.dataArea}
          dataBar={data.dataBar}
          dataPie={data.dataPie}
        />
      </S.ProjectGraphics>
      <S.Main>
        <S.Header>
          <div className='progress-bar'>
            <progress className="bar"
              value={45}
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
        </S.Header>
        <S.Neck>
          <h5>Etapas do Progresso</h5>
          <div className='phases'>
            <div className='phase briefing' >
              <AiOutlineCheck />
              <p>Briefing</p>
            </div>
            <div className='phase  wireframe'>
              <AiOutlineCheck />
              <p>Wireframe</p>
            </div>
            <div className='phase  layout'>
              <AiOutlineCheck />
              <p>Layout</p>
            </div>
            <div className='phase  front-end'>
              <AiOutlineCheck />
              <p>Front End</p>
            </div>
            <div className='phase  back-end'>
              <AiOutlineCheck />
              <p>Back End</p>
            </div>
            <div className='phase  bug-fix'>
              <AiOutlineCheck />
              <p>Bug Fix</p>
            </div>
          </div>
        </S.Neck>
        <S.Body>
          <div className='container pendency-board'>
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
          <div className='container pendency-open'>
            <div className='title-pendency-open'>
              <div className='text-title'>
                <BiTask />
                <h5>Pendências</h5>
              </div>
              <div className='week'>
                <h5>Semana</h5>
                <div/>
                <div/>
                <div/>
                <div/>
              </div>
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
          <div className='container pendency-take' >
            <h5>Suas Pendências</h5>
            <div className='content todo-do'>
              <div className='title'>
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
            <div className='content completed'>
              <div className='title'>
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
        </S.Body>
      </S.Main>
    </S.Container>
  );
}

export default Menu(Dashboard);