import React from "react";
import "./MemberLIst.css"


export default function MemberList ({ memberList }){
    return (
      <div>
        <h1>Member List</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {memberList.map(member => (
              <tr key={member.email}>
                <td>{member.name}</td>
                <td>{member.email}</td>
                <td>{member.phoneNumber}</td>
                <td>{member.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }