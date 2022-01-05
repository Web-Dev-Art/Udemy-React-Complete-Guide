import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Card";
import Button from "./Button";

import style from './ErrorModal.module.css';

const Backdrop = (props) => {
    return <div className={style.backdrop} onClick={props.onConfirm} />
};

const Modal = (props) => {
  return (
      <div>
          <Card className={style.modal}>
              <header className={style.header}>
                  <h2>{props.title}</h2>
              </header>
              <div className={style.content}>
                  <p>{props.message}</p>
              </div>
              <footer className={style.actions}>
                  <Button type="button" onClick={props.onConfirm}>Okay</Button>
              </footer>
          </Card>
      </div>
  );
};

const ErrorModal = (props) => {
    return (
        <>
        {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(<Modal title={props.title} message={props.message} onConfirm={props.onConfirm} />, document.getElementById('overlay-root'))}
        </>
    );
};

export default ErrorModal;