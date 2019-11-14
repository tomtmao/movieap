import React from 'react';
import Test from './Test';
import './app.css'

@decr
class App extends React.Component {
  render() { 
    return (
      <div className="App">
        <Test/>
        <p className='test'>123</p>
      </div>
    );
  }
}

//装饰器模式测试文件
function decr(){
  console.log('开启装饰器');
  
}

export default App;
