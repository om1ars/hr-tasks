import { all } from 'redux-saga/effects'

import { taskSaga } from './taskSaga'
import { userSaga } from './userSaga'

function* rootSaga() {
    yield all([
        userSaga()
    ])
}

export default rootSaga