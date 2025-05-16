import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const [message, setMessage] = useState("");
    const [user, setUser] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        
        
        const home = async () => {
            // Check if token is null
            if (localStorage.getItem("token") === null) {
                navigate("/login");
            } else {
                console.log("Access Token:", localStorage.getItem("token"));

                // Fetch api
                try {
                    const { data } = await axios.get(
                        "http://127.0.0.1:8000/home/",
                        {
                            headers: {
                                Authorization: `Bearer ${localStorage.getItem(
                                    "token"
                                )}`,
                            },
                        }
                    );

                    console.log(data);

                    setMessage(data.message);
                    setUser(
                        data.user
                            .toLowerCase()
                            .split(" ")
                            .map(
                                (word) =>
                                    word.charAt(0).toUpperCase() + word.slice(1)
                            )
                            .join(" ")
                    );
                } catch (err) {
                    console.error("Home Error:", err);
                    if (err.response && err.response.status === 401){
                        localStorage.clear();
                        navigate("/login");
                    }
                }
            }
        };

        home();

    }, []);

    return (
        <>
            <h1>
                {localStorage.getItem("token")
                    ? `Hello ${user}!`
                    : "Unauthorized"}
            </h1>
            <p>{message}</p>
        </>
    );
}

export default Home;
