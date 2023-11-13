import {useState} from 'react'
import{useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import '../Formulario/style/Formulario.css'


function Formulario(){

  const schema = yup.object({

    nome:yup.string().required('Campo nome Obrigatório'),
    email:yup.string().email('Digite um email válido').required('Campo email obrigatório'),
    cpf:yup.string().min(11, 'CPF deve conter 11 digitos').required('Campo CPf obrigatório')
  })
  .required();

const {register,handleSubmit,formState:{errors},setValue,setFocus}
= useForm({ resolver:yupResolver(schema)
});

//Hook useState
const [listaclientes, setListaClientes]= useState([])

//função inserir cliente
function inserirCliente(cliente){
  setListaClientes([...listaclientes,cliente])
}

//criando a api

function buscarCep(e){
  const cep=e.target.value.replace(/\D/g,'');
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then((res)=> res.json())
  .then((data)=>{
    setValue('rua',data.logradouro);
    setValue('bairro',data.bairro);
    setValue('cidade',data.localidade);
    setValue('estado',data.uf);
    setFocus('numero');
  });
}

   
  return(
    <div className='envolverr'>
    <form onSubmit={handleSubmit(inserirCliente)} className='formulario'>
      <fieldset className='fieldset'>
        <legend className='legenda'>Dados Pessoais</legend>

      <label>
        Nome:
        <input type="text" {...register('nome')}/>
        <span>{errors.nome?.message}</span>
      </label>

      <label>
        Email:
        <input type="text" {...register('email')}/>
        <span>{errors.email?.message}</span>
      </label>
      <label>

        Cpf:
        <input type="text" {...register('cpf')}/>
        <span>{errors.cpf?.message}</span>
      </label>

      </fieldset>


      <fieldset>
        <legend>Dados Endereço</legend>

        <label>
          Cep:
          <input type="text" {...register('cep')} onBlur={buscarCep}/>
        </label>
        
        <label>
          Rua:
          <input type="text" {...register('rua')}/>
        </label>

        <label>
          Numero:
          <input type="text" {...register('numero')}/>
        </label>

        <label>
          Bairro:
          <input type="text" {...register('bairro')}/>
        </label>

        <label>
          Cidade:
          <input type="text" {...register('cidade')}/>
        </label>
      </fieldset>

      <button type="submit">Cadastrar</button>
    </form>
    <div>
      {listaclientes.map((cli, i)=> (
        <div key={i}>
        <p>Nome:{cli.nome}</p>
        <p>Email:{cli.email}</p>
        <p>CPF:{cli.cpf}</p>
        </div>
      ))}
    </div>
    
    </div>
  )
}
export default Formulario;