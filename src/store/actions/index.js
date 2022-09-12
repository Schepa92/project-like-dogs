export const ADD_PHOTO = 'ADD_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';
export const LIKE_PHOTO = 'LIKE_PHOTO';
export const DISLIKE_PHOTO = 'DISLIKE_PHOTO';

export const addPhoto = (element) => ({
  type: ADD_PHOTO,
  payload: element,
});

export const removePhoto = (element) => ({
  type: REMOVE_PHOTO,
  payload: element,
});

export const likePhoto = (element) => ({
  type: LIKE_PHOTO,
  payload: element,
});

export const dislikePhoto = (element) => ({
  type: DISLIKE_PHOTO,
  payload: element,
});
