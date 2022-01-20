import React from 'react';
import {Outlet, Link} from 'react-router-dom'
import Wrapper from '../../assets/wrappers/SharedLayout'

function SharedLayout() {
  return <Wrapper>
    <nav>
      <Link to='all-jobs'>All Jobs</Link>
      <Link to='add-job'>Add Jobs</Link>
    </nav>
    <Outlet />
  </Wrapper>
}

export default SharedLayout;
