import { Textarea, Stack } from '@mantine/core'
import { useSearchStore } from '@/stores'

export const Movies = () => {
	const items = useSearchStore(state => state.data?.movies)
	return (
		<Stack>
			{items?.map(({ overview, title, id }) => {
				return (
					<Textarea
						key={id}
						autosize
						defaultValue={`${title}
${overview}`}
					/>
				)
			})}
		</Stack>
	)
}
