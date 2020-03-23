const INITIAL_STATE = {
	description: '',
	list: [
		{
			_id: 1,
			description: 'Pagar fatura do cartao',
			done: true
		},
		{
			_id: 2,
			description: 'Reuniao com equipe UX',
			done: false
		},
		{
			_id: 3,
			description: 'Consulta medica',
			done: false
		}
	]
}

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case 'DESCRIPTION_CHANGED':
			return { ...state, description: action.payload }
		default:
			return state
	}
}