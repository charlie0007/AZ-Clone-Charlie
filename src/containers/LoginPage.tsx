import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/home');
        // Add your authentication logic here using email and password state values
        // console.log(`Email: ${email}, Password: ${password}`);

      };
    

    return (
        <div className='' style={{width: '700px', margin: 'auto'}}>

            <div className='flex items-center justify-center mt-2 mb-3'>
                <img src="assets/logo.png" />
            </div>
            <div className='p-6 border-2 rounded-md' style={{width: '350px', margin: 'auto'}}>
                <div>
                <div className="text-3xl">Sign In</div>
                <form onSubmit={handleSubmit}>
                    <div className='mt-2'>
                    <label>
                        <p>Email</p>
                    </label>
                    <input className="border-2 border-gray-500  rounded-md w-1/2 focus:border-teal-500 w-full" type="email" value={email} onChange={handleEmailChange} required />
                    <br />
                    </div>
                    <div className='mt-2'>
                    <label>
                        <p>Password</p>
                    </label>
                    <input className="border-2 border-gray-500 rounded-md w-1/2 focus:border-teal-500 w-full" type="password" value={password} onChange={handlePasswordChange} required />
                    </div>
                    <br />
                    <button className ="ocus:outline-none text-white hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 w-full" style={{backgroundColor: 
                    '#f0c14b'}} type="submit">Sign In</button>
                </form>
                </div>
               
            </div>
        </div>
    )
}