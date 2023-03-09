import React from "react";
import "./App.css"
import {useEffect,useState} from "react";
import {db} from "./firebase";
import {collection,doc,getDocs,addDoc,deleteDoc} from "firebase/firestore";


const App=()=>{
  const [posts,setPosts]=useState([]);
  const postsCollectionRef = collection(db,"posts");
  const [newPostcontent,setNewPostcontent] =useState(0);
  const [newbtitle,setNewbtitle]=useState(0);
  const createPost =async()=>{
    await addDoc(postsCollectionRef,{btitle:newbtitle,bcontent:newPostcontent});
  }
  const deletepost =async(id)=>{
    const postDoc =doc(db,"posts",id);
    await deleteDoc(postDoc);
  }
  useEffect(()=>{
  const getPosts =async ()=>{
    const data = await getDocs(postsCollectionRef);
     setPosts(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
  };
  getPosts();
},[]);
  return(
    <div >
      <h1 class="heading">Create New Blog Page</h1>
      <center>
      <input type="text" placeholder="Title" onChange={(event)=>{
        setNewbtitle(event.target.value);
      }}/>
      <textarea type="text" className="content" placeholder="BlogContent"
      onChange={(event)=>{setNewPostcontent(event.target.value)}}/><br/>
      <button onClick={createPost}>Create</button>
      </center>

      <h1 class="heading"> Blogs</h1>
        {posts.map((post)=>{
          
          return <div className="pages">
            <h1 className="bnew">{post.btitle}</h1>
                      <h1 className="ncontent">{post.bcontent}<br/>
                      <button className="delete" onClick={()=>{
        deletepost(post.id);
      }}>Delete</button></h1></div>
        })}
      </div>
   )
}
export default App;