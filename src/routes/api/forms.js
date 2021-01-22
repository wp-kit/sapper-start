import fetch from 'node-fetch';
import { apiCall } from '~/library/api'
import { getToken } from '~/library/auth'

// Get a Form

export async function get(req, res, next) {
	
	try {
	
		const token = getToken()
		
		const headers = {
			Authorization: 'Basic ' + token,
			"Content-Type": "application/json"
		}
		
		const { formId } = req.query
		
		const form = await apiCall('gf/v2/forms/' + formId, {}, {fetch}, {headers})
		
		res.setHeader('Content-Type', 'application/json');
			
		res.end(JSON.stringify(form))
	
	} catch(err) {
		
		res.statusCode = 400
		
		res.end(err.toString())
		
	}

}

// Submit a Form

export async function post(req, res, next) {
	
	try {
	
		const token = getToken()
		
		const headers = {
			Authorization: 'Basic ' + token,
			"Content-Type": "application/json"
		}
		
		const { data, formId } = req.body
		
		const entry = await apiCall('gf/v2/forms/' + formId + '/entries', {}, {fetch}, {
			headers, 
			method: 'POST', 
			body: JSON.stringify(data)
		})
		
		const notifications = await apiCall('gf/v2/entries/' + entry.id + '/notifications', {}, {fetch}, {
			headers, 
			method: 'POST'
		})
		
		res.setHeader('Content-Type', 'application/json');
			
		res.end(JSON.stringify({entry, notifications}))
	
	} catch(err) {
		
		res.statusCode = 400
		
		res.end(err.toString())
		
	}
	
}