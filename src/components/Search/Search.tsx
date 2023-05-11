/* eslint-disable @typescript-eslint/no-unused-vars */
import {useState} from'react';
import {useForm, SubmitHandler} from 'react-hook-form';
import { UserProps } from "../../types/user";
import {BsSearch} from 'react-icons/bs';
import classes from './Search.module.css';


const Search = () => {
  const {register, handleSubmit} = useForm();
  const [user, setUser] = useState<UserProps | null>(null);
 
  const onSubmit = handleSubmit(async (data)=>{
    console.log('oi')
    const res = await fetch(`https://api.github.com/users/${data.username}`);
    const result = await res.json();
    const {avatar_url, login, location, followers, following} = result;
    
    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following
    }
    setUser(userData);
  });

  return (
    <div className={classes.search}>
      <h2>Busque por um usuario</h2>
      <p>Conheça os melhores repositórios:</p>
      <div className={classes.search_container}>
        <form onSubmit={onSubmit}>
        <input {...register('username', {required: true})}
          placeholder='Digite um usuário'
         />
          <button >
            <BsSearch />
          </button>
        </form>
      </div>
      {user && user.login}
    </div>
  );
}

export default Search;
