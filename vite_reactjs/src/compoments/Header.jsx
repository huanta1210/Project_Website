import { useEffect, useState } from 'react';
import logo from '../assets/img/logo.png';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

function Header() {
  const [user, setUser] = useState(null);
  const [countCart, setCountCart] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    getTokenUser();
    getCartItems();
  }, []);

  const getTokenUser = () => {
    try {
      const token = localStorage.getItem('user');
      if (token) {
        const user = JSON.parse(token);
        if (user && user.name) {
          setUser(user);
        }
      }
    } catch (error) {
      console.error('Error retrieving user token:', error);
    }
  };

  const getCartItems = () => {
    try {
      const getCart = localStorage.getItem('cart');
      if (getCart) {
        const tokenCart = JSON.parse(getCart);
        setCountCart(tokenCart.length);
      }
    } catch (error) {
      console.error('Error retrieving cart items:', error);
      setCountCart(0);
    }
  };

  const handleUserClick = () => {
    const getToken = localStorage.getItem('token');
    if (getToken) {
      toast.success('Đăng nhập thành công');

      navigate('/admin/product/list');
    } else {
      navigate('/login');
    }
  };
  return (
    <header className="container mx-auto">
      <div className="flex ">
        <div className="logo flex-none w-14 py-2">
          <img src={logo} alt="" />
        </div>
        <div className="flex-auto w-64">
          <div className="flex justify-between">
            <nav className="py-4">
              <ul>
                <li className="inline-block pl-9 leading-5">
                  <a className="no-underline text-slate-800 text-2xl" href="/">
                    Home
                  </a>
                </li>
                <li className="inline-block pl-9 leading-5">
                  <a
                    className="no-underline text-slate-800 text-2xl"
                    href="/products"
                  >
                    Shop
                  </a>
                </li>
                <li className="inline-block pl-9 leading-5">
                  <a className="no-underline text-slate-800 text-2xl" href="">
                    About
                  </a>
                </li>
                <li className="inline-block pl-9 leading-5">
                  <a className="no-underline text-slate-800 text-2xl" href="">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div></div>
            <div className="py-4">
              <div className="search-container">
                <form action="">
                  <input
                    className="search-input p-3 px-32 "
                    type="text"
                    name=""
                    id=""
                    placeholder="Search...."
                  />
                  <i className="p-2.5 search-icon fa-solid fa-magnifying-glass text-xl"></i>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-auto w-32 ">
          <div className="flex justify-center header-icons">
            <div className="user-evaluate">
              <i
                className="user-heart fa fa-heart text-3xl p-5 px-12 text-slate-800"
                aria-hidden="true"
              ></i>
            </div>
            <div className="user">
              <button
                onClick={handleUserClick}
                className="text-xl hover:text-green-500"
              >
                <i
                  className="fa-solid fa-user text-3xl p-5 text-slate-800"
                  aria-hidden="true"
                ></i>
                {user ? (
                  <small className="font-semibold">
                    Xin chào
                    <span className="text-lg text-lime-600 pl-1">
                      {user.name}!
                    </span>
                  </small>
                ) : (
                  <small>
                    <span className="text-lg text-slate-700 font-semibold">
                      Tài Khoản
                    </span>
                  </small>
                )}
              </button>
            </div>

            <div className="cart relative inline-block ml-5">
              <a href="/cart/:id" className="text-xl hover:text-green-500">
                <span className="font-semibold">Giỏ hàng</span>
                <i className="fa-solid fa-cart-shopping text-3xl p-5 pl-1 text-slate-800"></i>
              </a>
              <div className="badge absolute top-0 right-0 bg-red-600 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
                {countCart}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
