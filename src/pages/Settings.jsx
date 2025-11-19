import React, { useState } from "react";
import "../assets/css/Settings.css";
import { Box } from "@mui/material";
import ProfileCard from "../components/settings/ProfileCard";
import ProfileForm from "../components/settings/ProfileForm";

const userData = {
  name: "John Doe",
  email: "john@example.com",
  phone: "+1 234 567 890",
  role: "Admin",
  joined: "2023-01-15",
  avatar: "https://i.pravatar.cc/150?img=3",
  lastLogin: "2025-11-18 14:30",
  location: "New York, USA",
  department: "Development",
};

const Settings = () => {
  const [editMode, setEditMode] = useState(false);
  const [user, setUser] = useState(userData);

  const handleSave = (updatedData) => {
    setUser(updatedData);
    setEditMode(false);
  };

  return (
      <Box className="setting-container" style={{ display: "flex", gap: "20px" }}>
        <Box style={{ flex: 1 }}>
          {editMode ? (
              <ProfileForm
                  user={user}
                  onSave={handleSave}
                  onCancel={() => setEditMode(false)}
              />
          ) : (
              <ProfileCard user={user} onEdit={() => setEditMode(true)} />
          )}
        </Box>
      </Box>
  );
};

export default Settings;
