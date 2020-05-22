import axios from 'axios'
const BASE_URL = "http://localhost:3003"

export function getSummary() {
	const request = axios.get(`${BASE_URL}/api/billingCycles/summary`)

	return {
		type: "BILLING_SUMMARY_FETCHED",
		payload: request
	}
}