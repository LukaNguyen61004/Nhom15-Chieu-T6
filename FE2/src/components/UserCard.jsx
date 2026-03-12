export default function UserCard({ user, onEdit, onDelete }) {
  return (
    <div className="card">

      <h3>{user.name}</h3>
      <p>{user.email}</p>

      <div className="card-actions">
        <button onClick={() => onEdit(user)}>Edit</button>
        <button onClick={() => onDelete(user.id)}>Delete</button>
      </div>

    </div>
  );
}