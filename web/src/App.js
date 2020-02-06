import React, {useEffect, useState} from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css'

import api from './services/api'
import DevItem from './components/DevItem';

//Componente: função que retorna um HTML,CSS ou/e JS, não interfere na execução do restante da aplicação
//Estado: informações mantidas pelo componentes
//Propriedade: informações/atributos que um componente PAI  passa para um componente filho



function App() {
  const [devs, setDevs] = useState([]);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [github_username, setGithub_username] = useState('');
  const [techs, setTechs] = useState('');


  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }  
    loadDevs();
  },[]);

  useEffect(()=> {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;
         
        setLatitude(latitude);
         setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);


  async function handleSubmit(e) {
      e.preventDefault();

      const response = await api.post('/devs', {
        github_username,
        techs,
        latitude,
        longitude,
      })

      setGithub_username('');
      setTechs('');
      
      setDevs([...devs, response.data]);
  }

  return (
      <div id="app">
        <aside>
          <strong>Cadastrar</strong>

            <form onSubmit={handleSubmit}>
              <div className="input-block">
                <label htmlFor="github_username">Usuário Github</label>
                <input 
                  name="github_username" 
                  id="github_username"
                  required
                  value = {github_username}
                  onChange = {e => setGithub_username(e.target.value)}
                  />
              </div>
              
              <div className="input-block">
                <label htmlFor="techs">Tecnologias</label>
                <input 
                  name="techs" 
                  id="techs" 
                  required
                  value ={techs}
                  onChange = {e => setTechs(e.target.value)}
                  />
              </div>

              <div className="input-group">
                
                <div className="input-block">
                  <label htmlFor="latitude">Latitude</label>
                  <input 
                    type='number'
                    name="latitude" 
                    id="latitude" 
                    required 
                    value={latitude}
                    onChange = {e => setLatitude(e.target.value)}
                    />
                </div>

                <div className="input-block">
                  <label htmlFor="longitude">longitude</label>
                  <input
                  type='number' 
                  name="longitude"
                  id="longitude"
                  required 
                  value={longitude}
                  onChange = {e => setLongitude(e.target.value)} 
                  />
                </div>

              </div>

              <button type="submit">Salvar</button>

            </form>

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
