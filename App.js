import React,{useState} from "react"
import axios from "axios"
import './App.css'
const App=()=>{
    let [moviesname,setMoviesname] = useState('')
    let[movies,setMovies]= useState([])
    let[loading , setloading] = useState(false)
    let[status,setStatus]=useState(null)
   let handleClick=()=>{
    setMovies([])
    setloading(true)
    axios.get(https://www.omdbapi.com/?apikey=c951ff1&s=${moviesname})
    .then((res)=>{
      setloading(false)
      setStatus(true)
      if(res.data.Response == "True"){
        setStatus(true)
      setMovies(res.data.Search)
      }else{
        setMovies([])
        setStatus(false)
      }
    })
    setMoviesname("")
   } 
    return(
      <>
      <div class="inp">
      <input 
      value = {moviesname}
      onChange={(e)=>{setMoviesname(e.target.value)}} placeholder='Enter your name'/>
      <button onClick={()=>{handleClick()}}>search</button>

      </div>
      {loading == true ?<p class="status"> loading...</p> : "" }
      {status==false ? <p class="status">404 not found</p> : ""}
      <div class="container">
  
      {movies.map((item,i)=>{
      return  <div class="poster-card">
      <img class="image" src= {${item.Poster}} />
      <p><b>Title</b>{${item.Title}}</p>
      <p><b>Year</b>{${item.Year}}</p>
      </div>
      })}
  
        </div>
      </>
    )
  }
  export default App;
