import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { Login, Register } from './pages'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route>
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
					<Route path='/' element={<Login />} />
					<Route path='/*' element={<Navigate to='/'/>} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
export default App
