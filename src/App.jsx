import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

import { Login, Cites } from './pages'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route>
				<Route path='/' element={<Login />} />
					<Route path='/login' element={<Login />} />
					<Route path='/cites' element={<Cites />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
export default App
