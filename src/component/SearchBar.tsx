import { TextInput, Flex, Stack, Text, Button } from '@mantine/core'
import { IconSearch, IconBrandGithub } from '@tabler/icons-react'
import { useSearchStore } from '@/stores'
import perttyms from 'pretty-ms'

export const SearchBar = () => {
	const length = useSearchStore(state => state.data?.movies.length)
	const time = useSearchStore(state => state.data?.time)
	return (
		<Stack maw="25rem" w="100%" gap="xs">
			<Text size="sm" fs="italic">
				The current limit is 1000 results per query
			</Text>
			<Text size="sm" fs="italic">
				Fuzzy search and typo tolerance
			</Text>
			<TextInput
				leftSection={<IconSearch style={{ width: '16px', height: '16px' }} />}
				placeholder="Try shrek, shrak, superman, suparman"
				w="100%"
				onChange={event => {
					useSearchStore.getState().search({ query: event.currentTarget.value })
				}}
			/>
			<Text size="md" ta="end">
				{length && time ? `${length} results in ${perttyms(time)}` : ''}&nbsp;
			</Text>
			<Flex justify="center" w="100%">
				<Button
					leftSection={<IconBrandGithub />}
					bg="black"
					component="a"
					href="https://github.com/tylim88/Meilisearch-Demo"
					target="_blank"
				>
					Source Code
				</Button>
			</Flex>
		</Stack>
	)
}
