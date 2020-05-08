const express = require('express')


module.exports = function(server) {
	//Base URL
	const router = express.Router()
	server.use('/api', router)

	//Rotas para Ciclo de Pagamento

	const BillingCycle = require('../api/billingCycle/billingCycleService')
	BillingCycle.register(router, '/billingCycles')
}