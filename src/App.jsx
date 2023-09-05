import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { Home, Login, Register,Profile,Users} from './pages'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route>
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
					<Route path='/' element={<Login />} />
					<Route path='/home' element={<Home />} />
					<Route path='/profile' element={<Profile/>} />
					<Route path='/users' element={<Users/>} />
					<Route path='/*' element={<Navigate to='/'/>} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
export default App
