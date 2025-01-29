import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getMembers } from '../api/memberApi'
import '../styles/MemberList.css'

const MemberList = () => {
  const [members, setMembers] = useState([])

  useEffect(() => {
    getMembers()
      .then(setMembers)
      .catch((error) => console.error("Error fetching members:", error))
  }, [])

  return (
    <div className="member-list-container">
      <h1>Members</h1>
      <ul className="member-list">
        {members.map((member) => (
          <li key={member.id}>
            {member.firstName} {member.lastName} <Link to={`/${member.id}`}>({member.email})</Link>
          </li>
        ))}
      </ul>
      <Link to="/add">Add Member</Link>
    </div>
  )
}

export default MemberList