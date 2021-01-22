import fetch from 'node-fetch';
import { apiCall } from '~/library/api'
import { getToken } from '~/library/auth'

// Get a Post or Page (or CPT) by ID even if it's a draft

export async function get(req, res, next) {
	
	try {
	
		const token = getToken()
		
		const headers = {
			Authorization: 'Basic ' + token,
			"Content-Type": "application/json"
		}
		
		const { id, endpoint, _embed } = req.query
		
		const path = `${endpoint}/${id}`
		
		const post = await apiCall(path, {_embed}, {fetch}, {headers})

		res.setHeader('Content-Type', 'application/json');
			
		res.end(JSON.stringify(post))
	
	} catch(err) {
		
		res.statusCode = 400
		
		res.end(err.toString())
		
	}

}

// Submit a Comment

export async function post(req, res, next) {
	
	try {
	
		const token = getToken()
		
		const headers = {
			Authorization: 'Basic ' + token,
			"Content-Type": "application/json"
		}
		
		const params = req.body
		
		const comment = await apiCall('comments', {}, {fetch}, {headers, method: 'POST', body: JSON.stringify(params)})
		
		res.setHeader('Content-Type', 'application/json');
			
		res.end(JSON.stringify(comment))
	
	} catch(err) {
		
		res.statusCode = 400
		
		res.end(err.toString())
		
	}
	
}