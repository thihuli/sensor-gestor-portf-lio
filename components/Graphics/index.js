import React from 'react';

import * as S from './styles';

import {
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const COLORS = ['#A25DB6', '#00FFC2', '#FE5D5D', '#D7D7D7'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
function Graphics({ dataArea, dataBar, dataPie }) {
  return (
    <S.Container>
      <S.Content>
        <S.Legends>
          <div className='circle'>
            <div className='purple' />
            <p>Alocadas</p>
          </div>
          <div className='circle'>
            <div className='green' />
            <p>Completas</p>
          </div>
          <div className='circle'>
            <div className='red' />
            <p>Atrasadas</p>
          </div>
          <div className='circle'>
            <div className='gray' />
            <p>Livres</p>
          </div>
        </S.Legends>

        <div className='bar-chart'>
          <BarChart
            width={350}
            height={250}
            data={dataBar}>
            <Bar dataKey="Alocadas" fill="#A25DB6" />
            <Bar dataKey="Completas" fill="#00FFC2" />
            <Bar dataKey="Atrasadas" fill="#FE5D5D" />
            <Bar dataKey="Livres" fill="#D7D7D7" />
          </BarChart>
          <p>Equipe Atuando</p>
        </div>

        <div className='area-chart'>
          <div>
            <AreaChart
              width={350}
              height={250}
              data={dataArea}
              margin={{
                left: -30,
                right: 15
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis dataKey="name" tickLine={false} />
              <YAxis tickLine={false} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="Completadas"
                stroke="#00FFC2"
                fill="#82ca9d"
              />
            </AreaChart>
          </div>
          {/* <div className='area-text'>
            <h5>Equipe Atuando</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          </div> */}
        </div>

        <div className='pie-chart'>
          <PieChart width={250} height={250}>
            <Pie
              data={dataPie}
              cx={125}
              cy={125}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={110}
              fill="#8884d8"
              dataKey="value"
            >
              {dataPie.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>
      </S.Content>
    </S.Container>
  );
}

export default Graphics;