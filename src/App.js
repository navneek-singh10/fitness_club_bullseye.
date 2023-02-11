import { useState } from "react";
import Form from "./components/Form/Form";
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import MemberList from "./components/MemberLIst/MemberList";

function App() {
  const [memberList, setMemberList] = useState([]);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Form setMemberList={setMemberList}/>}/>
      <Route path="/member-list" element={<MemberList memberList={memberList}/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
