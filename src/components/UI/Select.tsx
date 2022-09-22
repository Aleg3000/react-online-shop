import React, { useState } from 'react';
import classes from './Select.module.css';

interface ISelectInterface {
  title?: string;
  options: string[];
  onChange: (select: string) => void;
}

const Input = ({
  title,
  changeTitle,
  idx,
}: {
  title: string;
  changeTitle: ({ currentTarget }: React.MouseEvent) => void;
  idx: number;
}) => {
  return (
    <React.Fragment>
      <input id={'singleSelect' + idx} className={classes.input} type="radio" name="singleSelect" />
      <label htmlFor={'singleSelect' + idx} className={classes.label} onClick={changeTitle}>
        {title}
      </label>
    </React.Fragment>
  );
};

const Select = (props: ISelectInterface) => {
  const [toggle, setToggle] = useState('');
  const changeToggle = () => {
    toggle === '' ? setToggle('active') : setToggle('');
  };

  const [title, setTitle] = useState('product view');
  const changeTitle = ({ currentTarget }: React.MouseEvent) => {
    setTitle(currentTarget.innerHTML);
    setToggle('');
    props.onChange(currentTarget.innerHTML);
  };

  return (
    <div className={classes.select} data-state={toggle}>
      <div className={classes.title} onClick={changeToggle}>
        {title}
      </div>
      <div className={classes.content}>
        {props.title ? (
          <Input title={title} changeTitle={changeTitle} key={title} idx={0} />
        ) : (
          <Input
            title={props.options[0]}
            changeTitle={changeTitle}
            key={props.options[0]}
            idx={0}
          />
        )}
        {props.options.map((title, idx) => (
          <Input title={title} changeTitle={changeTitle} key={title} idx={idx + 1} />
        ))}
      </div>
    </div>
  );
};

export default Select;
