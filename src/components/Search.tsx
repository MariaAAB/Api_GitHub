type SearchProps ={
    loadUser:(userName:string) => Promise<void>
};

import { useState,KeyboardEvent } from 'react';

import {BsSearch} from 'react-icons/bs';

import classes from './Search.module.css';

const Search = ({loadUser} : SearchProps) => {
   const [userName,setUserName] = useState("");
   
   const handLeKeyDown = (e:KeyboardEvent) => {
    if(e.key === "Enter"){
      loadUser(userName);

    }
   };

    return (
    <div className={classes.search}>
      <h2>Busque por um usuario</h2>
      <p>Conheça seus melhores repositorios</p>
      <div className={classes.search_container}>
        <input 
         type='text' 
         placeholder='Digite o nome do usuario'
         onChange={(e) => setUserName(e.target.value)}
         onKeyDown={handLeKeyDown}
         />
        <button onClick={() => loadUser(userName)}>
         
            <BsSearch/>
            </button>
      </div>
    </div>
  );
};

export default Search
