import React, {useEffect, useState} from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css'

import api from './services/api'

//Componente: função que retorna um HTML,CSS ou/e JS, não interfere na execução do restante da aplicação
//Estado: informações mantidas pelo componentes
//Propriedade: informações/atributos que um componente PAI  passa para um componente filho



function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [github_username, setGithub_username] = useState('');
  const [techs, setTechs] = useState('');


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
      
  }



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
            <li className="dev-item">
                <header>
                  <img src="https://avatars1.githubusercontent.com/u/39017457?s=400&u=12665826e41e2256ba2d61c9c1a941009c832496&v=4" alt="Brener Quevedo"/>
                  <div className="user-info">
                    <strong>Brener Quevedo</strong>
                    <span>React, Node, Mongo</span>
                  </div>
                </header>
              
                <p>biografia de teste</p>
                <a href="https://github.com/BrenerQuevedo">Acessar perfil no github</a>
            </li>
            <li className="dev-item">
                <header>
                  <img src="https://avatars1.githubusercontent.com/u/39017457?s=400&u=12665826e41e2256ba2d61c9c1a941009c832496&v=4" alt="Brener Quevedo"/>
                  <div className="user-info">
                    <strong>Brener Quevedo</strong>
                    <span>React, Node, Mongo</span>
                  </div>
                </header>
              
                <p>biografia de teste</p>
                <a href="https://github.com/BrenerQuevedo">Acessar perfil no github</a>
            </li>
            <li className="dev-item">
                <header>
                  <img src="https://avatars1.githubusercontent.com/u/39017457?s=400&u=12665826e41e2256ba2d61c9c1a941009c832496&v=4" alt="Brener Quevedo"/>
                  <div className="user-info">
                    <strong>Brener Quevedo</strong>
                    <span>React, Node, Mongo</span>
                  </div>
                </header>
              
                <p>biografia de teste</p>
                <a href="https://github.com/BrenerQuevedo">Acessar perfil no github</a>
            </li>
            <li className="dev-item">
                <header>
                  <img src="https://avatars1.githubusercontent.com/u/39017457?s=400&u=12665826e41e2256ba2d61c9c1a941009c832496&v=4" alt="Brener Quevedo"/>
                  <div className="user-info">
                    <strong>Brener Quevedo</strong>
                    <span>React, Node, Mongo</span>
                  </div>
                </header>
              
                <p>biografia de teste</p>
                <a href="https://github.com/BrenerQuevedo">Acessar perfil no github</a>
            </li>
          </ul>
        </main>
      </div>
    );
}

export default App;
