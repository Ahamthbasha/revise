// // import React from 'react'
// // import Hoc from './Component/Hoc'
// // import RenderProps from './Component/RenderProps'

// // const App = () => {
// //   return (
// //     <div>
// //       {/* <Hoc/> */}
// //       {/* <RenderProps/> */}
// //     </div>
// //   )
// // }

// // export default App


// import React from 'react'
// import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
// import Home from './Router/Home'
// import Detail from './Router/Detail'
// import ContactDetail from './Router/ContactDetail'
// import ProductDetail from './Router/ProductDetail'
// import UserDetail from './Router/UserDetail'
// const App = () => {
  
//   return (
//     <BrowserRouter>
//     <nav>
//       <Link to='/home'>Home</Link>
//     </nav>
//       <Routes>
//         <Route path='/home' element={<Home/>}/>
//         <Route path='/detail' element={<Detail/>}>
//         <Route path='contactDetail' element={<ContactDetail/>}/>
//         <Route path='productDetail' element={<ProductDetail/>}/>
//         </Route>
//         <Route path='/user/:userId' element={<UserDetail/>}/>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App


import React from 'react'
import ContextCreate from './context/ContextCreate'
import Input from './context/Input'
import Button from './context/Button'
import Logic from './Component/Logic'

const App = () => {
  return (
    // <ContextCreate>
    //   <Input/>
    //   <Button/>
    // </ContextCreate>

    <Logic/>
  )
}

export default App
