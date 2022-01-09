import React from 'react'
import main from '../assets/images/main.svg'
import logo from '../assets/images/logo.svg'
import styled from "styled-components"


function Landing() {
    return (
      <Wrapper>
        <nav>
            <img src={logo} alt='logo' className='logo' />
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

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
}

.page {
  min-height: calc(100vh - var(--nav-height));
  display: grid,
  align-items: center;
  margin-top: -3rem;
}

h1 {
  font-weight: 700;
  spam {
    color: var(--primary-500)
  }
}

p {
  color: var(--grey-600)
}
.main-img {
  display: none;
}
 @media (min-width: 992px) {
   .page {
     grid-template-columns: 1fr 1fr;
     column-gap: 3rem;
   }
   .main-img {
     display:block;
   }
   
   
 }
`
export default Landing
