import { useState } from 'react';

import logoImg from '../assets/logo.png'
import Input from '../components/Input/index';
import ItemRepo from '../components/Item/index';
import ButtonSearch from '../components/Button/index';

import { api } from '../services/api'


import { Container } from './styles';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);


  const handleSearch = async () => {

    const {data} = await api.get(`repos/${currentRepo}`)

    if(data.id){
      const isExist = repos.find(repos => repos.id == data.id)

      if(!isExist){
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
        return
      }
    }
  }

  //1-Criei a funcao para handle o remove que recebe o id exato do positorio que deve ser excluido
  const handleRemoveRepos = (id) => {
    console.log('Removendo registro', id)

    //6- criei uma arrow função chamada removeId
    //7-Usei o filter no repos (array que guarda os repositorios) para encontrar o id que desejo eliminar
    //8
    const removeId = repos.filter((repId) => {
      
      if(id != repId.id){
        return {
          ...repos
        }
      }
    })
    
    setRepos(removeId);
    
    //2- passei a funcao como parametro para poder chegar ate o <a> que faz o remove
  }

  return (
    <Container>
      <img src={logoImg} width={72} height={72} alt='github logo'/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <ButtonSearch onClick={handleSearch}/>

      
      {repos.map(repos => <ItemRepo handleRemoveRepos={handleRemoveRepos} repos={repos}/>)}
      
    </Container>
  );
}

export default App;
