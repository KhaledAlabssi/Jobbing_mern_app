
import styled from 'styled-components'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
    Error,
    Register,
    Landing,
    ProtectedLayout,
} from './pages'
import {
    AddJob,
    AllJobs,
    Proile,
    SharedLayout,
    Stats,
} from './pages/dashboard'




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedLayout>
              <SharedLayout />
            </ProtectedLayout>
          }
        >
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Proile />} />
        </Route>
        <Route
          path="/register"
          element={
            <div>
              <Register />
            </div>
          }
        />
        <Route path="/landing" element={<Landing />} />
        <Route
          path="*"
          element={
            <div>
              <Error />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
