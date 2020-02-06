import React, {useEffect, useState} from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css'

import api from './services/api'
import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

//Componente: função que retorna um HTML,CSS ou/e JS, não interfere na execução do restante da aplicação
//Estado: informações mantidas pelo componentes
//Propriedade: informações/atributos que um componente PAI  passa para um componente filho



function App() {
  const [devs, setDevs] = useState([]);
  
  

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }  
    loadDevs();
  },[]);


  async function handleSubmit(data) {

      const response = await api.post('/devs', data)
           
      setDevs([...devs, response.data]);
  }

  return (
      <div id="app">
        <aside>
          <strong>Cadastrar</strong>
          <DevForm onSubmit={handleSubmit} />
        </aside>
        
        <main>
          <ul>
            {devs.map(dev => (
             <DevItem dev={dev}/>
            ))}
          </ul>
        </main>
      </div>
    );
}

export default App;
