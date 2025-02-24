import React, {useState} from 'react'

const Signup = ({handleLogin}) => {
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        email:'',
        createPassword:'',
        confirmPassword:''
    })

    const  handleChange = (e) => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = () => {
      setValues({
        firstname: '',
        lastname: '',
        email:'',
        createPassword:'',
        confirmPassword:''
    })
    }

  return (
    <div className='flex items-start justify-center flex-col w-[350px] rounded-xl bg-white p-5 gap-5'>
          <h1 className='text-2xl font-bold '>Sign Up</h1>
          <div className='flex gap-5'>
          <input type="text"
          name='firstname' 
          value={values.firstname}
          placeholder='Enter Firstname' 
          onChange={handleChange}
          className='w-1/2 px-2 py-1 border-2 border-zinc-700 rounded-md outline-none'
          />
          <input type="text"
          name='lastname'
          value={values.lastname}
          placeholder='Enter Lastname' 
          onChange={handleChange}
          className='w-1/2 px-2 py-1 border-2 border-zinc-700 rounded-md outline-none'
          />
          </div>
          <input type="email"
         name='email'
          value={values.email}
          placeholder='Enter Email' 
          onChange={handleChange}
          className='w-full px-2 py-1 border-2 border-zinc-700 rounded-md outline-none'
          />
           <input type="password"
          name='createPassword'
          value={values.createPassword}
          placeholder='Create Password' 
          onChange={handleChange}
          className='w-full px-2 py-1 border-2 border-zinc-700 rounded-md outline-none'
          />
           <input type="password"
          name='confirmPassword'
          value={values.confirmPassword}
          placeholder='Confirm Password' 
          onChange={handleChange}
          className='w-full px-2 py-1 border-2 border-zinc-700 rounded-md outline-none'
          />
          <button
           type="submit"
           className='w-full py-1 bg-blue-600 rounded-md cursor-pointer'
           onClick={handleSubmit}>
            Sign Up
           </button>
           <div className='w-full flex flex-col items-center justify-center gap-5'>
           <p className='text-sm'>Already have an account? <span onClick={handleLogin} className='cursor-pointer text-blue-500 font-semibold'>Log in</span></p>      
           </div>
          
         
        
    </div>
  )
}

export default Signup