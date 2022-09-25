import React, {useState} from 'react';
import { getPosts } from "./redux/actionCreators/getPost";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "./hooks/useTypeSelector";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const [postId, setPostID] = useState("");
  const [postContent, setPostContent] = useState([] as any);
  const { posts } = useTypedSelector((state) => state.posts);
  console.log("posts: ", posts);

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPostContent(posts);
    dispatch(getPosts(postId));
  };

  return (
    <div className="App">
      <div>
        <form onSubmit={onSubmitHandler}>
          <h1>Trang xem blog</h1>
          <input
            type={"number"}
            value={postId}
            onChange={(e) => setPostID(e.target.value)}
            placeholder="Vui lòng nhập ID bài post..."
          />
          <button type="submit"> submit </button>
        </form>
      </div>

      <h3>Nội dung blog ở đây nhé!</h3>
      {!postId ? (
        <ul>
          {posts?.map((item: any) => (
            <li key={item.id}>
              <h5>Bài post số: {item?.id}</h5>
              <h3>{item?.title}</h3>
              <p>{item?.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <>
          <h5>Bài post số: {postContent?.id}</h5>
          <h3>{postContent?.title}</h3>
          <p>{postContent?.content}</p>
        </>
      )}
    </div>
  );
}

export default App;
