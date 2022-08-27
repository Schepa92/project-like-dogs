import { useState } from 'react';
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
      <div
        className={s.container}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            setActiveEditPopup(false);
          }
        }}
      >
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
