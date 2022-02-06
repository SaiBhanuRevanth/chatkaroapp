import {useState} from 'react';
import axios from 'axios';
const LoginForm=()=>{
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const authObject={'Project-ID':"0533db58-52a2-492c-b9c1-3a7c5c7e76d3",'User-Name':userName,'User-Secret':password};
        try{
          await axios.get('https://api.chatengine.io/chats',{headers:authObject});

          localStorage.setItem('username',userName);
          localStorage.setItem('password',password);

          window.location.reload();

        }catch(error){
            setError('Oops,incorrect Credentials');
        }
    }
    return(
        <div className='wrapper'>
            <div className='form'>
            <h1 className='title'>ChatKaro</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={userName}  onChange={(e)=>setUserName(e.target.value)} className='input' placeholder='Username' required/>
                    <input type='password' value={password}  onChange={(e)=>setPassword(e.target.value)} className='input' placeholder='Password' required/>
                    <div align='center'>
                        <button type='submit' className='button'>
                            <span>Have Chat</span>
                        </button>
                    </div>
                    <h2 className='error'>{error}</h2>
                </form>
            </div>
            <footer  className='foot'>
                   
                    <p style={{ fontFamily: 'Lobster'}}>Follow me @vsbr_1505</p>
                    <p style={{ fontFamily: 'Lobster'}}>To Chat Contact:revanthsaibhanu@gmail.com</p>
                   <p style={{ fontFamily: 'Lobster'}}>Copyright 2021</p>
    </footer>
        </div>
    )
}

export default LoginForm;