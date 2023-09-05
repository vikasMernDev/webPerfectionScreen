import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FetchPopulationList } from '../../Redux/Action';

function Screen6() {
  const dispatch = useDispatch()
  const population = useSelector((state) => state.user.population)

  useEffect(() => {
    dispatch(FetchPopulationList())
  }, [dispatch]);
  return (
    <div className="screen">
      <h2>Screen 6</h2>
      <table id='customers'>
        <thead>
          <tr>
            <th>Nation</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          {population && population?.data?.slice(0, 5).map((item) => (
            <tr key={item.id}>
              <td>{item.Nation}</td>
              <td>{item.Population}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Screen6