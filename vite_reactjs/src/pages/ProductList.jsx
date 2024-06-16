import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Header from '../compoments/Header';
import Footer from '../compoments/Footer';
import { useNavigate } from 'react-router';

function ProductList() {
  const navigate = useNavigate();
  const postApi = 'http://localhost:3000/products';

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(postApi)
      .then(response => {
        if (!response.ok) {
          toast.error('Lỗi lấy dữ liệu');
        }
        return response.json();
      })
      .then(data => setProducts(data))
      .catch(error => {
        toast.error('Lỗi API');
        console.error(error);
      });
  };

  const addCart = id => {
    const product = products.find(product => product.id === id);

    if (!product) return;

    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingCartproduct = existingCart.find(product => product.id === id);

    if (existingCartproduct) {
      existingCartproduct.quantity = existingCartproduct.quantity + 1;
    } else {
      existingCart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(existingCart));

    toast.success('Thêm vào giỏ hàng thành công', {
      onClose: () => {
        navigate(`/cart/${id}`);
      },
      autoClose: 1500,
    });
  };

  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="container mx-auto p-4">
        <div className="flex">
          <div className="w-1/4 p-4 bg-gray-100">
            <div className="categories">
              <h4 className="font-bold text-2xl mb-5">Categories</h4>
              <ul>
                <li className="py-1.5">
                  <a className="text-xl" href="">
                    All product
                  </a>
                  <span className="float-right">500</span>
                </li>
                <li className="py-1.5">
                  <a className="text-xl" href="">
                    All product
                  </a>
                  <span className="float-right">500</span>
                </li>
                <li className="py-1.5">
                  <a className="text-xl" href="">
                    All product
                  </a>
                  <span className="float-right">500</span>
                </li>
                <li className="py-1.5">
                  <a className="text-xl" href="">
                    All product
                  </a>
                  <span className="float-right">500</span>
                </li>
                <li className="py-1.5">
                  <a className="text-xl" href="">
                    All product
                  </a>
                  <span className="float-right">500</span>
                </li>
                <li className="py-1.5 mb-4">
                  <a className="text-xl" href="">
                    All product
                  </a>
                  <span className="float-right">500</span>
                </li>
              </ul>
            </div>
            <div className="fliter mb-5">
              <h4 className="font-bold text-2xl mb-5">Filter</h4>
              <label className="font-bold text-xl mb-3">Price</label>
              <input
                type="range"
                name=""
                min="1"
                max="1000"
                className="slider"
                id=""
              />
              <div>
                <p className="inline-block">100$</p>
                <p className="float-right inline-block">500$</p>
              </div>
            </div>
            <div className="categories">
              <h4 className="font-bold text-2xl mb-5">Brands</h4>
              <ul>
                <li className="py-1.5">
                  <a className="text-xl" href="">
                    All product
                  </a>
                  <span className="float-right">10</span>
                </li>
                <li className="py-1.5">
                  <a className="text-xl" href="">
                    All product
                  </a>
                  <span className="float-right">40</span>
                </li>
                <li className="py-1.5">
                  <a className="text-xl" href="">
                    All product
                  </a>
                  <span className="float-right">100</span>
                </li>
                <li className="py-1.5">
                  <a className="text-xl" href="">
                    All product
                  </a>
                  <span className="float-right">90</span>
                </li>
                <li className="py-1.5">
                  <a className="text-xl" href="">
                    All product
                  </a>
                  <span className="float-right">200</span>
                </li>
                <li className="py-1.5 mb-4">
                  <a className="text-xl" href="">
                    All product
                  </a>
                  <span className="float-right">98</span>
                </li>
              </ul>
            </div>

            <div className="colors">
              <h4 className="font-bold text-2xl mb-5">Colors</h4>
              <input type="color" name="" value="#CC0000" id="" />
              <input className="ml-4" type="color" value="#FFCCFF" />
              <input className="ml-4" type="color" value="#FFCC00" />
              <input className="ml-4" type="color" value="#66CCFF" />
              <input className="ml-4" type="color" value="#000000" />
            </div>
          </div>

          <div className="w-3/4 p-4 bg-gray-100">
            <div className="conatiner">
              <div className="sort-by-product">
                <div className="sort-by inline-block mr-3">
                  <button className="font-bold text-2xl text-slate-800 mb-5 p-1 btn-sort-by">
                    Sort by{' '}
                    <i
                      className="fa fa-arrows-v text-xl"
                      aria-hidden="true"
                    ></i>
                  </button>
                </div>

                <div className="fliter-product inline-block">
                  <button
                    type="button"
                    className="font-bold text-2xl text-slate-800 mb-5 p-1 btn-sort-by"
                  >
                    Categories{' '}
                    <i className="fa fa-sort-desc" aria-hidden="true"></i>
                  </button>
                </div>

                <div className="view inline-block float-right">
                  <button className="font-bold text-2xl text-slate-800 mb-5">
                    View <i className="fa fa-bars pl-1" aria-hidden="true"></i>{' '}
                    <i className="fa fa-barcode pl-1" aria-hidden="true"></i>
                  </button>
                </div>
              </div>

              <div className="product mt-4">
                <div className="product-list flex flex-wrap justify-between gap-4">
                  {products.map(product => (
                    <div key={product.id} className="product-item">
                      <a href={`/products/${product.id}`}>
                        <img className="w-72 h-72" src={product.image} alt="" />
                      </a>
                      <p className="title pt-3 text-2xl">{product.title}</p>
                      <p className="price pt-3 text-2xl inline-block">
                        {product.price}$
                      </p>
                      <div className="add-cart">
                        <button
                          onClick={() => addCart(product.id)}
                          className=""
                        >
                          Add Cart
                          <i className="fa fa-cart-plus" aria-hidden="true"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default ProductList;
