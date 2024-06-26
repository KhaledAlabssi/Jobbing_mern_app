import {useState, useEffect} from 'react'
import { Logo, FormRow, Alert } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
import { useAppContext } from '../context/appContext'
import {useNavigate} from 'react-router-dom'

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,

}

function Register() {
  const navigate = useNavigate()
    const [values, setValues] = useState(initialState)
    const {user, isLoading, showAlert, displayAlert, registerUser, loginUser, setupUser} = useAppContext()
    const toggleMember = () => {
        setValues({...values, isMember: !values.isMember})
    }

    const changeHandler = (e) => {
        // console.log(e.target)
        setValues({...values, [e.target.name]: e.target.value})
    }
    const submitHandler = (e) => {
        e.preventDefault()
        const { name, email, password, isMember } = values;
        if (!email || !password || (!isMember && !name)) {
          displayAlert();
          return;
        }
        const currentUser = {name, email, password}
        if (isMember) {
          setupUser({currentUser, endPoint: 'login', alertText: 'Login Successful! Redirecting...'})
        } else {
          setupUser({
            currentUser,
            endPoint: "register",
            alertText: "User Created! Redirecting...",
          });
        }
    }
    useEffect(() => {
      if (user) {
        setTimeout(() => {

          navigate('/')
        }, 3000)
      }

    }, [user, navigate])
    return (
      <Wrapper className="full-page">
        <form className="form" onSubmit={submitHandler}>
          <Logo />
          <h3>{values.isMember ? "Login" : "Register"}</h3>
          {showAlert && <Alert />}

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

          <button type="submit" className="btn btn-block" disabled={isLoading}>
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
