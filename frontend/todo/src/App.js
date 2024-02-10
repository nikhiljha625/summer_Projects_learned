import React, { useContext, useEffect,  } from 'react';
import UserEntry from './UserEntry';
// import { userStateReducer } from './userStateReducer';
// import { initialUserState } from './userStateReducer';
import { UserStateContext, UserStateReducerContext } from './userContext';
import { adduser, getAllUsers } from './userClient';
// import axios from 'axios';

function App() {
  // hooks of react
  // const [users, dispatch] = useReducer(userStateReducer,initialUserState)

  const users = useContext(UserStateContext);
  const dispatch = useContext(UserStateReducerContext);
  

  // 1. Mounting and first render
  // 2. Updates pe
  useEffect(() => {
    getAllUsers(dispatch);
  }, [dispatch])

  
  const onsubmit= (e)=>{
    e.preventDefault();
    
    adduser(e.target.elements.name.value,e.target.elements.college.value,dispatch)
    
  }

  const getUserListHtml = () => {
    return users.map(elem => 
      <UserEntry key={elem.id} id={elem.id} name={elem.name} college={elem.college} grad_year={2020}/>
    );
  }

  
  const getAddUserForm= ()=>{
    return(
      <form onSubmit={onsubmit}>
        <label>name</label>
        <input type="text" name="name"/>
        <label>college</label>
        <input type="text" name="college"/>
        <button>AddUser</button>
      </form>
    )
  }
  return (
    <ul>
      {getAddUserForm()}
      {getUserListHtml()}
    </ul>
  );
}

export default App;


// function App() {

//   const [Todos, setTodos] = useState(
//     [

//     ]
//   )
//   const OnDelete = (data_given) => {

//     setTodos(Todos.filter(Todos => Todos.data !== data_given));
//   }
//   const getUserListHTML = () => {
//     return Todos.map(elem =>
//       <UserEntry data={elem.data} onDelete={OnDelete} />
//     );
//   }
//   const onsubmit = (e) => {
//     e.preventDefault();
//     // console.log(e.target.elements.name.value);
//     // console.log(e.target.elements.college.value);
//     setTodos([
//       ...Todos,
//       {
//         "data": e.target.elements.data.value,
//       }
//     ]
//     )
//   }
//   const getAddUserForm = () => {
//     return (
//       <form onSubmit={onsubmit}>
//         <label>what to Do</label>
//         <input type="text" name="data" />

//         <button>AddTodo</button>
//       </form>
//     )
//   }
//   return (
//     <ul>
//       {getAddUserForm()}
//       {getUserListHTML()}
//     </ul>
//   );

// }

// export default App;


// Prop drilling issue: unneccesaary transfer of states