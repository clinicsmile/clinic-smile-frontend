import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

import { Login, Cites } from './pages'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route>
					<Route path='/cites' element={<Cites />} />
					<Route path='/login' element={<Login />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
export default App
