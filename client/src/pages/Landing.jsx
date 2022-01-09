import React from 'react'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import {Logo} from '../components'


function Landing() {
    return (
      <Wrapper>
        <nav>
          <Logo />
            
        </nav>
        <div className="container page">
          <div className="info">
            <h1>
              Job <spam>tracking</spam> app
            </h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't
            </p>
            <button className='btn btn-hero'>Login/Register</button>
          </div>
          <img src={main} alt='main img' className='img main-img' />

        </div>
      </Wrapper>
    );
}
export default Landing
