// import { use } from "react"
// import User from "./User";

// export default function Users({ fetchUsers }) {

//     const users = use(fetchUsers);
//     console.log(users);
//     return (
//         <div className="card">
//             <h4>Users:{users.length}</h4>
//             {
//                 users.map(user => <User key={user.id} user={user}></User>)
//             }
//         </div>
//     )
// }

import { use } from "react";
import User from "./User";

export default function Users({ fetchUsers }) {
  // Then ES6 Use
  // export default function Users({ usersPromise }) 

    const users = use(fetchUsers);
    console.log(users);
    return (
      <div className="card">
        <h4>Users:{users.length}</h4>
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    );
  }
