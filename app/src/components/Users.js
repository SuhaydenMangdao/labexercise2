import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import axios from "axios";

function Users() {
    const { id } = useParams()
    const [data, setData] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3001/')
        .then(res => {
            console.log(res);
            setData(res.data);
        })
        .catch(err => console.log(err));
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteuser/' + id)
        .then(res => {
            console.log(res)
            setData(data.filter(user => user._id !== id));
        }).catch(err => console.log(err))
    }

    return(
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
        
        <div className="d-flex justify-content-between mb-3">
        <Link to="/create" className="btn btn-success" style={{ width: '200px', height: '40px', lineHeight: '22px' }}>
        Add User
        </Link>

        <input 
        type="text" 
        placeholder="Search..." 
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: '200px', height: '40px' }}
        />
        </div>

        

            <table className="table">
                <thead>
                    <tr>
                        <th> Name </th>
                        <th> Email </th>
                        <th> Age </th>
                        <th> Action </th>
                    </tr>
                </thead>
                <tbody>
                    {
                    data.filter(user => user.name.includes(searchTerm)).map((user, index) => {
                        return <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td>
                                <Link to={`/edit/${user._id}`} className="btn btn-sm btn-success me-2">Update</Link>
                                
                                <button onClick={() => handleDelete(user._id)} className="btn btn-sm btn-danger">Delete</button>
                            </td>
                        </tr>
                    })
                }
                </tbody>
            </table>
        </div>
    </div>
  );
}

export default Users;