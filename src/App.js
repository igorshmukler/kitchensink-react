import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MemberList from './components/MemberList'
import AddMember from './components/AddMember'
import EditMember from './components/EditMember'
import MemberItem from './components/MemberItem'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MemberList />} />
          <Route path="/add" element={<AddMember />} />
          <Route path="/edit/:id" element={<EditMember />} />
          <Route path="/:id" element={<MemberItem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
