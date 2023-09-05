import React, { useEffect } from 'react';
import './screen.css'
import { useDispatch, useSelector } from 'react-redux';
import { FetchUserList } from '../../Redux/Action';

const Screen5 = () => {
  const dispatch = useDispatch()
  const userobj = useSelector((state) => state.user.entries)

  useEffect(() => {
    dispatch(FetchUserList())
  }, [dispatch]);
  return (
    <div className="screen">
      <h2>Screen 5</h2>
      <table id='customers'>
        <thead>
          <tr>
            <th>Category</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {userobj?.entries?.length > 0 && userobj?.entries?.slice(0,5).map((item) => (
            <tr key={item.id}>
              <td>{item.Category}</td>
              <td>{item.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Screen5;
