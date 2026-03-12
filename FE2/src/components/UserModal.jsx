import { useState, useEffect } from "react";

export default function UserModal({ user, onSave, onClose }) {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");

  useEffect(()=>{
    if(user){
      setName(user.name);
      setEmail(user.email);
    }
  },[user])

  const handleSubmit = () => {
    onSave({name,email});
  }

  return(
    <div className="modal">

      <div className="modal-content">

        <h3>{user ? "Edit User" : "Create User"}</h3>

        <input
        value={name}
        onChange={e=>setName(e.target.value)}
        placeholder="Name"
        />

        <input
        value={email}
        onChange={e=>setEmail(e.target.value)}
        placeholder="Email"
        />

        <div className="modal-actions">
          <button onClick={handleSubmit}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>

      </div>

    </div>
  )

}