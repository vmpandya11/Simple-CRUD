import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    try {
      const response = await fetch('http://localhost:4000/getitems');
      const data = await response.json();
      if (response.ok) {
        setItems(data);
      } else {
        console.error('Failed to fetch items:', data);
      }
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  }

  async function deleteItem(id) {
    try {
      const confirmDelete = window.confirm('Are you sure you want to delete this item?');
      if (confirmDelete) {
        const response = await fetch(`http://localhost:4000/getitems/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          setItems(items.filter(item => item._id !== id));
        } else {
          console.error('Failed to delete item');
        }
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  }

  return (
    <div>
      <h1>Home</h1>
      <Link to="/additem">
        <button style={{ background: "blue", color: "white", width: "100px", height: "50px", borderRadius: "10px", float: "right", marginRight: "40px" }}>
          Add Details
        </button>
      </Link>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px", marginLeft: "140px" }}>
        <table border={1}>
          <thead>
            <tr>
              <th>FirstName</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id}>
                <td>{item.fname}</td>
                <td>{item.lname}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>
                  <FontAwesomeIcon icon={faTrash} onClick={() => deleteItem(item._id)} /> &nbsp;
                  <Link to={`/updateitem/${item._id}`}>
                    <FontAwesomeIcon icon={faEdit} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
