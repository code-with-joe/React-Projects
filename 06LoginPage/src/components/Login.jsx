import React, {useState} from 'react'

const Login = ({handleSignup}) => {
    
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')

    
        const handleSubmit = () => {
            setEmail('')
            setPassword('')
        }
  return (
    <div className='flex items-start justify-center flex-col w-[350px] rounded-xl bg-white p-5 gap-5'>
    <h1 className='text-2xl font-bold '>Log In</h1>
    <input type="email"
   
    value={email}
    placeholder='Email' 
    onChange={(e) => setEmail(e.target.value)}
    className='w-full px-2 py-1 border-2 border-zinc-700 rounded-md outline-none'
    />
     <input type="password"
    
    value={password}
    placeholder='Password' 
    onChange={(e) => setPassword(e.target.value)}
    className='w-full px-2 py-1 border-2 border-zinc-700 rounded-md outline-none'
    />
    <button
     type="submit"
     className='w-full py-1 bg-blue-600 rounded-md cursor-pointer'
     onClick={handleSubmit}>
      Log in
     </button>
     <div className='w-full flex flex-col items-center justify-center gap-5'>
     <p className='text-sm'>Don't have an account? <span onClick={handleSignup} className='cursor-pointer text-blue-500 font-semibold'>Sign up</span></p>      
     </div>
    
   
  
</div>
  )
}

export default Login