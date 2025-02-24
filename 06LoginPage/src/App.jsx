import { useState } from 'react'
import Signup from './components/Signup'
import Login from './components/Login'

function App() {
  const [loginpage, setLoginpage] = useState(false)

  const handleLogin = () => {
    setLoginpage(true)
  }

  const handleSignup = () => {
    setLoginpage(false)
  }
  return (
    <>
       <div className='w-full h-screen bg-zinc-900 flex items-center justify-center'>
     {loginpage ? <Login handleSignup={handleSignup}/> : <Signup handleLogin = {handleLogin}/>}
       </div>
     
    </>
  )
}

export default App











