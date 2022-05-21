import React, { useEffect, useState } from 'react';
import Wordle from './components/Wordle';
import { SolutionType } from './types/types';

const App = React.memo(() => {
  const [solution, setSolution] = useState<string>('')
  const [newCircle, setNewCircle] = useState<boolean>(false)

  useEffect(() => {
    const getSolution = async () => {
      let response: Response = await fetch('https://my-json-server.typicode.com/Vlad080897/data-for-wordle/words')
      let json: SolutionType[] = await response.json()
      let solution = json[Math.floor(Math.random() * json.length)] // random integer beetwen 0 - 14
      setSolution(solution.word)
      debugger
    }
    getSolution()
  }, [newCircle])
  return (
    <div className="App">
      <Wordle
        solution={solution}
        setNewCircle={setNewCircle}
        newCircle={newCircle}
      />
    </div>
  );
})

export default App;
