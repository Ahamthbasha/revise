// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { decrement, increment, reset } from '../redux/actions/counterActions'

// const Counter = () => {
//     const {count} = useSelector((state)=>state.count)

//     const dispatch = useDispatch()

    
//   return (
//     <div>
//     <h1>Count is : {count}</h1>
//     <button onClick={()=>dispatch(increment())}>Increment</button>
//     <button onClick={()=>dispatch(decrement())}>Decrement</button>
//     <button onClick={()=>dispatch(reset())}>Reset</button>  
//     </div>
//   )
// }

// export default Counter


import React from 'react'
import { decrement, increment, reset } from '../redux/actions/counterActions'
import { connect } from 'react-redux'
import { buyCake, restockCake } from '../redux/actions/cakeActions'

const Counter = (props) => {
  return (
    props.item == 'count' ? 

   ( <div>
      <h1>Item is : {props.item} Count is : {props.count}</h1>
      <button onClick={props.inc}>Increment</button>
      <button onClick={props.dec}>Decrement</button>
      <button onClick={props.res}>Reset</button>
    </div>) : 

    (<div>
    <h1>Item is : {props.item} Count is :{props.count}</h1>
    <button onClick={props.restock}>Restock</button>
    <button onClick={props.buy}>Buy</button>
    </div>)
    
  )
}

const mapStateToProps = (state,ownProps)=>{
    const item = ownProps.Cake ? 'cake' : 'count'
    const count = ownProps.Cake ? state.cake.cake : state.count.count
    return{
        item:item,
        count:count
    }
}

const mapDispatchToProps = (dispatch,ownProps)=>{
    return ownProps.Cake ? {restock:()=>dispatch(restockCake()),buy:()=>dispatch(buyCake())} : {inc:()=>dispatch(increment()),dec:()=>dispatch(decrement()),res:()=>dispatch(reset())}
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)
