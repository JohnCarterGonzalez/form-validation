import { Form, Button } from 'react-bootstrap'

const ValidationForm = (props) => {
  const { state, setState, error, setError } = props

  const handleValidation = (e) => {

    if(e.target.name === 'name'){
    if((e.target.value).trim().length < 2){
      setState({...state,name:{value:e.target.value,error:"Name must be at least 2 characters long"}})
      setError(true)
    }else{
      setState({...state,name:{value:e.target.value,error:null}})
      setError(false)
    }
  }
  if(e.target.name === 'email'){
    if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value)){
      setState({...state,email:{value:e.target.value,error:"Must be a valid email"}})
      setError(true)
    }else{
      setState({...state,email:{value:e.target.value,error:null}})
      setError(false)
    }
  }
  if(e.target.name === 'password'){
    if((e.target.value).trim().length < 8){
      setState({...state,password:{value:e.target.value,error:"Password must be at least 8 characters long"}})
      setError(true)
    }else{
      setState({...state,password:{value:e.target.value,error:null}})
      setError(false)
    }
  }
}

const handleSubmit = (e) => {

} 

  return (
    <Form onSubmit={ handleSubmit } className="p-5 mb-4 bg-light rounded-3">

        <Form.Group>
            <h2 className="mb-3">Register</h2>
        </Form.Group>
      
        <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control onChange = { handleValidation } value={ state.name.value } name = "name" className={ state.name.error?"border-danger":'' }>
            </Form.Control>
            {
              state.name.error?
              <Form.Text muted>{ state.name.error }</Form.Text>
              :null
            }
        </Form.Group>

        <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control onChange = { handleValidation } value={ state.email.value } name = "email" className={ state.email.error?"border-danger":'' }>

            </Form.Control>
            {
              state.email.error?
              <Form.Text muted>{ state.email.error }</Form.Text>
              :null
            }
        </Form.Group>

        <Form.Group>
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" value={ state.password.value } onChange = { handleValidation } name = "password"  className={ state.password.error?"border-danger":'' }>

            </Form.Control>
            {
              state.password.error?
              <Form.Text muted>{ state.password.error }</Form.Text>
              :null
            }
        </Form.Group>

        <Form.Group className="mt-4">
            {error?
              <Button disabled type="submit" >Register</Button>
              :
              <Button type="submit" >Register</Button>

            }
        </Form.Group>

    </Form>
  )
}

export default ValidationForm
