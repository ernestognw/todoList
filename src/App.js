import React, { Component } from 'react';
import Button from './button/button';
import Input from './input/input';
import Box from './box/box';
import Task from './task/task';
import Adder from './adder/adder';

class App extends Component {
  state = {
    input: '',
    tasks: [
      {
        nombre: 'Hacer tarea',
        tiempo: '1 día',
      },
      {
        nombre: 'Hacer mocku nigths',
        tiempo: 'Hoy',
      },
      {
        nombre: 'Dar tour',
        tiempo: 'Ayer',
      },
      {
        nombre: 'Ir por un café',
        tiempo: '2 días',
      },
    ]
  }

  saludar = () => {
    alert('Hola mundo!')
  }

  cambiarValor = (event) => {
    this.setState({
      ...this.state,
      input: event.target.value
    })
  }

  add = () => {
    let tasks = this.state.tasks;
    tasks.push({
      'nombre': 'Una nueva task',
      tiempo: 'Indefinido'
    })
    this.setState({
      ...this.state,
      tasks,
    })
  }

  render() {
    return(
      <div>
        <h1>Hola mundo!</h1>
        <Button 
          saludo={this.saludar}
        />
        <Input
          change={this.cambiarValor}
         />
        <Box
          value={this.state.input}
        />
        {
          this.state.tasks.map((task) => {
            return (
              <Task
                value={task.nombre}
                time={task.tiempo}
              />
            )
          })
        }
      <Adder 
        add={this.add}
      />

      </div>
    )
  }
}

export default App;