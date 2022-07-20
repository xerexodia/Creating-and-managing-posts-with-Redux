import './App.css';
import PostsList from './features/post/PostsList';
import AddPostForm from './features/post/AddPostForm';

function App() {
  return (
    <div>
      <AddPostForm/>
      <PostsList/>
    </div>
  );
}

export default App;
