import Header from '../compoments/Header';
import Footer from '../compoments/Footer';
import { Space, Table } from 'antd';

import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import Logout from '../pages/login/LogOut';
import image1 from '../assets/img/img-8.jpg';

function ProductListAdmin() {
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Image',
      key: 'image',
      dataIndex: 'image',
      render: image => (
        <img src={image} alt="Preview" style={{ maxWidth: '80px' }} />
      ),
    },
    {
      title: 'Category',
      key: 'category',
      dataIndex: 'category',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/admin/editproduct/${record.id}`}>
            <button className="px-2 py-1 bg-blue-500 text-white border-none cursor-pointer rounded">
              Sửa
            </button>
          </Link>

          <button
            className="px-2 py-1 bg-red-500 text-white border-none cursor-pointer rounded"
            onClick={() => deleteProduct(record.id)}
          >
            Xoá
          </button>
        </Space>
      ),
    },
  ];

  const postApi = 'http://localhost:3000/products';

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const deleteProduct = id => {
    const confirmDelete = window.confirm('Bạn có chắc chắn muốn xoá không?');
    if (confirmDelete) {
      fetch(`${postApi}/${id}`, { method: 'DELETE' })
        .then(response => {
          if (!response.ok) {
            throw new Error('Lấy dữ liệu xoá không thành công');
          }
          toast.success('Xoá thành công !');
          fetchData();
        })
        .catch(error => console.error(error));
    }
  };

  const fetchData = () => {
    fetch(postApi)
      .then(response => {
        if (!response.ok) {
          throw new Error('Lấy dữ liệu không thành công');
        }
        return response.json();
      })
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <div className="color h-20 w-full bg-gray-200"></div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-2 bg-gray-200">
            <div className="admin text-center mb-10">
              <img
                className="h-32 w-32 m-auto rounded-full mb-2"
                src={image1}
                alt=""
              />

              <p className="text-center text-lg font-semibold"></p>
            </div>
            <ul>
              <li className="mb-10 ml-5">
                <a
                  className="text-xl font-semibold px-2 hover:text-lime-600"
                  href="/admin"
                >
                  <i className="fa-regular fa-address-book mr-2 text-lime-500"></i>
                  Danh sách sản phẩm
                </a>
              </li>
              <li className="mb-10 ml-5">
                <a
                  className="text-xl font-semibold px-2 hover:text-lime-600"
                  href="/admin/addproduct"
                >
                  <i className="fa-solid fa-plus mr-2 text-amber-500"></i>
                  Thêm sản phẩm
                </a>
              </li>
              <li className="mb-10 ml-5">
                <a
                  className="text-xl font-semibold px-2 hover:text-lime-600"
                  href="/admin/editproduct/:id"
                >
                  <i className="fa-solid fa-screwdriver-wrench text-blue-500 mr-2"></i>
                  Sửa sản phẩm
                </a>
              </li>
              <li className="mb-10 ml-5">
                <a
                  className="text-xl font-semibold px-2 hover:text-lime-600"
                  href="/admin/editproduct/:id"
                >
                  <i className="fa-regular fa-trash-can text-red-500 mr-2"></i>
                  Xoá sản phẩm
                </a>
              </li>

              <li className="mb-10 ml-5">
                <Logout />
              </li>
            </ul>
          </div>
          <div className="col-span-10 p-1">
            <div className="mb-5 mt-5"></div>
            <Table columns={columns} dataSource={products} />
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default ProductListAdmin;
