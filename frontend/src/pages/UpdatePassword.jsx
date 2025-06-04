import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdatePassword() {
    const { id } = useParams();
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/users/pass/${id}`, { password })
            .then(() => navigate(`/user/${id}`))
            .catch(err => console.log(err));
    };

    return (
        <>
            <style>
                {`
          .update-password-form {
            max-width: 350px;
            margin: 60px auto;
            padding: 32px 28px 24px 28px;
            background: #fff;
            border-radius: 18px;
            box-shadow: 0 4px 24px rgba(0,0,0,0.09), 0 1.5px 6px rgba(0,0,0,0.04);
            display: flex;
            flex-direction: column;
            gap: 22px;
            font-family: 'Segoe UI', 'Roboto', Arial, sans-serif;
          }
          .update-password-form h3 {
            margin: 0 0 10px 0;
            font-size: 1.5rem;
            font-weight: 600;
            color: #22223b;
            letter-spacing: 0.5px;
            text-align: center;
          }
          .update-password-form input[type="password"] {
            padding: 12px 14px;
            border: 1.5px solid #c9c9c9;
            border-radius: 8px;
            font-size: 1rem;
            transition: border 0.2s;
            outline: none;
            background: #f8f8fa;
          }
          .update-password-form input[type="password"]:focus {
            border-color: #4f8cff;
            background: #fff;
          }
          .update-password-form button {
            padding: 12px 0;
            border: none;
            border-radius: 8px;
            background: linear-gradient(90deg, #4f8cff 0%, #38b6ff 100%);
            color: #fff;
            font-size: 1.08rem;
            font-weight: 600;
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(79,140,255,0.08);
            transition: background 0.18s, transform 0.12s;
          }
          .update-password-form button:hover {
            background: linear-gradient(90deg, #38b6ff 0%, #4f8cff 100%);
            transform: translateY(-2px) scale(1.03);
          }
        `}
            </style>
            <form className="update-password-form" onSubmit={handleSubmit}>
                <h3>Modifier mot de passe</h3>
                <input
                    type="password"
                    placeholder="Nouveau mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Enregistrer</button>
            </form>
        </>
    );
}

export default UpdatePassword;
