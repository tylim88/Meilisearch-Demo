import { TextInput, Flex, Stack, Text, ActionIcon } from '@mantine/core'
import { IconSearch, IconBrandGithub } from '@tabler/icons-react'
import { useSearchStore } from '@/stores'
import { useState } from 'react'
import perttyms from 'pretty-ms'

export const SearchBar = () => {
	const length = useSearchStore(state => state.data?.movies.length)
	const time = useSearchStore(state => state.data?.time)
	const status = useSearchStore(state => state.status)
	const [value, setValue] = useState('')
	const search = () => {
		useSearchStore.getState().search({ query: value })
	}
	return (
		<Stack maw="25rem" w="100%" gap="xs">
			<Text size="sm" fs="italic">
				The current limit is 1000 results per query
			</Text>
			<Text size="sm" fs="italic">
				Fuzzy search and typo tolerance
			</Text>
			<TextInput
				onKeyDown={e => {
					if (e.key === 'Enter') {
						search()
					}
				}}
				disabled={status === 'loading'}
				value={value}
				placeholder="Try shrek, shrak, superman, suparman, supar man, etc"
				w="100%"
				onChange={event => {
					setValue(event.currentTarget.value)
				}}
				rightSection={
					<ActionIcon onClick={search}>
						<IconSearch style={{ width: '16px', height: '16px' }} />
					</ActionIcon>
				}
			/>
			<Text size="md" ta="end">
				{status === 'loading'
					? 'loading...'
					: length !== undefined && time
						? `${length} results in ${perttyms(time)}`
						: ''}
				&nbsp;
			</Text>
			<Flex justify="center" w="100%">
				<ActionIcon
					size="xl"
					bg="black"
					component="a"
					href="https://github.com/tylim88/Meilisearch-Demo"
					target="_blank"
				>
					<IconBrandGithub />
				</ActionIcon>
			</Flex>
		</Stack>
	)
}
