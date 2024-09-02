import { persistent } from './utils'
import axios from 'axios'
import { url } from '@/config'

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
					const data = await axios
						.get<Data>(`${url}/getMovies?query=${query}`, {
							headers: {
								Accept: 'application/json',
								'Content-Type': 'application/json',
							},
						})
						.then(res => {
							return res.data
						})
					set({ data })
					set({ status: 'done' })
				} catch (e) {
					set({ status: 'error' })
					console.error(e)
				}
			},
		}
	}
)
