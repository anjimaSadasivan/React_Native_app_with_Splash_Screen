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
      'https://mocki.io/v1/1241c9c8-6acc-4a93-9f42-3d6c67961286',
    );
    yield put({type: FETCH_DATA_SUCCESS, payload: response.data});
  } catch (error) {
    yield put({type: FETCH_DATA_FAILURE, error});
  }
}

export function* watchFetchData() {
  yield takeLatest(FETCH_DATA_REQUEST, fetchDataSaga);
}
