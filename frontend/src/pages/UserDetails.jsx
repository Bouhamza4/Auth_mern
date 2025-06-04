import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../assets/styles/UserDetails.css";

function UserDetails() {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }
        axios.get(`http://localhost:5000/api/users/${id}`)
            .then(res => setUser(res.data))
            .catch(err => console.log(err));
    }, [id, navigate]);

    if (!user) return <p>Chargement...</p>;

    return (
        <div>
            <h3>{user.nom} {user.prenom}</h3>
            <p>Filière: {user.filiere}</p>
            <p>Tel: {user.telephone}</p>
            <p>Adresse: {user.address?.ville}, {user.address?.rue}, {user.address?.codePostal}</p>
            <p>Etablissement: {user.etablissement}</p>

            <Link to={`/update-pass/${user.id}`}>🔐 Modifier mot de passe</Link>
        </div>
    );
}

export default UserDetails;
