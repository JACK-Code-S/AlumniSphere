import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login"; // Redirect if no token
      return;
    }

    axios
      .get("http://localhost:5000/api/profile", {
        headers: { Authorization: token },
      })
      .then((response) => setUser(response.data))
      .catch((error) => console.error("Error fetching profile:", error));
  }, []);

  return (
    <div>
      <h2>User Profile</h2>
      {user ? (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
