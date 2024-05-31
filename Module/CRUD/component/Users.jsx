import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserList } from '../store/UserSlice';

const Users = () => {
  const dispatch = useDispatch();
  const { UserListData, loader } = useSelector((state) => state.User)
  
  useEffect(() => {
    dispatch(UserList())
  }, [dispatch])

  return (
    <>
      <table className="table table-responsive w-75">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
            <th scope="col">website</th>
            <th colSpan={2}>
             <th>action</th>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            loader ?
              <span>Loading</span> :
              UserListData?.map((x) => (
                <tr key={x?.id}>
                  <th scope="row">{x?.id}</th>
                  <td>{x?.title}</td>
                  <td>{x?.body}</td>
                  <td><div><i class="fa-solid fa-pencil"></i></div></td>
                  <td><div><i class="fa-solid fa-trash"></i></div></td>
                </tr>
              ))
          }
        </tbody>
      </table>
    </>
  )
}

export default Users
