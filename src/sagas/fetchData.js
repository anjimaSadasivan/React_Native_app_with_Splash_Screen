import axios from 'axios';
import {put, call, takeLatest} from 'redux-saga/effects';
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from '../actions/actions';

function* fetchDataSaga() {
  try {
    const response = yield call(
      axios.get,
      'https://mocki.io/v1/a64ba5b6-c2a1-46af-bf0f-f43eb9060eb9',
    );
    yield put({type: FETCH_DATA_SUCCESS, payload: response.data});
  } catch (error) {
    yield put({type: FETCH_DATA_FAILURE, error});
  }
}

export function* watchFetchData() {
  yield takeLatest(FETCH_DATA_REQUEST, fetchDataSaga);
}
