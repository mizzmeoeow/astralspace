import { useContext, useState } from "react";
import axios from "axios";
import { Context } from "../../../../hooks/reducerAuth";

export default function Write() {
  const [title, setTitle] = useState("");
  const [body, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    let User = JSON.parse(user);
    console.log(User.username);

    // console.log(newPost);
    e.preventDefault();
    const newPost = {
      title,
      body,
      username: User.username,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        console.log("inside try1");
        await axios.post("/upload", data);
        console.log(data);
      } catch (err) {}
    }
    try {
      console.log(newPost);
      console.log("inside try2");
      console.log(axios.post("posts/", newPost));
      const res = await axios.post("posts/", newPost, {
        // headers: {
        //   Authorization: `Bearer ${sessionStorage.getItem(decoded)}`,
        // },
      });
      window.location.replace("/post/" + res.decoded._id);
    } catch (err) {}
  };

  console.log(user);
  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus addImage">Add Image</i>
          </label>
          <br />
          <input
            id="fileInput"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            className="writeInput writeTitle"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
