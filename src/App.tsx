import React from 'react';
import {HashRouter, NavLink, Route, Routes} from "react-router-dom";
import UserPage from "./components/UserPage";
import UserItemPage from "./components/UserItemPage";

function App() {

  return (
      <HashRouter >
        <div>
          <NavLink to='/users' style={{fontSize: 24}}>Пользователи</NavLink>
        </div>
        <Routes>
          <Route path='/users' element={<UserPage/>} index/>
          <Route path='/user/:id' element={<UserItemPage/>}/>
        </Routes>
      </HashRouter>
  );
}

export default App;
