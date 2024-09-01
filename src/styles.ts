import { DEFAULT_THEME } from '@mantine/core'

const bgColor = `245,245,245`
export const glass = {
	background: `rgba(${bgColor}, 0.75)`,
	boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
	backdropFilter: 'blur(30px)',
	border: `1px solid rgba(${bgColor}, 0.3)`,
} as const

export const content = {
	...glass,
	borderRadius: DEFAULT_THEME.radius.md,
} as const

export const textColor = '#EFEEF3'
