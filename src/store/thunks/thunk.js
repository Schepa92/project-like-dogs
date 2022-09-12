import { BASE_URL } from '../../constants/API';
import { getApiResource } from '../../utils/network';
import { addPhoto } from '../actions';

export const getResource = (count) => async (dispatch) => {
  const res = await getApiResource(BASE_URL + count);
  const img = res.message;
  dispatch(addPhoto(img));
};

// export const saveProfile = (profile) => async (dispatch, getState) => {
//     const userId = getState().auth.userId;
//     const response = await profileAPI.saveProfile(profile);
//     if (response.data.resultCode === 0) {
//       dispatch(getUserProfile(userId));
