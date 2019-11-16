import React from 'react'

import Demo from './ListShow'
import { SearchBar,  WingBlank } from 'antd-mobile';
// import JSONP from 'jsonp'
// //封装jonsp为promise对象
// function jsonp(url,opts={}) {
//   return new Promise((resolve,reject)=>{
//       JSONP(url,opts, (err,data)=> {
//           if (err) reject(err);
//           resolve(data);
//       })
//   })
// }

class SearchBarExample extends React.Component {
  constructor(){
     super()
    this.state = {
      val: '',
      arr:[],
      // index:-1
    };
  }
  // 搜索功能
  handleChange=async(e)=>{
    this.setState( {val:e.target.value} )
    
    // let {s}=await jsonp("http://m.maoyan.com/ajax/search?kw=vds&cityId=55&stype=-1"+this.state.val,{param:'cb'})
    // let URL= "http://m.maoyan.com/ajax/search?kw=vds&cityId=55&stype=-1"
    let URL= "http://catfront.dianping.com/batch?v=1&sdk=1.7.20"
    this.setState( {arr:URL} )
  }
  // 回车键触发
  handleKeyDown=(e)=>{
    if(e.keyCode===13){
      // window.open("http://m.maoyan.com/ajax/search?kw=vds&cityId=55&stype=-1"+this.state.val,'_blank')
      window.open("http://catfront.dianping.com/batch?v=1&sdk=1.7.20"+this.state.val,'_blank')
      
      // this.refs.input.focus()
    }
  }
  // 生命周期，在组件加载完成后，让input聚焦(focus)
  // componentDidMount(){
  //   this.refs.input.focus()
  // }
 
  // handleInput(e){//用户在输入输入框时触发的状态
  //   this.setState({
  //     val:e.target.value
  //   })
  // }
  handleMouseEnter=(key,item,event)=>{
    this.setState({ index:key,val:item })
    // this.refs.input.focus()
  }
  // handleClick=()=>{
  //   window.open("http://m.maoyan.com/ajax/search?kw=vds&cityId=55&stype=-1"+this.state.val,'_blank')
  //   // this.refs.input.focus()
  // }


  render() {
    return <div>
      <WingBlank><div className="sub-title" value={this.state.value} onChange={this.handleChange.bind(this)} onKeyDown={this.handleKeyDown.bind(this)}>猫眼电影</div></WingBlank>
    
      <SearchBar
       
        placeholder="电影/影院/音乐剧/"
        onSubmit={value => console.log(value, 'onSubmit')}
        onClear={value => console.log(value, 'onClear')}
        onFocus={() => console.log('onFocus')}
        onBlur={() => 
          window.open("http://catfront.dianping.com/batch?v=1&sdk=1.7.20"+this.state.val,'_blank'),
          console.log('onBlur')}
        // onCancel={() => console.log('onCancel')}
        showCancelButton
        onChange={this.onChange}
      /> <Demo/>
    </div>
  }
}

// ReactDOM.render(<SearchBarExample />, mountNode);

export default SearchBarExample