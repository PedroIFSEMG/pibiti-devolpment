import { Outlet } from 'react-router-dom';
import UserHeader from './UserHeader';
import UserFooter from './UserFooter';
import './UserLayout.css';

const UserLayout = () => {
  return (
    <div className="user-layout">
      <UserHeader />
      <main className="user-main">
        <Outlet />
      </main>
      <UserFooter />
    </div>
  );
};

export default UserLayout;
