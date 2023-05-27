import logo from './logo.svg';
import './App.css';
import { PolllDisplay } from './PollDisplay';
import { useEffect, useState } from 'react';
import { UserParticipation } from './UserParticipation';
import { ThankYouMessage } from './ThankYouMessage';
import { AnotherUserParticipation } from './AnotherUserParticipation';
import { Timer } from './Timer';

function App() {
  const [data, setData] = useState({})
  
  return (
    <Timer/>

  );
}

export default App;
