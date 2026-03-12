import { FiSearch, FiBell } from "react-icons/fi";

export default function Header({ onCreate }) {
  return (
    <header className="header">
      <h2 className="logo">DevBlog</h2>

      <div className="search">
        <FiSearch />
        <input placeholder="Search users..." />
      </div>

      <div className="actions">
        <button className="btn" onClick={onCreate}>
          Create User
        </button>
        <FiBell size={20}/>
      </div>
    </header>
  );
}