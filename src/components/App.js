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
                <Route path='https://kill-coder.github.io/petalinas' element={<LoadPAge/>}/>
                <Route path='https://kill-coder.github.io/petalinas/home' element={<Home/>}/>
                <Route path='*' element={<NotFound/>}/>
             </Routes>
        </BrowserRouter>
    );
}


export default {App};