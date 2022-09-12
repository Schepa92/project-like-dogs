import { useState } from 'react';
import close from './img/close.svg';
import s from './EditPopup.module.css';

const EditPopup = ({
  setActiveEditPopup,
  setName,
  setSubtitle,
  name,
  subtitle,
}) => {
  const [valueName, setValueName] = useState(name);
  const [valueSubtitle, setValueSubtitle] = useState(subtitle);

  const editInfo = (e) => {
    e.preventDefault();
    setActiveEditPopup(false);

    setName(valueName);
    setSubtitle(valueSubtitle);
  };
  return (
    <>
      <div className={s.container}>
        <img
          src={close}
          alt='Close'
          onClick={() => setActiveEditPopup(false)}
          className={s.close}
        />
        <div className={s.window}>
          <h3 className={s.window__title}>Edit profile</h3>
          <form onSubmit={editInfo} className={s.form}>
            <input
              type='text'
              placeholder='Input your name'
              autoFocus={true}
              onChange={(e) => setValueName(e.target.value)}
              value={valueName}
            />
            <input
              type='text'
              placeholder='Input your subtitle'
              onChange={(e) => setValueSubtitle(e.target.value)}
              value={valueSubtitle}
            />
            <button disabled={!valueName || !valueSubtitle}>Save</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditPopup;
