import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const [message, setMessage] = useState("");
    const [user, setUser] = useState("");
    const navigate = useNavigate();

    useEffect(
        () => async () => {
            // Check if token is null
            if (localStorage.getItem("token") === null) {
                console.log("access token is null");
                navigate("/login");
            } else {
                console.log("Access Token:", localStorage.getItem("token"));

                // Fetch api
                try {
                    const { data } = await axios.get(
                        "http://127.0.0.1:8000/home/",
                        {
                            headers: {
                                Authorization: `Bearer ${localStorage.getItem("token")}`,
                            },
                        }
                    );

                    console.log(data);

                    setMessage(data.message);
                    setUser(data.user);
                } catch (err) {
                    console.error("Home Error:", err);
                }
            }
        },
        []
    );

    return (
        <>
            <h1>Hello {user}!</h1>
            <p>{message}</p>
        </>
    );
}

export default Home;
