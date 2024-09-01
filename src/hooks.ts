import { useWindowWidth } from '@react-hook/window-size'
import { DEFAULT_THEME, em } from '@mantine/core'

export const useIsSmallestBreakpoint = () => {
	const width = useWindowWidth()
	return em(width) < DEFAULT_THEME.breakpoints.xs
}
