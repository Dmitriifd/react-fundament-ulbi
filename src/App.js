import React, { useState, useRef } from 'react';
import './styles/App.css';
import Counter from './components/Counter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';



function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'БJavaScript', body: 'БDescription' },
    { id: 2, title: 'МJavaScript 2', body: 'ВDescription' },
    { id: 3, title: 'АJavaScript 3', body: 'АDescription' },
  ]);
  const [posts2, setPosts2] = useState([
    { id: 1, title: 'Python', body: 'Description' },
    { id: 2, title: 'Python 2', body: 'Description' },
    { id: 3, title: 'Python 3', body: 'Description' },
  ]);

  const [value, setValue] = useState('Текст в инпуте')
  const [selectedSort, setSelectedSort] = useState('')

  const [searchQuery, setSearchQuery] = useState('')

  function getSortedPosts() {
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;
  }

  const sortedPosts = getSortedPosts()

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

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    
  }

  return (
    <div className="App">

      <Counter />
      <h1>{value}</h1>
      <input
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <PostForm create={createPost} />
      <div>
        <MyInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Поиск..."
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="сортировка по"
          options={[
            { value: 'title', name: 'По названию' },
            { value: 'body', name: 'По описанию' },
          ]}

        />
      </div>
      {/* Условная отрисовка */}
      {posts.length !== 0
        ?
        <PostList remove={removePost} posts={sortedPosts} title="Посты про JS" />
        :
        <h1 style={{ textAlign: 'center' }}>Посты небыли найдены</h1>
      }

      {/* <PostList posts={posts2} title="Посты про Python"/> */}





    </div>
  );
}

export default App;
