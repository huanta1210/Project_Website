import Header from '../../compoments/Header';
import Footer from '../../compoments/Footer';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const registerForm = async registerLogin => {
    await axios
      .post('http://localhost:3000/register', registerLogin)
      .then(respone => {
        if (!respone) {
          throw new Error('Đăng kí tài khoản không thành công');
        } else {
          toast.success('Đăng kí tài khoản thành công');
          reset();
          setTimeout(() => {
            window.location.href = '/login';
          }, 1500);
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="mx-96 main-login">
        <div className="login flex flex-col items-center justify-center mt-28 mr-12">
          <div className="login-title">
            <h1 className="text-5xl text-slate-600 ">Register an account</h1>
            <p className="text-xl ml-4 mt-5 text-slate-600">
              If you don't have an account yet, register here
            </p>
            <div className="login-platform mt-9">
              <div className="login-facebook border p-3 bg-blue-800 inline-block mr-6">
                <a className="text-white flex items-center" href="#">
                  <i className="fa-brands fa-facebook pr-3 text-4xl border-r-2"></i>
                  <span className="mx-8 text-lg">Facebook</span>
                </a>
              </div>
              <div className="login-google border p-3 bg-orange-600 inline-block">
                <a className=" flex items-center" href="#">
                  <i className="fa-brands text-white fa-google-plus-g text-4xl pr-3 border-r-2"></i>
                  <span className="mx-9 text-lg text-white">Google</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="login-form my-10 ">
          <div>
            <form action="" onSubmit={handleSubmit(registerForm)}>
              <div className="form-group mb-8">
                <label className="text-2xl text-slate-600" htmlFor="name">
                  Name:<span className="text-red-500">*</span>
                </label>{' '}
                <br />
                <input
                  className="w-full py-6 mt-3 rounded-md border-gray-300"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name"
                  {...register('name', {
                    required: 'Không bỏ trống tên',
                  })}
                />{' '}
                <br />
                {errors.name && (
                  <span className="form-error text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div className="form-group mb-8">
                <label className="text-2xl text-slate-600" htmlFor="phone">
                  Phone:<span className="text-red-500">*</span>
                </label>{' '}
                <br />
                <input
                  className="w-full py-6 mt-3 rounded-md border-gray-300"
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter Your phone"
                  {...register('phone', {
                    required: 'Không bỏ trống số điện thoại',
                    pattern: {
                      value: /^(0[3|5|7|8|9])+([0-9]{8})$/,
                      message: 'Số điện thoại không đúng định dạng',
                    },
                  })}
                />{' '}
                <br />
                {errors.phone && (
                  <span className="form-error text-red-500">
                    {errors.phone.message}
                  </span>
                )}
              </div>
              <div className="form-group mb-8">
                <label className="text-2xl text-slate-600" htmlFor="email">
                  Email:<span className="text-red-500">*</span>
                </label>{' '}
                <br />
                <input
                  className="w-full py-6 mt-3 rounded-md border-gray-300"
                  type="email"
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
                />{' '}
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
                </label>{' '}
                <br />
                <input
                  className="w-full py-6 mt-3 rounded-md border-gray-300"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
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

              <div className="form-group text-center ">
                <button
                  className="btn-submit border border-black py-6 px-36 text-2xl text-white bg-black font-bold"
                  type="submit"
                >
                  Create Account
                </button>
                <p className="text-xl text-red-500 my-6">
                  <a href="/login">Login</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default Register;
