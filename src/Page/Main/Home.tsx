import React from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../Config/Firebase";
import { useState,useEffect } from "react";
import { Post } from "./Post";
 export interface postData {
  id:string
  tittle: string;
  description: string;
  userName: string;
  userId: string;
}

const Home = () => {
  const [postList, setpostList] = useState<postData[] | null>(null);
  const postRef = collection(db, "post");

  const getPost = async () => {
    const data = await getDocs(postRef);
    setpostList(data.docs.map((doc)=>({...doc.data(), id:doc.id})) as postData[])
  };

  useEffect(() => {
    getPost();

  }, [])
  
  return <div>
    {postList?.map(post=> <Post key={post.id} post={post}/>)}
  </div>;
};

export default Home;
