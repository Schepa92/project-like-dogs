import { removePhoto } from '../../../store/actions';
import { useDispatch } from 'react-redux';
import delIcon from './img/delete.svg';

import s from './ImageItem.module.css';

const ImageItem = ({ img }) => {
  const dispatch = useDispatch();

  const removeElement = (image) => {
    dispatch(removePhoto(image));
  };

  return (
    <>
      <div className={s.container}>
        <img src={img} alt='Dog' className={s.image__item} />
        <img
          src={delIcon}
          alt='Delete'
          className={s.delButton}
          onClick={() => removeElement(img)}
        />
      </div>
    </>
  );
};

export default ImageItem;
