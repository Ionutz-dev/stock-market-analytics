import React, { useState } from 'react';

import classes from './SelectMenu.module.css';

const SelectMenu = props => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(
    props.title === 'Stock' ? 'AAPL' : '1mo'
  );

  const toggleOpenHandler = () => {
    setOpen(!open);
  };

  const selectHandler = option => {
    setSelected(option);

    if (props.title === 'Range') {
      props.onSelectOption(option);
    }

    if (props.title === 'Stock') {
      if (option === 'AAPL')
        props.onSelectOption({ name: 'Apple', symbol: option }, props.title);
      else if (option === 'FB')
        props.onSelectOption({ name: 'Facebook', symbol: option }, props.title);
      else if (option === 'AMZN')
        props.onSelectOption({ name: 'Amazon', symbol: option }, props.title);
      else if (option === 'NFLX')
        props.onSelectOption({ name: 'Netflix', symbol: option }, props.title);
      else if (option === 'GOOGL')
        props.onSelectOption(
          { name: 'Alphabet', symbol: 'GOOGL' },
          props.title
        );
      else if (option === 'TSLA')
        props.onSelectOption({ name: 'Tesla', symbol: 'TSLA' }, props.title);
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
            {option}
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
            <span>{selected}</span>
            <div className={classes['arrow']}></div>
          </div>
          {options}
        </div>
      </div>
    </div>
  );
};

export default SelectMenu;
