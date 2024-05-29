import React, { useState, useEffect } from 'react';
import './Adddetails.css';
import { useNavigate, useParams } from 'react-router-dom';

export default function Updatedetails() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id)
    useEffect(() => {
        async function fetchItem() {
            try {
                const response = await fetch(`http://localhost:4000/getitems/${id}`);
                const data = await response.json();
                if (response.ok) {
                    setFname(data.fname);
                    setLname(data.lname);
                    setEmail(data.email);
                    setPwd(data.password);
                } else {
                    console.error('Failed to fetch item:', data);
                }
            } catch (error) {
                console.error('Error fetching item:', error);
            }
        }
        fetchItem();
    }, [id]);

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch(`http://localhost:4000/getitems/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ fname, lname, email, password: pwd })
            });
            if (response.ok) {
                navigate('/');
            } else {
                console.error('Failed to update item');
            }
        } catch (error) {
            console.error('Error updating item:', error);
        }
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label>First name:</label>
                <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} /><br />
                <label>Last name:</label>
                <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} /><br />
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                <label>Password:</label>
                <input type="password" value={pwd} onChange={(e) => setPwd(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
