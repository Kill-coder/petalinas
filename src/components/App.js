//Components
import {LoadPAge} from '../components/LoadPage'
import {Home} from '../components/Home'
import {NotFound} from '../components/error404/NotFound'
//Routes
import {BrowserRouter , Routes , Route } from 'react-router-dom'



export function App () {
    return(
        <BrowserRouter>
             <Routes>
                <Route path='/' element={<LoadPAge/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='*' element={<NotFound/>}/>
             </Routes>
        </BrowserRouter>
    );
}


export default {App};