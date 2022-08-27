import { useEffect, useState } from 'react';
import s from './ImagesContainer.module.css';
import { getApiResource } from '../../utils/network';
import ImageItem from './ImageItem/ImageItem';
import { useSelector, useDispatch } from 'react-redux';
import { addPhoto } from '../../store/actions';

const ImagesContainer = () => {
  const dispatch = useDispatch();
  const getResource = async (url) => {
    const res = await getApiResource(url);
    const img = res.message;
    dispatch(addPhoto(img));
  };

  const storePhotos = useSelector((state) => state.photoReducer);

  useEffect(() => {
    getResource('https://dog.ceo/api/breeds/image/random/6');
  }, []);

  return (
    <div className={s.container}>
      {storePhotos.length ? (
        storePhotos.map((img, index) => <ImageItem img={img} key={index} />)
      ) : (
        <h2>No photos</h2>
      )}
    </div>
  );
};

export default ImagesContainer;
