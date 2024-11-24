import { useState  , useReducer} from "react";
import "./App.css"

type Props = {}

function App({}: Props) {


  const [state , dispatch] = useReducer(reducer , {singedIn : false , message : "offline"})

  function reducer(state , action){

    if (action.type === "signin"){

      return { ...state, signedIn: true, message: action.payload };

    }

  }
  return (
    <>


    <p>value : {state.count}</p>
    <p style={{color: state.message === "offline" ? "red" : "green"}}>{state.message}</p>

    <button onClick={(e)=>dispatch({type : "signin" , payload : "online"})}> sign in </button>    
    
    
    </>
  )
};

export default App;
