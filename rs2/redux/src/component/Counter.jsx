// import React  from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { decrement, increment, reset } from '../redux/actions/counterAction'

// const Counter = () => {
//     const {count} = useSelector((state)=>state.count)

//     const dispatch = useDispatch()

//     const increase = ()=>{
//         dispatch(increment())
//     }

//     const decrease = ()=>{
//         dispatch(decrement())
//     }

//     const BackToZero = ()=>{
//         dispatch(reset())
//     }

//   return (
//     <div>
//     <h1>Count is :{count}</h1>
//     <button onClick={increase}>increase</button>
//     <button onClick={decrease}>Decrease</button>
//     <button onClick={BackToZero}>Reset</button>
//     </div>
//   )
// }

// export default Counter

// by using connect

// import React from 'react'
// import { decrement, increment, reset } from '../redux/actions/counterAction'
// import { connect } from 'react-redux'

// const Counter = (props) => {
//     console.log(props.count.count)
//   return (
//     <div>
//       <h1>Count is : {props.count.count} </h1>
//       <button onClick={props.increase}>Increase</button>
//       <button onClick={props.decrease}>Decrese</button>
//       <button onClick={props.backToZero}>Reset</button>
//     </div>
//   )
// }

// const mapStateToProps = (state)=>{
//     return {
//         count:state.count
//     }
// }

// const mapDispatchToProps = (dispatch)=>{
//     return{
//         increase:()=>{dispatch(increment())},
//         decrease:()=>dispatch(decrement()),
//         backToZero:()=>dispatch(reset())
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Counter)

//Component with Own Props

import React from "react";
import { buy, restock } from "../redux/actions/CakeActions";
import { decrement, increment, reset } from "../redux/actions/counterAction";
import { connect } from "react-redux";

const Counter = (props) => {
  return props.Cake ? (<div>
    <h1>Item Name is : {props.item}</h1>
    <h1>Item Count is : {props.itemCount.cake}</h1>
    <button onClick={props.increaseStock}>Increase cake count</button>
    <button onClick={props.decreaseStock}>down cake count</button>
  </div>) : (<div>
    <h1>Item Name is : {props.item}</h1>
    <h1>Item Count is : {props.itemCount.count}</h1>
    <button onClick={props.increase}>Increase</button>
    <button onClick={props.decrease}>Decrease</button>
    <button onClick={props.backToZero}>Reset</button>
  </div>);
};

const mapStateToProps = (state, ownProps) => {
  const curitem = ownProps.Cake ? "cake" : "counter";
  const curCount = ownProps.Cake ? state.cake : state.count;
  return {
    item:curitem,
    itemCount:curCount,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ownProps.Cake
    ? {
        increaseStock: () => dispatch(restock()),
        decreaseStock: () => dispatch(buy()),
      }
    : {
        increase: () => dispatch(increment()),
        decrease: () => dispatch(decrement()),
        backToZero: () => dispatch(reset()),
      };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
