/* eslint-disable @typescript-eslint/no-unused-vars */
import {useState} from'react';
import {useForm, SubmitHandler} from 'react-hook-form';
import User from '../User/User';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import { UserProps } from "../../types/user";
import {BsSearch} from 'react-icons/bs';
import classes from './Search.module.css';


const Search = () => {
  const {register, handleSubmit} = useForm();
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
 
  const onSubmit = handleSubmit(async (data)=>{
    setLoading(true);
    setError(false);
    setUser(null);

    const res = await fetch(`https://api.github.com/users/${data.username}`);
    const result = await res.json();

    if(res.status === 404){
      setError(true);
      setLoading(false);
      return;
    }

    const {avatar_url, login, location, followers, following} = result;
    
    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following
    }
    setUser(userData);
    setLoading(false);
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
      {user && <User {...user} />}
      {error && <Error/>}
      <div> 
        {loading && <Loader/>}
      </div>
    </div>
   
  );
}

export default Search;
