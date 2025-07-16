import React, { useState } from "react";
import "./UserSettings.css";

const UserSettings = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [notifications, setNotifications] = useState(true);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [newsletter, setNewsletter] = useState(true);

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Settings saved:", {
      currentPassword,
      newPassword,
      notifications,
      twoFactorAuth,
      newsletter,
    });
    alert("Settings saved successfully! (Connect to backend later)");
  };

  return (
    <div className="user-settings-page">
      <div className="settings-card">
        <h2>Account Settings</h2>
        <form className="settings-form" onSubmit={handleSave}>
          <label>Current Password</label>
          <input
            type="password"
            placeholder="Enter current password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />

          <label>New Password</label>
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <div className="toggle-group">
            <label>
              <input
                type="checkbox"
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
              />
              Enable Email Notifications
            </label>
          </div>

        

          <button type="submit">Save Settings</button>
        </form>
      </div>
    </div>
  );
};

export default UserSettings;
