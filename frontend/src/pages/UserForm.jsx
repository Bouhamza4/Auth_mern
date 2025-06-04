import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserForm() {
    const [form, setForm] = useState({
        id: "",
        nom: "",
        prenom: "",
        filiere: "",
        email: "",            // ✅ nouveau champ
        password: "",
        telephone: "",
        address: {
            ville: "",
            rue: "",
            codePostal: ""
        },
        etablissement: ""
    });

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (["ville", "rue", "codePostal"].includes(name)) {
            setForm({ ...form, address: { ...form.address, [name]: value } });
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:5000/api/users/${form.id}`, form)
            .then(() => navigate("/"))
            .catch(err => console.log(err));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Ajouter un utilisateur</h2>
            <input name="id" placeholder="ID" onChange={handleChange} required />
            <input name="nom" placeholder="Nom" onChange={handleChange} required />
            <input name="prenom" placeholder="Prénom" onChange={handleChange} required />
            <input name="filiere" placeholder="Filière" onChange={handleChange} required />
            <input name="email" type="email" placeholder="Email" onChange={handleChange} required /> {/* ✅ ajout */}
            <input name="password" type="password" placeholder="Mot de passe" onChange={handleChange} required />
            <input name="telephone" placeholder="Téléphone" onChange={handleChange} required />
            <input name="ville" placeholder="Ville" onChange={handleChange} />
            <input name="rue" placeholder="Rue" onChange={handleChange} />
            <input name="codePostal" placeholder="Code Postal" onChange={handleChange} />
            <input name="etablissement" placeholder="Etablissement" onChange={handleChange} />
            <button type="submit">Ajouter</button>
        </form>
    );
}

export default UserForm;
