import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    navigate('/login');
  };

  return (
    <button
      onClick={handleLogout}
      className="text-xl font-semibold px-2 hover:text-lime-600"
    >
      <i className="fa-solid fa-arrow-right-from-bracket text-red-500 mr-2"></i>
      Đăng xuất
    </button>
  );
};

export default Logout;
