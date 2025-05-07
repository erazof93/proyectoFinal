import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import '../pages/registro.css'





const schemas = yup.object({
  name: yup.string().required('El nombre es requerido')
                    .min(3,'minimo 3 caracteres')
                    .max(20, 'maximo 20 caracteres'),
  email: yup.string().required('El correo es requerido')
                    .email('ingresar correo valido'),
                    
  password: yup.string().required('la contraseña es requerida'),

  apellido: yup.string().required("ingrese su apellido")
                        .min(4, 'mino 4 caracteres'),
})


export const Registro = () => {
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schemas)
})

  // const { register, handleSubmit, formState: { errors } } = useForm();


  const onSubmit = (data) =>{
  console.log(data);
}




  return (
    <div className='todo'>
    <form className="formulario" onSubmit={handleSubmit(onSubmit)}>     {/*el onSubmit es para enviar*/}
        <label>Nombre</label>
        <input type="text" {...register("name")} />  {/*en register el 'name' es la cariable de la constante schema*/}
        {errors.name && <p>{errors.name.message}</p>} {/* si el error ocurre => entonces se ejectua /// && es un entonces */}

        <label htmlFor="">Apellido</label>
        <input type='text'  {...register("apellido")}/>
        {errors.apellido && <p>{errors.apellido.message}</p>}
        

        <label>Correo</label>
        <input type="text" {...register("email")}/>
        {errors.email && <p>{errors.email.message}</p>}
    
        <label>Contraseña</label>
        <input type="password" {...register("password")}/>
        {errors.password && <p>{errors.password.message}</p>}
    
        <button type='submit'>Enviar</button>
    </form>
    </div>
  )
}
