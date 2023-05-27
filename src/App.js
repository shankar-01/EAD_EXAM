import logo from './logo.svg';
import './App.css';
import { PolllDisplay } from './PollDisplay';
import { useEffect, useState } from 'react';
import { UserParticipation } from './UserParticipation';
import { ThankYouMessage } from './ThankYouMessage';
import { AnotherUserParticipation } from './AnotherUserParticipation';

function App() {
  const [data, setData] = useState({})
  useEffect(()=>{
    setData({

      "question": "What is your favorite programming language?",
    
      "choices": [
    
        { "id": 1, "label": "JavaScript", "votes": 0 },
    
        { "id": 2, "label": "Python", "votes": 0 },
    
        { "id": 3, "label": "Java", "votes": 0 },
    
        { "id": 4, "label": "C#", "votes": 0 }
      ] 
  })
  }
  ,[])
  return (
    <>
    <h1>Polling App</h1>
    <PolllDisplay {...data}/>
    <UserParticipation/>
    <ThankYouMessage/>
    <AnotherUserParticipation/>
    </>
  );
}

export default App;
