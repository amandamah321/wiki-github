import React from "react";
import { FaGithub, FaTrash } from "react-icons/fa";
import { ItemContainer } from "./styles";

//3-pegando o valor passando la no app.js
function ItemRepo({ repos, handleRemoveRepos }) {
  //5- criei a funcao handleRemove e ela chama a funcao handlerRemoveRepos com o id do repos que sera excluido
  const handleRemove = () => {
    handleRemoveRepos(repos.id);
  };

  //4-passei o onClick, indicando que quando for clicado, ele vai rodar a funcao handleRemove()
  return (
    <ItemContainer>
      <h3>· {repos.name}</h3>
      <p>{repos.full_name}</p>
      <div className="containerRepor">
        <FaGithub className="icon" />
        <a href={repos.html_url} target="_blank" rel="noreferrer">
          View repositório
        </a>
      </div>

      <p>{repos.description}</p>
      <a href="#" className="remove" onClick={handleRemove}>
        Remove <FaTrash />
      </a>
      <hr />
    </ItemContainer>
  );
}

export default ItemRepo;
