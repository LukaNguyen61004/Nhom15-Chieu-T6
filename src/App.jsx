import { useEffect,useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import UserCard from "./components/UserCard";
import UserModal from "./components/UserModal";
import { getUsers,createUser,updateUser,deleteUser } from "./services/api";
import "./App.css";

export default function App(){

const [users,setUsers] = useState([]);
const [modal,setModal] = useState(false);
const [editing,setEditing] = useState(null);

const loadUsers = async ()=>{
 const res = await getUsers();
 setUsers(res.data.data);
}

useEffect(()=>{
 loadUsers();
},[])

const handleSave = async(data)=>{

 if(editing){
   await updateUser(editing.id,data);
 }else{
   await createUser(data);
 }

 setModal(false);
 setEditing(null);
 loadUsers();
}

const handleDelete = async(id)=>{
 await deleteUser(id);
 loadUsers();
}

return(

<div className="layout">

<Sidebar/>

<div className="main">

<Header onCreate={()=>setModal(true)}/>

<div className="grid">

{users.map(u=>(
<UserCard
key={u.id}
user={u}
onEdit={(u)=>{setEditing(u);setModal(true)}}
onDelete={handleDelete}
/>
))}

</div>

</div>

{modal && (
<UserModal
user={editing}
onSave={handleSave}
onClose={()=>{setModal(false);setEditing(null)}}
/>
)}

</div>

)

}