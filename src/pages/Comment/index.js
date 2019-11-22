import React from "react"
import Detail from "./Detail"
import Comments from "./Comment"

class Comment extends React.Component {
        render(){
            return (
                <div>
                    {/* 空白处后期删除 */}
                    <Detail  {...this.props} />
                    <Comments {...this.props} />
                </div>
            )
        }
}

export default Comment