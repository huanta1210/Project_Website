import Header from '../compoments/Header';
import Footer from '../compoments/Footer';

import { toast, ToastContainer } from 'react-toastify';

import axios from 'axios';
import { useForm } from 'react-hook-form';

function AddProduct() {
  const postApi = 'http://localhost:3000/products';
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const validateNoSpace = value => {
    return (
      value.trim() !== '' || 'Không được để trống hoặc chỉ chứa khoảng trắng'
    );
  };

  const onSubmit = async productAdd => {
    await axios
      .post(postApi, productAdd)
      .then(response => {
        if (response) {
          toast.success('Thêm sản phẩm thành công !');
          setTimeout(() => {
            window.location.href = '/admin/product/list';
          }, 1500);
        }
      })
      .catch(err => {
        toast.error('Api lỗi !');
        console.error(err);
      });
  };

  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="mx-96">
        <div className="login-form my-10 ">
          <h1 className="text-center text-4xl text-slate-800 font-bold">
            Add Product
          </h1>
          <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group mb-8">
                <label className="text-2xl text-slate-600">
                  Title:<span className="text-red-500">*</span>
                </label>{' '}
                <br />
                <input
                  className="w-full py-6 mt-3 rounded-md border-gray-300"
                  type="text"
                  name="title"
                  {...register('title', {
                    required: 'Không bỏ trống tiêu đề',
                    validate: validateNoSpace,
                  })}
                />
                {errors.title && (
                  <span className="text-red-500">{errors.title.message}</span>
                )}
              </div>

              <div className="form-group mb-8">
                <label className="text-2xl text-slate-600">
                  Price:<span className="text-red-500">*</span>
                </label>{' '}
                <br />
                <input
                  className="w-full py-6 mt-3 rounded-md border-gray-300"
                  type="text"
                  name="price"
                  {...register('price', {
                    required: 'Không bỏ trống giá',
                    pattern: {
                      value: /^\d+$/,
                      validate: validateNoSpace,
                      message: 'Giá không được nhập chữ và giá trị âm',
                    },
                  })}
                />
                {errors.price && (
                  <span className="text-red-500">{errors.price.message}</span>
                )}
              </div>

              <div className="form-group mb-8">
                <label className="text-2xl text-slate-600">
                  Image:<span className="text-red-500">*</span>
                </label>{' '}
                <br />
                <input
                  className="w-full py-6 mt-3 rounded-md border-gray-300"
                  type="text"
                  name="image"
                  id="image"
                  {...register('image', {
                    required: 'Không bỏ trống ảnh',
                    validate: validateNoSpace,
                  })}
                />
                {errors.image && (
                  <span className="text-red-500">{errors.image.message}</span>
                )}
              </div>

              <div className="form-group text-center ">
                <button
                  className="btn-submit border border-black py-6 px-36 text-2xl text-white bg-black font-bold"
                  type="submit"
                >
                  Create Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

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
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default AddProduct;
