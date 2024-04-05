import './App.css';
import { useState } from 'react';
import Description from './SipHappensCafe/Description/Description.jsx';
import Options from './SipHappensCafe/Options/Options.jsx';
import Feedback from './SipHappensCafe/Feedback/Feedback.jsx';

// const options = {
//   good: 0,
//   bad: 0,
//   neutral: 0,
// };


export default function App() {
  const [options, setOptions] = useState(0);
  return (
    <>
      <Description />
      <Options options={options} setOptions={setOptions}/>
      <Feedback options={options}/>
    </>
  );
}