import React from 'react';
import { List } from 'antd-mobile';

const Item = List.Item;

const text = "Multiple line，long text will wrap；Long Text Long Text Long Text Long Text Long Text Long Text"

class Type extends React.Component {
    render() {
        if (this.props.flag) {
            return (
                <Item data-seed="logId">{text}</Item>
            )
        } else {
            return (
                <Item wrap>{text}</Item>
            )
        }
    }
}



class ListExample extends React.Component {
    state = {
        flag:true
    }
    handleClick() {
        this.setState({
            flag:!this.state.flag
        })
    }
    render() {
        return (
            <div>
                <List renderHeader={() => 'Text Wrapping'} className="my-list">
                    <div >
                        <Type flag={this.state.flag}/>>
                        <br />
                        <button onClick={this.handleClick.bind(this)}>
                            点击切换
                        </button>
                    </div>

                </List>

            </div>);
    }
}

export default ListExample