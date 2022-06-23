import {Routes , Route} from 'react-router-dom'
import { Evento } from './pages/Evento'

export function Router(){
  return(
    <Routes>
      <Route path="/event/lesson/:slug" element={<Evento/>}/>
      <Route path="/event" element={<Evento/>}/>
    </Routes>
  )
}