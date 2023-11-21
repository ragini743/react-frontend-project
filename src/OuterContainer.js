import { useEffect, useState } from "react";
import InnerContainer from "./InnerContainer";
const OuterContainer =() => {
    const [state,setState] = useState([])
    useEffect(() =>{
        resultData();
    } ,[]) ;

    const resultData = async () =>{
const data = await fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
const json = await data.json()
console.log("json",json) ; 
const getData = json.results;
setState(getData)
console.log("state",state)
    }
    
    if (state.length === 0) {
        return <h1 className="text-red-500">Loading</h1>
    }
    
   return (
    <div className=" bg-white w-full  max-w-md m-auto p-10">
        {state.map((userData) => <InnerContainer bioData={userData} />)}
{/* <InnerContainer /> */}
    </div>
)
    }
export default OuterContainer;

