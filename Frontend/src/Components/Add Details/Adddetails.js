import React, { useState } from 'react'
import './Adddetails.css'
import { useNavigate } from 'react-router-dom';

export default function Adddetails() {
    const[fname,setFname] = useState("");
    const[lname,setLname] = useState("");
    const[email,setEmail] = useState("");
    const[pwd,setPwd] = useState("");
    const navigate = useNavigate();


    async function handleSubmit(e) {
        e.preventDefault();
        const data = {
            fname: fname,
            lname: lname,
            email: email,
            password: pwd
        };

        try {
            const response = await fetch('http://localhost:4000/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
               
                console.log('Data submitted successfully');
                navigate('/');
            } else {
              
                console.error('Failed to submit data');
            }
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    }
    return (

        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label  >First name:</label>
                <input type="text"  onChange={(e)=>setFname(e.target.value)}/><br/>
                <label>Last name:</label>
                <input type="text"  onChange={(e)=>setLname(e.target.value)}/><br/>
                <label >Email:</label>
                <input type="email" onChange={(e)=>setEmail(e.target.value)}/><br/>
                <label >password</label>
                <input type="password"  onChange={(e)=>setPwd(e.target.value)} />
                <button >Submit</button>
            </form>
        </div>

    )
}
