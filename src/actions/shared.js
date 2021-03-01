import {getInitialData} from '../utils/api'
import {receiveUsers} from '../actions/users'
import {receiveTweets} from '../actions/tweets'
import {setAuthedUser} from '../actions/authedUser'
import {showLoading, hideLoading} from 'react-redux-loading'

const AUTHED_ID = 'dan_abramov'

export function handleInitialData(){
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then((data) => {
                dispatch(receiveTweets(data.tweets))
                dispatch(receiveUsers(data.users))
                dispatch(setAuthedUser(AUTHED_ID))
                dispatch(hideLoading())
            })
    }
}