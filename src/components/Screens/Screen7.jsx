import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FetchRandomUserList } from '../../Redux/Action';

function Screen7() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(FetchRandomUserList())
  }, [dispatch]);
  return (
    <div className="screen">
      <h2>Screen 7</h2>
      <table id='customers'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          { user?.random?.results &&  user.random.results?.map((item) => (
            <tr key={item.id}>
              <td>{item.name.first}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Screen7