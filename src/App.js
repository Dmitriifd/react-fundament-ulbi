import React, { useState, useRef} from 'react';
import './styles/App.css';
import Counter from './components/Counter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';



function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'JavaScript 2', body: 'Description' },
    { id: 3, title: 'JavaScript 3', body: 'Description' },
  ]);
  const [posts2, setPosts2] = useState([
    { id: 1, title: 'Python', body: 'Description' },
    { id: 2, title: 'Python 2', body: 'Description' },
    { id: 3, title: 'Python 3', body: 'Description' },
  ]);

  const [value, setValue] = useState('Текст в инпуте');

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  // const [post, setPost] = useState({title: '', body: ''});

  // const [title, setTitle] = useState('');
  // const [body, setBody] = useState('');

  // const bodyInputRef = useRef();

 /*  const addNewPost = (e) => {
    e.preventDefault();
    // const newPost = {
    //   id: Date.now(),
    //   title,
    //   body
    // }
    
    setPosts( [...posts, {...post, id: Date.now()}] )
    // setTitle('')
    // setBody('')
    setPost({ title: '', body: '' })
  } */

  return (
    <div className="App">
      
      <Counter/>
      <h1>{value}</h1>
      <input 
        type="text" 
        value={value}
        onChange={event => setValue(event.target.value)}
         />
      <PostForm create={createPost} />
      <PostList remove={removePost} posts={posts} title="Посты про JS"/>
      {/* <PostList posts={posts2} title="Посты про Python"/> */}
        
        

         
     
    </div>
  );
}

export default App;
