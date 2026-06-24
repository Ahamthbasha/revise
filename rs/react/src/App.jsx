import React from 'react'
import Hoc from './components/Hoc'
import RenderProps from './components/RenderProps'
import Todo from './components/Todo'
import RProps from './components/RProps'
import Render from './components/Render'

const App = () => {
  return (
    <div>
      {/* <Hoc/> */}
      {/* <RenderProps/> */}
      {/* <Todo/> */}
      {/* <RProps/> */}
      <Render/>
    </div>
  )
}

export default App


// import React from 'react'
// import { BrowserRouter,Routes,Route, Link } from 'react-router-dom'
// import Home from './router/Home'
// import Detail from './router/Detail'
// import ContactDetail from './router/ContactDetail'
// import ProductDetail from './router/ProductDetail'
// import UserDetail from './router/UserDetail'

// const App = () => {
//   return (
//     <BrowserRouter>
//     <nav>
//       <Link to='/home'>Home</Link>
//     </nav>
//       <Routes>
//         <Route path='/home' element={<Home/>}/>
//         <Route path='/detail' element={<Detail/>}>
//         <Route path='contact' element={<ContactDetail/>}/>
//         <Route path='product' element={<ProductDetail/>}/>
//         </Route>

//         <Route path='/user/:userId' element={<UserDetail/>}/>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App


// import React from 'react'
// import Context from './context/Context'
// import Input from './context/Input'
// import Button from './context/Button'

// const App = () => {
//   return (
//     <div>
//       <Context>
//         <Input/>
//         <Button/>
//       </Context>
//     </div>
//   )
// }

// export default App
