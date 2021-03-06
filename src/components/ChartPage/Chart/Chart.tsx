import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useAppSelector } from '../../../store/hooks';

import classes from './Chart.module.css';

import LoadingSpinner from '../../UI/LoadingSpinner/LoadingSpinner';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const Chart = () => {
  const chartData = useAppSelector(state => state.chart.chartData);
  const timestamps = useAppSelector(state => state.chart.timestamps);
  const range = useAppSelector(state => state.chart.currTimeRange.range);
  const { pageHeight, pageWidth } = useAppSelector(state => state.chart.sizes);

  console.log(pageHeight, pageWidth);

  if (chartData.length === 0 || timestamps.length === 0) {
    return (
      <div className={classes.LoadingSpinner}>
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <ResponsiveContainer width="90%" height="95%">
      <AreaChart
        width={500}
        height={400}
        data={chartData}
        margin={{
          top: 33,
          right: 25,
          left: 20,
          bottom: 20,
        }}
      >
        <Area
          dataKey="price"
          stroke="black"
          fill="url(#color)"
          activeDot={{ fill: 'black', r: 6 }}
        />

        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#232b2b" stopOpacity={0.3} />
            <stop offset="85%" stopColor="#232b2b" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <CartesianGrid opacity={0.5} vertical={false} />

        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tick={
            <CustomXAxisTick
              dateRange={range}
              timestamps={timestamps}
              pageHeight={pageHeight}
              pageWidth={pageWidth}
            />
          }
          interval={0}
        />

        <YAxis
          dataKey="price"
          axisLine={true}
          tickLine={false}
          tickCount={4}
          domain={['auto', 'auto']}
          tick={<CustomYAxisTick />}
          type="number"
          interval={0}
        />

        <Tooltip content={<CustomTooltip range={range} />} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

const CustomXAxisTick = (props: any) => {
  const {
    x,
    y,
    payload,
    dateRange: range,
    timestamps,
    pageHeight,
    pageWidth,
  } = props;
  const { value: valueOfDate, index } = payload;

  let day: number = 0,
    prevMonth: number = 0,
    month: number = 0,
    prevYear: number = 0,
    year: number = 0;

  if (range !== '1d') {
    day = timestamps[0][index];

    prevMonth = timestamps[1][index - 1];
    month = timestamps[1][index];

    prevYear = timestamps[2][index - 1];
    year = timestamps[2][index];
  }

  let date: string = '';

  if (range === 'max') {
    const firstYear = timestamps[2][0];

    if (firstYear >= 2010) {
      if (year !== prevYear && year % 2 === 0) date = String(year);
    } else if (firstYear >= 2000) {
      if (year !== prevYear && year % 4 === 0) date = String(year);
    } else if (firstYear >= 1990) {
      if (year !== prevYear && year % 6 === 0) date = String(year);
    } else {
      if (year !== prevYear && year % 8 === 0) date = String(year);
    }
  } else if (range === '5y') {
    if (pageWidth <= 1000) {
      if (year !== prevYear && index !== 0) date = String(year);
    } else {
      if (year !== prevYear) date = String(year);
    }
  } else if (range === '1y') {
    if (month !== prevMonth && month % 2 !== 0) {
      if (month === 1) date = String(year);
      else date = `${months[month - 1].split('').splice(0, 3).join('')}`;
    }
  } else if (range === '6m') {
    if (month !== prevMonth)
      date = `${months[month - 1].split('').splice(0, 3).join('')}`;
  } else if (range === '1m') {
    if (index % 5 === 0)
      date = `${months[month - 1].split('').splice(0, 3).join('')} ${day}`;
  } else if (range === '5d') {
    date = `${months[month - 1].split('').splice(0, 3).join('')} ${day}`;
  } else if (range === '1d') {
    const [minute, seconds] = valueOfDate.split(' ')[0].split(':');

    if (pageWidth < 700) {
      if (Number(minute) % 2 !== 0 && seconds === '00') date = valueOfDate;
    } else {
      if (seconds === '00') date = valueOfDate;
    }
  }

  return (
    <g transform={`translate(${x}, ${y})`}>
      <text x={0} y={0} dy={16} textAnchor="middle" fill="black" fontSize={14}>
        {date}
      </text>
    </g>
  );
};

const CustomYAxisTick = (props: any) => {
  const { x, y, index, payload } = props;

  const price = payload.value.toFixed(2);

  if (index === 0) {
    return null;
  }

  return (
    <g transform={`translate(${x}, ${y})`}>
      <text x={0} y={0} dy={5} textAnchor="end">
        {price}
      </text>
    </g>
  );
};

const CustomTooltip = ({ active, payload, label, range }: any) => {
  if (active) {
    let date = '';

    if (range === '1d') {
      date = payload[0].payload.date;
    } else {
      const dateArr = label.split('-');

      const day = dateArr[2];

      let month = 'Jan';
      if (dateArr[1][0] === '0') {
        month = months[Number(dateArr[1][1]) - 1];
      } else {
        month = months[Number(dateArr[1]) - 1];
      }

      const year = dateArr[0];

      date = `${day} ${month}, ${year}`;
    }

    return (
      <div className={classes.Tooltip}>
        <h4>{date}</h4>
        <p>{Number(payload[0].value).toFixed(2)}</p>
      </div>
    );
  }

  return null;
};

export default React.memo(Chart);
