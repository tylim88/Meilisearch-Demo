import { Container, Title, Flex } from '@mantine/core'
import { SearchBar, Movies } from './component'

export const App = () => {
	return (
		<Container h="100%">
			<Title py="xl" style={{ fontSize: '64px' }} order={1} pb={0}>
				MeiliSearch Demo
			</Title>
			<Title py="xl" style={{ fontSize: '32px' }} order={2}>
				Search Your Movies
			</Title>
			<Flex justify="center" w="100%" mb="lg">
				<SearchBar />
			</Flex>
			<Movies />
		</Container>
	)
}
