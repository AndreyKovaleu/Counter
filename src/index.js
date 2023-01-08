import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.counter
    }
  }
  
  nexValue = () => {
    if(this.state.value < 5) {
      this.setState(state => ({
        value: state.value + 1
      }))
    }
  }
  
  prevValue = () => {
    if(this.state.value > -5) {
      this.setState(state => ({
        value: state.value - 1
      }))
    }
  }

  randomValue = () => {
    this.setState({
      value: Math.floor(Math.random() * (50 - (-50))) + (-50)
    })
  }

  resetValue = () => {
    this.setState({
      value: this.props.counter
    })
  }

  render() {
    return (
      <div className="app">
        <div className="counter">{this.state.value}</div>
        <div className="controls">
          <button onClick={this.nexValue}>INC</button>
          <button onClick={this.prevValue}>DEC</button>
          <button onClick={this.randomValue}>RND</button>
          <button onClick={this.resetValue}>RESET</button>
        </div>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App counter={0}/>
  </React.StrictMode>
);

// + 1) Начальное значение счетчика должно передаваться через props
// + 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
// + 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
// + 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов