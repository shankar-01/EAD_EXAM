import logo from './logo.svg';
import './App.css';
import { PolllDisplay } from './PollDisplay';
import { useEffect, useState } from 'react';
import { UserParticipation } from './UserParticipation';
import { ThankYouMessage } from './ThankYouMessage';
import { AnotherUserParticipation } from './AnotherUserParticipation';

function App() {
  const [data, setData] = useState({})
  const [selectedId, setSelectedId] = useState(0)
  const [showThankYou, setShowThankYou] = useState(false)
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
  const voted = ()=>{
    setData(data=>{
      return {...data, choices:data.choices.map(obj=>{
        if(obj.id == selectedId) return ({...obj, votes:obj.votes+1})
        return obj
      })}
    })
    //setSelectedId(0)
    setShowThankYou(true)
  }
  const addAnother = ()=>{
    setSelectedId(0)
    setShowThankYou(false)
  }
  return (
    <>
    <h1>Polling App</h1>
    <PolllDisplay {...data}/>
    <UserParticipation selectedId={selectedId} setSelectedId={setSelectedId} voted={voted} {...data} showThankYou={showThankYou}/>
    {showThankYou&&<ThankYouMessage/>
  }
    <AnotherUserParticipation addAnother={addAnother}/>
    </>

