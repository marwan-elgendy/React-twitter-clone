export const SET_USER_ID = 'SET_USER_ID'

export  function setAuthedUser(id){
    return{
        type: SET_USER_ID,
        id
    }
}