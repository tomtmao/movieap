import React from "react"
import { connect } from "react-redux"

const stateProps = (state) => {
return{
    cmtArr:state.comments
}
}

const dispatchProps = dispatch => {
    return {
        getList(){
            dispatch()
        }
    }
}
class Comment extends React.Component{
    constructor(props){
        super(props)
        this.state = {
         cmtArr:[]
        }
    }
    componentDidMount(){

    }
    render(){
        return (
            <div>
                <h1>hahaha</h1>
            </div>
        )
    }
}

export default Comment