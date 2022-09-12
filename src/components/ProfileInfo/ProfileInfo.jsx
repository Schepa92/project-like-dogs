import s from './ProfileInfo.module.css';
import avatar from './img/avatar.jpg';
import edit from './img/edit.svg';
import add from './img/add.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import EditPopup from '../EditPopup/EditPopup';
import { getResource } from '../../store/thunks/thunk';

const ProfileInfo = () => {
  const [name, setName] = useState('Sergey Schepankevich');
  const [subtitle, setSubtitle] = useState('This project about dogs');

  const [activeEditPopup, setActiveEditPopup] = useState(false);

  const [counter, setCounter] = useState(1);

  const dispatch = useDispatch();

  const addElement = () => {
    dispatch(getResource(counter));
  };

  return (
    <>
      <div className={s.container}>
        <img src={avatar} alt='Avatar' className={s.avatar} />
        <div className={s.name__text}>{name}</div>

        <img
          src={edit}
          alt='Edit'
          onClick={() => setActiveEditPopup(true)}
          className={s.edit}
        />
        <p className={s.subtitle__text}>{subtitle}</p>
        <div className={s.add}>
          <input
            type='range'
            min='1'
            max='10'
            value={counter}
            onChange={(e) => setCounter(e.target.value)}
            className={s.counter}
          />
          <p>Add photos: {counter}</p>
          <img
            src={add}
            alt='Add'
            onClick={addElement}
            className={s.addButton}
          />
        </div>
      </div>
      {activeEditPopup && (
        <EditPopup
          setActiveEditPopup={setActiveEditPopup}
          setName={setName}
          setSubtitle={setSubtitle}
          name={name}
          subtitle={subtitle}
        />
      )}
    </>
  );
};

export default ProfileInfo;
