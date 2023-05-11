import {useState} from'react';
import {useForm, SubmitHandler} from 'react-hook-form';
import {BsSearch} from 'react-icons/bs';


const Search = () => {

  const {register, handleSubmit} = useForm();
  const[username, setUsername] = useState('');

  const onSubmit = handleSubmit(async (data)=>{
    const res = await fetch(`https://api.github.com/users/${data.username}`);
    const result = await res.json();
  });

  return (
    <div>
      <h2>Busque por um usuario</h2>
      <p>Conheça os melhores repositórios:</p>
      <div>
        <form onSubmit={onSubmit}>
        <input {...register('username', {required: true})}
          placeholder='Digite um usuário'
         />
        <button >
          <BsSearch />
        </button>
        </form>
      </div>
    </div>
  );
}

export default Search;
