import { SHOW_USERS }  from '../actions'

const initialState = {
  list: []
}

export function showUsers(state = initialState, action) {

  switch (action.type) {
    case SHOW_USERS:
      return Object.assing({}, state, {list: action.payload})
    default:
      return state

  }

}
