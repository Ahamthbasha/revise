import React from 'react'
import Counter from './components/Counter'
import UseEffect from './components/UseEffect'
import UseRef from './components/UseRef'
import ParentToChild from './components/ParentToChild'
import ChildToParent from './components/ChildToParent'
import ForwardRef from './components/ForwardRef'
import CustomHook from './components/CustomHook'
import ConditionalRender from './components/ConditionalRender'
import Hoc from './components/Hoc'
import UseMemo from './components/UseMemo'
import UseCallbackReactMemo from './components/UseCallbackReactMemo'
import UseReducer from './components/UseReducer'
import Context from './context/Context'
import Input from './context/Input'
import Button from './context/Button'
import { lazy } from 'react'
import { Suspense } from 'react'
import Logical1 from './components/Logical1'
import PreventRightClick from './components/PreventRightClick'
import PreventEntireClick from './components/PreventEntireClick'
import Copy from './components/Copy'
import RenderProps from './components/RenderProps'

const Lazy = lazy(()=>import('./components/LazyComponent'))

const App = () => {
  return (
    <div>
      {/* <Counter/> */}
      {/* <UseEffect/> */}
      {/* <UseRef/> */}
      {/* <ParentToChild/> */}
      {/* <ChildToParent/> */}
      {/* <ForwardRef/> */}
      {/* <CustomHook/> */}
      {/* <ConditionalRender/> */}
      {/* <Hoc/> */}
      {/* <UseMemo/> */}
      {/* <UseCallbackReactMemo/> */}
      {/* <UseReducer/> */}

      {/* <Context>
        <Input/>
        <Button/>
      </Context> */}

      {/* <Suspense fallback={<p>Loading...</p>}>
        <Lazy/>
      </Suspense> */}

      {/* <Logical1/> */}
      {/* <PreventRightClick/> */}
      {/* <PreventEntireClick /> */}
      {/* <Copy/> */}
      <RenderProps/>
    </div>
  )
}

export default App


// import React from 'react'
// import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
// import Home from './RouteComponent/Home'
// import Detail from './RouteComponent/Detail'
// import ContactDetail from './RouteComponent/ContactDetail'
// import ProductDetail from './RouteComponent/ProductDetail'
// import UserDetail from './RouteComponent/UserDetail'

// const App = () => {
//   return (
//     <BrowserRouter>
//     <nav>
//       <Link to='/home'>Home</Link>
//     </nav>
//       <Routes>
//         <Route path='/home' element={<Home/>}/>
//         <Route path='/details' element={<Detail/>}>
//         <Route path='contactDetail' element={<ContactDetail/>}/>
//         <Route path='productDetail' element={<ProductDetail/>}/>
//         </Route>
//         <Route path='/user/:userId' element={<UserDetail/>}/>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App
