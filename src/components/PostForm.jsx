import { React, useState} from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const PostForm = ({create}) => {
    const [post, setPost] = useState({ title: '', body: '' });

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = { 
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({ title: '', body: '' })
    }

    return ( 
        <form>
            {/* Управляемый компонент */}
            <MyInput
                // value={title}
                value={post.title}
                // onChange={event => setTitle(event.target.value)}
                onChange={event => setPost({ ...post, title: event.target.value })}
                type="text"
                placeholder="Название поста"
            />
            {/* Неуправляемый компонент  с ref*/}
            <MyInput
                // ref={bodyInputRef}
                // value={body}
                value={post.body}
                // onChange={event => setBody(event.target.value)}
                onChange={event => setPost({ ...post, body: event.target.value })}
                type="text"
                placeholder="Описание поста"
            />
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
     );
}
 
export default PostForm;