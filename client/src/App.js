import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import Counter from './components/Counter'
import Menu from './components/Navbar'
import {Container} from '@mui/material'

export default function App() {
  return (  
    <BrowserRouter>
    <Menu/>
      <Container>
        <Routes>
        <Route path='/' element={<TaskList/>}/>
        <Route path='/tasks/new' element={<TaskForm/>}/>
        <Route path='/tasks/:id/edit' element={<TaskForm/>}/>
        <Route path='/tasks/counter' element={<Counter initialCount={0}/>}/>
        </Routes>
      </Container>
    </BrowserRouter>    
  )
}
