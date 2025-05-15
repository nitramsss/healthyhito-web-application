import { useState } from "react";
import "../css/login.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function LogIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();

        const user = {
            username: username,
            password: password,
        };

        try {
            const { data } = await axios.post(
                "http://127.0.0.1:8000/token/",
                user
            );
            

            const token = data.access;
            const refreshToken = data.refresh;

            console.log("Response:", data);

            localStorage.clear();
            localStorage.setItem("token", token);
            localStorage.setItem("refreshToken", refreshToken);

            console.log(token);
            console.log(refreshToken);
            
            if (token !== null){
                navigate("/");
            }
            
        } catch (err){
            console.error("Auth Error:", err);
        }
    };

    return (
        <>
            <p className="title">Login</p>
            <form onSubmit={submit} className="login-form">
                Username
                <input 
                    type="username" 
                    value={username} 
                    onChange={e => setUsername(e.target.value)}
                />
                Password
                <input 
                    type="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <input type="submit" />
            </form>
        </>
    );
}

export default LogIn;
