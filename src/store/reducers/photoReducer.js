import {
  ADD_PHOTO,
  REMOVE_PHOTO,
  LIKE_PHOTO,
  DISLIKE_PHOTO,
} from '../actions/index';

const initialState = { photos: [] };

const photoReducer = (state = initialState, action) => {
  const currentPhotos = [...state.photos];
  const changedIndex = currentPhotos.findIndex(
    (element) => element.url === action.payload
  );
  switch (action.type) {
    case ADD_PHOTO:
      const newPhoto = action.payload.map((item) => ({
        url: item,
        likesCount: false,
      }));
      return {
        ...state,
        photos: [...state.photos, ...newPhoto],
      };
    case REMOVE_PHOTO:
      return {
        ...state,
        photos: [
          ...state.photos.filter((element) => element.url !== action.payload),
        ],
      };
    case LIKE_PHOTO:
      currentPhotos[changedIndex].likesCount = true;
      return {
        ...state,
        photos: currentPhotos,
      };
    case DISLIKE_PHOTO:
      currentPhotos[changedIndex].likesCount = false;
      return {
        ...state,
        photos: currentPhotos,
      };
    default:
      return state;
  }
};

export default photoReducer;
