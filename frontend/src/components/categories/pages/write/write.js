import { useContext, useState } from "react";
import axios from "axios";

export default function Write(props) {
  const [title, setTitle] = useState("");
  const [body, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const user = props.user;

  console.log(user);
  const handleSubmit = async (e) => {
    // let User = JSON.parse(user);
    // console.log(User.username);

    // console.log(newPost);
    let path = this.props.match.path;
    let id = this.props.match.params.id;
    let date = new Date();
    e.preventDefault();
    // const newPost = {
    //   title,
    //   body,
    //   username: user.username,
    // };

    if (file) {
      let formData = new FormData();
      formData = new FormData();
      formData.append("id", this.state.Post.id);
      formData.append("title", this.state.Post.title);
      formData.append("content", this.state.Post.content);
      formData.append("postDate", date.toString());
      // const filename = Date.now() + file.name;
      // formData.append("name", filename);
      // data.append("file", file);
      // newPost.photo = filename;
      // try {
      //   console.log("inside try1");
      //   await axios.post("upload", data);
      //   console.log(data);
      // } catch (err) {}
    }
    try {
      console.log(formData);
      console.log("inside try2");
      console.log(axios.post("posts/", formData));
      e.preventDefault();
      const res = await axios.post("posts/", formData);
      window.location.replace("/post/" + res.decoded._id);
    } catch (err) {
      console.log("there is an error uploading post.");
    }
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
