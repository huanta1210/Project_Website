import Header from '../compoments/Header';
import Footer from '../compoments/Footer';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { toast } from 'react-toastify';

// axios.defaults.baseURL = 'http://localhost:3000';

function EditProduct() {
  const postApi = 'http://localhost:3000/products';
  const { id } = useParams();
  const [productId, setProductId] = useState({
    title: '',
    price: '',
    image: '',
  });

  useEffect(() => {
    fetch(`${postApi}/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Lấy dữ liệu không thành công');
        }
        return response.json();
      })
      .then(data => setProductId(data))
      .catch(error => {
        toast.error('Lấy dữ liệu sửa không thành công !');
        console.error(error);
      });
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    await axios
      .put(`${postApi}/${id}`, productId)
      .then(respone => {
        if (!respone) {
          throw new Error('Lấy dữ liệu không thành công');
        } else {
          toast.success('Cập nhật sản phẩm thành công!');
          setTimeout(() => {
            window.location.href = '/admin/product/list';
          }, 1500);
        }
      })
      .catch(err => {
        toast.error('Cập nhật sản phẩm không thành công !');
        console.error(err);
      });
  };

  const handleChange = e => {
    setProductId({ ...productId, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="mx-96">
        <div className="login-form my-10 ">
          <h1 className="text-center text-4xl text-slate-800 font-bold">
            Edit Product
          </h1>
          <div>
            <form action="" onSubmit={handleSubmit}>
              <div className="form-group mb-8">
                <label className="text-2xl text-slate-600">
                  Title:<span className="text-red-500">*</span>
                </label>{' '}
                <br />
                <input
                  className="w-full py-6 mt-3 rounded-md border-gray-300"
                  type="text"
                  name="title"
                  value={productId.title}
                  onChange={handleChange}
                />
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
                  value={productId.price}
                  onChange={handleChange}
                />
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
                  value={productId.image}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group text-center ">
                <button
                  className="btn-submit border border-black py-6 px-36 text-2xl text-white bg-black font-bold"
                  type="submit"
                >
                  Update Product
                </button>
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

export default EditProduct;
