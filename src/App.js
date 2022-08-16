import { useState } from 'react'
import Form from './components/ValidationForm'
import  Container  from 'react-bootstrap/Container';

const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    },
  submitted:false
};

function App() {
  const [state, setState] = useState(initialState)
  const [error, setError] = useState(false)

  return (
    <div className="App">
      <Container className="p-3">
        <Form state={ state } setState = { setState } error = { error } setError = { setError } />
      </Container>
    </div>      
  );
}

export default App;
