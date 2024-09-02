import { persistent } from './utils'
import { url } from '@/config'
import { initClient, initContract } from '@ts-rest/core'
import { z } from 'zod'

export const c = initContract()

const movieSchema = z.object({
	time: z.number(),
	movies: z.array(
		z.object({
			id: z.number().min(0),
			title: z.string(),
			overview: z.string(),
			genres: z.array(z.string()),
			poster: z.string(),
			release_date: z.number(),
		})
	),
})

export const getMovies = {
	method: 'GET',
	path: '/getMovies',
	query: z.object({
		query: z.string(),
	}),
	contentType: 'application/json',
	responses: {
		200: movieSchema,
		401: z.object({
			message: z.string(),
		}),
		500: z.object({
			message: z.string(),
		}),
	},
} as const

export const client = initClient(
	c.router({
		getMovies,
	}),
	{
		baseUrl: url,
		baseHeaders: {
			'x-app-source': 'ts-rest',
		},
	}
)
const initialState = {
	status: 'idle',
	data: null,
} as const

type Data = {
	time: number
	movies: {
		id: number
		title: string
		overview: string
		genres: string[]
		poster: string
		release_date: number
	}[]
}

export const useSearchStore = persistent<{
	search: (props: { query: string }) => void
	status: 'idle' | 'loading' | 'done' | 'error'
	data: Data | null
}>(
	{
		name: 'search',
		keysToPersist: [],
	},
	set => {
		return {
			...initialState,
			reset: () => {
				set({ ...initialState })
			},
			search: async ({ query }) => {
				if (!query) return
				set({ status: 'loading' })
				try {
					const data = await client.getMovies({ query: { query } })
					if (data.status !== 200) {
						throw 'something is wrong'
					}
					set({ data: data.body, status: 'done' })
				} catch (e) {
					set({ status: 'error' })
					console.error(e)
				}
			},
		}
	}
)
