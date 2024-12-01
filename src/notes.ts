/*

//useContext() = React Hook that allows you to share values
//                            between multiple levels of components
//                            without passing props through each level



//PROVIDER COMPONENT

// 1. import {createContext} from 'react';

// 2. export const MyContext = createContext();

// 3. <MyContext.Provider value={value}>
//		<Child />
//    </MyContext.Provider>



//CONSUMER COMPONENTS

// 1. import React, {useContext} from 'react';
//     import {MyContext} from './ComponentA';
// 2. const value = useContext(MyContext);

//---------- CSS ----------
.box{
    border:3px solid;
    padding:25px;
}

//---------- App ----------
import ComponentA from './ComponentA.jsx';

import React from 'react';

function App() {
    return(<ComponentA />);
}

export default App;

//---------- ComponentA ----------
import React, {useState, createContext} from 'react';
import ComponentB from './ComponentB.jsx';

export const UserContext = createContext();

function ComponentA(){
    const [user, setUser] = useState("BroCode");

    return(
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB />
            </UserContext.Provider>
        </div>
    );
}

export default ComponentA

//---------- ComponentB ----------
import ComponentC from './ComponentC.jsx';

function ComponentB(){

    return(
        <div className="box">
            <h1>ComponentB</h1>
            <ComponentC />
        </div>
    );
}

export default ComponentB

//---------- ComponentC ----------
import ComponentD from './ComponentD.jsx';

function ComponentC(){

    return(
        <div className="box">
            <h1>ComponentC</h1>
            <ComponentD />
        </div>
    );
}

export default ComponentC

//---------- ComponentD ----------
import React, {useContext} from 'react';
import {UserContext} from './ComponentA.jsx';

function ComponentD(){

    const user = useContext(UserContext);

    return(
        <div className="box">
            <h1>ComponentD</h1>
            <h2>{`Bye ${user}`}</h2>
        </div>
    );
}

export default ComponentD

*/

//TODO : useContext : allows you to subscribe to React context without
//             having to pass it down manually. It accepts a context object
//             (the value returned from React.createContext) and returns
//             the current context value, as given by the nearest context
//             provider for the given context.
//TODO : nested children : is a pattern of React components that pass children
//             to other components as props.
//TODO : useRef : allows you to create a reference to a DOM node or a value
//             that persists across renders. It takes an initial value as an
//             argument and returns an object with a current property that's
//             initialized with the passed argument.
//TODO : useMemo : allows you to memoize a value so that it's not recalculated
//             on every render. It takes a function that returns a value and
//             a dependency array as arguments. When the dependencies change,
//             the function is called again to get a new value.
//TODO : useCallback : allows you to memoize a function so that it's not
//             recreated on every render. It takes a function and a dependency
//             array as arguments. When the dependencies change, the function
//             is created again to get a new reference.
//TODO : useNavigate : allows you to programmatically navigate by getting
//             a function that lets you navigate to the new location.
//TODO : useLocation : allows you to get the current location. It returns a
//             location object that has the following properties: pathname,
//             search, hash, state, and key.
//TODO : useSearchParams : allows you to get the current search parameters.
//             It returns an array of the search parameters, where each item is
//             an array of two values, the key and the value.
//TODO : useOutlet : allows you to get the context value of a parent route
//             component. It returns the context value of the nearest route
//             component that renders the outlet.
//TODO : useOutletContext : allows you to get the context value of the nearest
//             route component that renders the outlet. It takes an optional
//             context object as an argument and returns the context value if
//             it exists, or the given context object if it doesn't exist.
