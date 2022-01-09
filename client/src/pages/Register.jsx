import {useState, useEffect} from 'react'
import { Logo, FormRow, Alert } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'


const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
    showAlert: false,

}


function Register() {
    const [values, setValues] = useState(initialState)
    const toggleMember = () => {
        setValues({...values, isMember: !values.isMember})
    }




    const changeHandler = (e) => {
        console.log(e.target)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        console.log(e.target)
    }
    return (
      <Wrapper className="full-page">
        <form className="form" onSubmit={submitHandler}>
          <Logo />
          <h3>{values.isMember ? "Loging" : "Register"}</h3>
          {values.showAlert && <Alert />}

          {!values.isMember && (
            <FormRow
              name="name"
              type="text"
              value={values.name}
              changeHandler={changeHandler}
            />
          )}
          <FormRow
            name="email"
            type="email"
            value={values.email}
            changeHandler={changeHandler}
          />
          <FormRow
            name="password"
            type="password"
            value={values.password}
            changeHandler={changeHandler}
          />

          <button type="submit" className="btn btn-block">
            submit
          </button>
          <p>
              {values.isMember? 'Not a member' : 'Already a member?'}
            <button type="button" onClick={toggleMember} className="member-btn">
              {values.isMember ? "Register" : "Login"}
            </button>
          </p>
        </form>
      </Wrapper>
    );
}

export default Register
