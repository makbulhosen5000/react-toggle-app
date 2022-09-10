import React,{useState,useEffect} from 'react';

function useFetch(url) {
    const [data,setData] = useState(null);
    const [isLoading,setIsLoading] = useState(true);
    const [isError,setIsError] = useState(null);
     useEffect(()=>{
      fetch(url)
      .then((res)=>{
        if(!res.ok){
          throw Error("Fetching is not Successful");
        }else{
          return res.json();
        }
  
      })
      .then((data)=>{
        setData(data);
        setIsLoading(false);
      })
      .catch((error)=>{
          setIsError(error.message)
          setIsLoading(false);
      })
     },[url]);

     return{data,isLoading,isError}
}

export default useFetch