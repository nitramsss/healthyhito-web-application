import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function LogOut() {
    const navigate = useNavigate();

    useEffect(() => {
        const logOut = async () => {
            try {
                const { data } = await axios.post(
                    "http://127.0.0.1:8000/logout/",
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                                "token"
                            )}`,
                        },
                    }
                );

                localStorage.clear();
                navigate("/login");
            } catch (err) {
                console.error("Logout Error: ", err);
                if (err.response && err.response.status === 401) {
                    localStorage.clear();
                    navigate("/login");
                }
            }
        };

        logOut();
    }, []);

    return <div></div>;
}

export default LogOut;
