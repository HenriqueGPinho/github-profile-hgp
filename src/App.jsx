import { useEffect, useState } from "react";
import Header from "./Header";
import Repos from "./Repos";


export default function App() {
  const [userAPI, setUserAPI] = useState([])
  const [reposAPI, setReposAPI] = useState([])
  
  useEffect(r => {
    fetch('https://api.github.com/users/henriquegpinho')
      .then(r => r.json())
      .then(res => setUserAPI(res))
  }, [])

  useEffect(r => {
    fetch('https://api.github.com/users/henriquegpinho/repos')
      .then(r => r.json())
      .then(res => setReposAPI(res))
  }, [])


  return (
    <>
      <Header avatar={userAPI.avatar_url} user={userAPI.login} />
      <Repos repos={reposAPI} />
    </>
  )
}