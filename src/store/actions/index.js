export const ADD_PHOTO = 'ADD_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';

export const addPhoto = (element) => ({
  type: ADD_PHOTO,
  payload: element,
});

export const removePhoto = (element) => ({
  type: REMOVE_PHOTO,
  payload: element,
});
