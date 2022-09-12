import { removePhoto, likePhoto, dislikePhoto } from '../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import likeButton from './img/like.svg';
import likeButtonOn from './img/like-on.svg';
import delIcon from './img/delete.svg';

import s from './ImageItem.module.css';

const ImageItem = ({ img, isLike }) => {
  const dispatch = useDispatch();

  const removeElement = (image) => {
    dispatch(removePhoto(image));
  };

  const likeElement = (image) => {
    dispatch(likePhoto(image));
  };

  const dislikeElement = (image) => {
    dispatch(dislikePhoto(image));
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
        {isLike ? (
          <img
            src={likeButtonOn}
            alt='Like'
            className={s.likeButton}
            onClick={() => dislikeElement(img)}
          />
        ) : (
          <img
            src={likeButton}
            alt='Like'
            className={s.likeButton}
            onClick={() => likeElement(img)}
          />
        )}
      </div>
    </>
  );
};

export default ImageItem;
