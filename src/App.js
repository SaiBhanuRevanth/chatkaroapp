import { ChatEngine } from "react-chat-engine";
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const App=()=>{

    if(!localStorage.getItem('username')) return <LoginForm/>
    return(
        <ChatEngine
        height="100vh"
        projectID="0533db58-52a2-492c-b9c1-3a7c5c7e76d3"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    )
}

export default App;