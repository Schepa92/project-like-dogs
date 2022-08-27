import { ADD_PHOTO, REMOVE_PHOTO } from '../actions/index';

const initialState = [];

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PHOTO:
      return [...state, ...action.payload];
    case REMOVE_PHOTO:
      return [...state.filter((element) => element !== action.payload)];
    default:
      return state;
  }
};

export default photoReducer;
