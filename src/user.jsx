import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetching } from "./store";



function User(){
  let dispatch=  useDispatch()
    let data = useSelector(
        (state) => state.user.user,
        
    )
    console.log(data);

    let status = useSelector(
        (state) => state.user.status
    )
    let error = useSelector(
        (state) => state.user.error
    )

  useEffect(
    ()=>{
      dispatch(fetching())
    },[]
  )
    return (
        <>

        <div className="container">
            <h3 className="text-center text-primary">Handling api data using Redux-toolkit Example</h3>

            {status=="Loading"&& <h2>Loading...</h2> }
           
            {status=="complete"&& <table className="table table-bordered w-75 align-center">
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    </tr>
              
                </thead>
                <tbody>
                   {data.map((item)=>{
                    return <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                    </tr>
                   })}
                </tbody>
            </table> }   
            {status=="error"&& <h2 className="text-danger">An error occured</h2> }
              

        </div>
        </>
    )
}
export default User;