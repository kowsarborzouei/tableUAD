import usersList from "../usersList/UsersList";
import {useState} from "react";


function Table() {
    const [users, setUsers] = useState(usersList)
    // const [user,setUser]=useState({firstName: '', lastName: ''})
    const handleDelete = (id) => {
        console.log(id)
        setUsers(users.filter(user => user.id !== id))
    }
    // const handleAdd=(e)=>{
    //     console.log(e)
    //     e.preventDefault()
    //     // const data=new FormData(e.target)
    //     // const firstName=data.get('firstName')
    //     // const lastName=data.get('lastName')
    //     // const {firstName,lastName}=user
    //     setUser([...users,{id:Math.random()*100000,...user}])
    //     e.target.reset()
    // }
    // const handleChange=(e)=>{
    //     console.log(e.target.name)
    //
    // }
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <td>id</td>
                    <td>first name</td>
                    <td>last name</td>
                    <td>action</td>
                </tr>
                </thead>
                <tbody>
                {usersList.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>
                            <button onClick={() => handleDelete(item.id)}>Delete</button>
                            <button>Update</button>
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
            <form  action={'https://google.com'}>
                <input  placeholder={'First Name'} type={'text'} name={'firstName'} value={'user.firstName'}/>
                <input  placeholder={'Last Name'} type={'text'} name={'lastName'} value={'user.lastName'}/>
                {/*<button onClick={handleAdd} type={'submit'}>Submit</button>*/}
                <input type={'submit'} />
            </form>
        </div>
    )
}

export default Table