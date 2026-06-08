import React from 'react'
import { buyCake } from '../store/actions/cakeAction'
import { connect } from 'react-redux'
import { decrease } from '../store/actions/counterActions'

const ComponentWithMap = (props) => {
  return (
    <div>
      <h1>Cake Count:{props.count}</h1>
      <h2>item:{props.componentName}</h2>
      <button onClick={props.down}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = (state,ownProps)=>{
    const propItem = ownProps.Count ? 'count' : 'cake'
    const count = ownProps.Count ? state.count.count : state.cake.cake
    return {
        componentName : propItem,
        count : count
    }
}

const mapDispatchToProps = (dispatch,ownProps)=>{
    const d = ownProps.Count ? decrease : buyCake
    return {
        down:()=>dispatch(d())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ComponentWithMap)
