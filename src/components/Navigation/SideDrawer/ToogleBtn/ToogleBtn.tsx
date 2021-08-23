import React from 'react';

import classes from './ToogleBtn.module.css';

interface propsType {
  clicked(): void;
}

const toggleBtn = (props: propsType) => (
  <div onClick={props.clicked} className={classes.ToggleBtn}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default toggleBtn;
