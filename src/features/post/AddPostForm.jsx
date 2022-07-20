import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const [reqStatus, setReqStatus] = useState("idle");

  const users = useSelector(selectAllUsers);
  const dispatch = useDispatch();
  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onAuthorChange = (e) => setUserId(e.target.value);

  // cheking the existing of our data and the request status
  const canSave =
    [title, content, userId].every(Boolean) && reqStatus === "idle";

  //adding the post to the redux state tree
  const onSavePost = () => {
    if (canSave) {
      try {
        setReqStatus("pending");
        dispatch(addNewPost({ title, body: content, userId })).unwrap();
        setTitle("");
        setContent("");
        setUserId("");
      } catch (err) {
        console.error("failed to add the post");
      } finally {
        setReqStatus("idle");
      }
    }
  };

  // setting the user(author) select option
  const userMenu = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add a new Post</h2>
      <form>
        <label>Post Title :</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChange}
        />

        <label>Author :</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChange}>
          <option value=""></option>
          {userMenu}
        </select>
        <label>Post Content :</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChange}
        />
        <button type="button" onClick={onSavePost} disabled={!canSave}>
          Submit Post
        </button>
      </form>
    </section>
  );
};
export default AddPostForm;
