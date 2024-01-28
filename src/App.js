import React from "react";
import { useEffect } from "react";



const API_URL = 'http://www.omdbapi.com?apikey=28b65a8c'

const App = () => {

  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`)
    const data = await res.json();

    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies('hereditary');
  }, []);

  return(
    <h1>APPPPPPPPPPPPP</h1>
  );
}


// NOTE: we have to export each one of our components so that we can cal them from somewhere else
export default App;