import '@mantine/core/styles.css' // https://mantine.dev/styles/mantine-styles/#styles-import-order
import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import './main.css'
import { THEME } from './theme'
import { App } from './App'
// if ('serviceWorker' in navigator) {
// 	navigator.serviceWorker.register('./sw.js').catch(error => {
// 		console.error('Service Worker registration failed:', error)
// 	})
// }

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<MantineProvider theme={THEME}>
			<App />
		</MantineProvider>
	</React.StrictMode>
)
