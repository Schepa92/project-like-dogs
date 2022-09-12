import { useEffect } from 'react';
import s from './ImagesContainer.module.css';
import ImageItem from './ImageItem/ImageItem';
import { useSelector, useDispatch } from 'react-redux';
import { getResource } from '../../store/thunks/thunk';

const ImagesContainer = () => {
  const dispatch = useDispatch();
  const storePhotos = useSelector((state) => state.photoReducer.photos);

  useEffect(() => {
    dispatch(getResource(6));
  }, [dispatch]);

  return (
    <div className={s.container}>
      {storePhotos.length ? (
        storePhotos.map((img, index) => (
          <ImageItem img={img.url} isLike={img.likesCount} key={index} />
        ))
      ) : (
        <h2>No photos</h2>
      )}
    </div>
  );
};

export default ImagesContainer;
