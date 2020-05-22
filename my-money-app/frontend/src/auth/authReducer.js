const _userKey = "_mymoney_user"
const INITIAL_STATE = {
	user: JSON.parse(localStorage.getItem(_userKey)),
	validToken: false
}

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case 'TOKEN_VALIDATED':
			if (action.payload) {
				return { ...state, validToken: true }
			} else {
				localStorage.removeItem(_userKey)
				return { ...state, validToken: false, user: null }
			}
		case 'USER_FETCHED':
			localStorage.setItem(_userKey, JSON.stringify(action.payload))
			return { ...state, user: action.payload, validToken: true }
		default:
			return state
	}
}