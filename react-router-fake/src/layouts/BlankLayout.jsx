import { Outlet } from 'react-router-dom';

export default function BlankLayout () {
  return (
    <div className='blank-layout'>
      <Outlet />
    </div>
  )

}