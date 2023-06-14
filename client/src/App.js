

import {BrowserRouter,Routes,Route,Link} from'react-router-dom'
import {Landing, Register,Error,ProtectedRoute} from './pages'

import { Alljobs, Addjob, Profile, Sharedlayout, Stats } from './pages/dashboard'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Sharedlayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          {/* <Route index element={<h1>HELO</h1>} /> */}
          <Route path="all-jobs" element={<Alljobs />}></Route>
          <Route path="add-job" element={<Addjob />}></Route>
          <Route path="profile" element={<Profile />}></Route>
        </Route>
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
