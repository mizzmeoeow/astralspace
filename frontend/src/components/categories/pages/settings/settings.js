import { useContext, useState } from "react";
import { Context } from "../../../../hooks/reducerAuth";
import axios from "axios";

function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    dispatch({ type: "UPDATE_START" });

    const updatedUser = {
      userId: user.id,
      username,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        console.log("inside try");

        await axios.post("upload", data);
        console.log("done");
        console.log(data);
        console.log(filename);
        console.log(file.name);
        console.log(updatedUser);
      } catch (err) {
        console.log("catch error");
      }
    }
    try {
      console.log("inside try2");

      const res = await axios.put("users/", updatedUser);
      console.log(res);
      setSuccess(true);

      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      console.log(res);
      console.log(res.data);

      console.log(updatedUser);
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value) || null}
            autoComplete="none"
          />
          <button className="settingsSubmit" type="submit">
            Update2
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
    </div>
  );
}

export default Settings;
