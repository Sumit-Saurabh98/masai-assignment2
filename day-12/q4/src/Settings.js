import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "./UserContext.JS";

export default function Settings() {
  const { user, setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    setFormData(user);
  }, [user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData);
  };

  return (
    <div>
      <h2>Settings</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
