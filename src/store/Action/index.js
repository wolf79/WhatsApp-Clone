import * as actionTypes from './actionTypes';
import {API_URL} from '../../config/apiConfig';

import axios from 'react-native-axios';

const onUserRegister = info => {
  console.log(info,"onregister")

  return dispatch => {
    let formData = new FormData();

    formData.append('first_name', info.userName);
    formData.append('contact_no', info.phone_no);
    formData.append('avatar', info.userAvatar);

    axios
      .post(
        `http://${API_URL}:8000/user/add_user`,
        formData,

        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )
      .then(json => {
        console.log('onUserRegister => ', json.data);
        if (json.data == 'User Has Not Registered!') {
          dispatch({
            type: actionTypes.MEESSAGEFROMSERVER,
            payload: json.data,
            networkRequest: true,
          });
        } else {
          dispatch({
            type: actionTypes.CURRENTUSER,
            payload: json.data,
            networkRequest: true,
          });
        }
      })
      .catch(e =>
        dispatch({
          type: actionTypes.MEESSAGEFROMSERVER,
          payload: json.data,
          networkRequest: true,
        }),
      );
  };
};

const onUserLogin = info => {
  return dispatch => {
    axios
      .get(`http://${API_URL}:8000/user/login?contact_no=${info.phone_no}`)
      .then(json => {
        if (json.data == 'User Has Not Registered!') {
          dispatch({
            type: actionTypes.MEESSAGEFROMSERVER,
            payload: json.data,
            networkRequest: true,
          });
        } else {
          dispatch({
            type: actionTypes.CURRENTUSER,
            payload: json.data,
            networkRequest: true,
          });
        }
      })
      .catch(e => console.log(e, 'from action'));
  };
};

const addNumber = info => {
  return dispatch => {
    dispatch({
      type: actionTypes.CURRENTUSER,
      payload: info,
    });
  };
};

const verifyUser = info => {
  return dispatch => {
    dispatch({
      type: actionTypes.VERIFYUSER,
      verifiedUser: info.verifiedUser,
    });
  };
};

const onUserLogout = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.LOGOUTUSER,
    });
  };
};

export {onUserRegister, onUserLogin, addNumber, verifyUser, onUserLogout};
