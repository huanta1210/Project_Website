import Header from '../../compoments/Header';
import Footer from '../../compoments/Footer';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async dataLogin => {
    try {
      const resoponse = await axios.post(
        'http://localhost:3000/login',
        dataLogin
      );
      const { accessToken, user } = resoponse.data;
      console.log(accessToken, user.role);

      if (!resoponse) {
        toast.error('Lấy dữ liệu không thành công');
        return;
      }
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', accessToken);
      localStorage.setItem('role', user.role);

      if (user.role === 'admin') {
        toast.success('Đăng nhập thành công', {
          onClose: () => {
            reset();
            navigate('/admin/product/list');
          },
          autoClose: 1000,
        });
      } else {
        toast.success('Đăng nhập thành công', {
          onClose: () => {
            reset();
            navigate('/');
          },
          autoClose: 1000,
        });
      }
    } catch (error) {
      toast.error('lỗi xử lí trang');
      console.error(error);
    }
  };

  return (
    <div>
      <header>
        <Header />
      </header>

      <main className="mx-96 main-login">
        <div className="login flex flex-col items-center justify-center mt-28 mr-12">
          <div className="login-title">
            <h1 className="text-5xl text-slate-600">Login to your account</h1>
            <div className="login-platform mt-9">
              <div className="login-facebook border p-3 bg-blue-800 inline-block mr-6">
                <a className="text-white flex items-center" href="#">
                  <i className="fa-brands fa-facebook pr-3 text-4xl border-r-2"></i>
                  <span className="mx-8 text-lg">Facebook</span>
                </a>
              </div>
              <div className="login-google border p-3 bg-orange-600 inline-block">
                <a className="flex items-center" href="#">
                  <i className="fa-brands fa-google-plus-g text-4xl pr-3 border-r-2 text-white"></i>
                  <span className="mx-9 text-lg text-white">Google</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="login-form my-10">
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group mb-8">
                <label className="text-2xl text-slate-600" htmlFor="email">
                  Email:<span className="text-red-500">*</span>
                </label>
                <br />
                <input
                  className="w-full py-6 mt-3 rounded-md border-gray-300"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                  {...register('email', {
                    required: 'Không bỏ trống email',
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: 'Email không đúng định dạng',
                    },
                  })}
                />
                <br />
                {errors.email && (
                  <span className="form-error text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="form-group mb-8">
                <label className="text-2xl text-slate-600" htmlFor="password">
                  Password:<span className="text-red-500">*</span>
                </label>
                <br />
                <input
                  className="w-full py-6 mt-3 rounded-md border-gray-300"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  {...register('password', {
                    required: 'Không bỏ trống password',
                    minLength: {
                      value: 6,
                      message: 'Mật khẩu không không được dưới 6 kí tự',
                    },
                  })}
                />
                {errors.password && (
                  <span className="form-error text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </div>

              <div className="form-group text-center">
                <button
                  className="btn-submit border border-black py-6 px-36 text-2xl text-white bg-black font-bold"
                  type="submit"
                >
                  Login
                </button>
                <p className="text-xl text-red-500 my-6">
                  <a href="/login_recover">Forgot password ?</a>
                </p>
                <p className="text-xl">
                  Do you already have an account? Register{' '}
                  <a className="text-red-500" href="/register">
                    Here.
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Login;
