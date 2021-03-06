import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';

import {
  changeCurrStock,
  changeCurrRange,
} from '../../../store/chartData-actions';

import classes from './SelectMenu.module.css';

interface typeOfProps {
  title: string;
  options: string[];
}

const SelectMenu = (props: typeOfProps) => {
  const dispatch = useAppDispatch();

  const stockSymbol = useAppSelector(state => state.chart.currStock.symbol);
  const range = useAppSelector(state => state.chart.currTimeRange.range);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(
    props.title === 'Stock' ? stockSymbol : range
  );

  const toggleOpenHandler = () => {
    setOpen(!open);
  };

  const selectHandler = (option: string) => {
    setSelected(option);

    if (props.title === 'Range') {
      let range = option,
        interval = '1d';

      if (range === '1d') interval = '15m';
      if (range === '5y') interval = '1wk';
      if (range === 'max') interval = '1mo';

      dispatch(changeCurrRange({ range: range, interval: interval }));
    }

    if (props.title === 'Stock') {
      let name = '',
        symbol = '';

      if (option === 'AAPL') {
        name = 'Apple';
        symbol = option;
      } else if (option === 'FB') {
        name = 'Facebook';
        symbol = option;
      } else if (option === 'AMZN') {
        name = 'Amazon';
        symbol = option;
      } else if (option === 'NFLX') {
        name = 'Netflix';
        symbol = option;
      } else if (option === 'GOOGL') {
        name = 'Alphabet';
        symbol = option;
      } else if (option === 'TSLA') {
        name = 'Tesla';
        symbol = option;
      } else if (option === 'MSFT') {
        name = 'Microsoft';
        symbol = option;
      }

      dispatch(changeCurrStock({ stockName: name, stockSymbol: symbol }));
    }
  };

  const options = (
    <div className={classes['custom-options']}>
      {props.options.map(option => {
        return (
          <span
            key={Math.random().toString()}
            className={
              selected === option
                ? `${classes['custom-option']} ${classes['selected']}`
                : `${classes['custom-option']}`
            }
            data-value={option.toLowerCase()}
            onClick={() => selectHandler(option)}
          >
            {option.toUpperCase()}
          </span>
        );
      })}
    </div>
  );
  return (
    <div className={classes.MenuContainer}>
      <h1 className={classes.Title}>{props.title}</h1>
      <div
        className={classes['custom-select-wrapper']}
        onClick={() => toggleOpenHandler()}
      >
        <div
          className={
            open
              ? `${classes['custom-select']} ${classes['open']}`
              : `${classes['custom-select']}`
          }
        >
          <div className={classes['custom-select__trigger']}>
            <span>{selected.toUpperCase()}</span>
            <div className={classes['arrow']}></div>
          </div>
          {options}
        </div>
      </div>
    </div>
  );
};

export default SelectMenu;
