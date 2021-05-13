import React, { Component } from 'react';
import './App.css';
import api from './api';

class App extends Component{

  state={
    filmes: [],
  }
  async componentDidMount(){
    const response = await api.get('superman');
    
    this.setState({filmes: response.data})
  }

  render(){
    const { filmes } = this.state;
    return(
      <div className='App'>
        <h1>Lista de Filmes</h1>
        {console.log('filmes listados',filmes)}
        <table className='tabela'> 
          <tr>
            <th><b> ID </b></th>
            <th><b> Name Film </b></th>
            <th><b> Release date </b></th>
            <th><b> Genres </b></th>
          </tr>
         {filmes.map(filme => (
          <tr>
            <td>{filme.show.id}</td>
            <td>{filme.show.name}</td>
            <td>{filme.show.premiered}</td>
            <td>{filme.show.genres[0]}</td>
          </tr>
       ))}
        </table>
      </div>
    )
  }
}

export default App;
