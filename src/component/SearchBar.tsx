import { TextInput, Flex, Stack, Text, Button } from '@mantine/core'
import { IconSearch, IconBrandGithub } from '@tabler/icons-react'
import { useSearchStore } from '@/stores'
import perttyms from 'pretty-ms'

export const SearchBar = () => {
	const length = useSearchStore(state => state.data?.movies.length)
	const time = useSearchStore(state => state.data?.time)
	return (
		<Stack maw="25rem" w="100%" gap="xs">
			<Flex justify="center" w="100%">
				<Text size="sm" fs="italic">
					The current limit is 1000 results per query
				</Text>
			</Flex>
			<TextInput
				leftSection={<IconSearch style={{ width: '16px', height: '16px' }} />}
				placeholder="Search Your Movies"
				w="100%"
				onChange={event => {
					useSearchStore.getState().search({ query: event.currentTarget.value })
				}}
			/>
			<Flex justify="center" w="100%">
				<Text size="md">
					{length && time ? `${length} results in ${perttyms(time)}` : ''}&nbsp;
				</Text>
			</Flex>
			<Flex justify="center" w="100%">
				<Button leftSection={<IconBrandGithub />} bg="black">
					Source Code
				</Button>
			</Flex>
		</Stack>
	)
}
