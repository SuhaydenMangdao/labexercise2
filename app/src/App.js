import {BrowserRouter,  Routes, Route} from 'react-router-dom'
import Users from './components/Users'
import CreateUser from './components/CreateUser.js'
import UpdateUser from './components/UpdateUser'
/*<Route path='/create' element={<CreateUser />}></Route>*/

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Users />}></Route>
                <Route path='/create' element={<CreateUser />}></Route>
                <Route path='/edit/:id' element={<UpdateUser />}></Route>
                
                
            </Routes>
        </BrowserRouter>
    )
}

export default App
