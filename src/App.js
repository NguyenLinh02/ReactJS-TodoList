import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';
import tick from '../src/img/tick.svg';
import Filter from './components/Filter';

//do dữ liệu nằm bên app nên qua đây gán sự kiện
class App extends React.Component {
  constructor() {
    super();
    //newitem: reset 
    this.state = { newItem:'',filter: 'all', todoItems:[{title: 'Đi học', isComplete: true}, {title:'Đi đá bóng'}, {title:'Đi đổ xăng'}]};
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  };
  onItemClick(item){
    return (event) =>{
      const isComplete = item.isComplete;
      const {todoItems}  = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems:[
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      });
    };
  }
  ClickFilter(x) {
    this.setState({filter: x})
   }
  onKeyUp(event){
    //tìm code của nút enter
    //console.log(event.keyCode);
    //lấy giá trị khi nhập vào input
    let text = event.target.value;
    if(event.keyCode === 13){
    if(!text){
      return;
    }
    text = text.trim();//xóa dấu cách
    this.setState({
      newItem:'',
      todoItems: [
          {title: text, isComplete: false},
          ...this.state.todoItems
        ]
    })
  }
}
onChange(event){
  this.setState({
    newItem: event.target.value
  })
}

  render() {
    const {todoItems, newItem} =  this.state;
    let todos = []
    if(this.state.filter === 'all'){
      todos = todoItems;
      console.log(todos);
    } if(this.state.filter === 'active'){
      todos = todoItems.filter(todo => !todo.isComplete);
      console.log(todos);
    } if(this.state.filter === 'complete'){
      todos = todoItems.filter(todo => todo.isComplete)
      console.log(todos)
    }
    // let x = null
    //   x = (<div> {filter.map((fill, index) => 
    //        {return <Filter key={index} filter={fill.type} ClickFilter={this.ClickFilter(fill.type)}/>})}</div>)
        
      return (
      <div className="App">
        <div className="Header">
          <img src={tick} width={32} height={32}/>
          <input type="text" 
          placeholder="Add a new item"
          value={newItem}
          onChange={this.onChange}
           onKeyUp={this.onKeyUp}/>
        </div>
        {
          todos.map((item, index) => 
          <TodoItem 
          key={index} 
          item={item} 
          onClick={this.onItemClick(item)} />)
        }
        <button onClick={() => this.ClickFilter('all')}>All</button>
        <button onClick={() => this.ClickFilter('complete')}>complete</button>
        <button onClick={() => this.ClickFilter('active')}>active</button>
            
      </div>
  );
  
  }
}
export default App;

