import Header from '../compoments/Header';
import Footer from '../compoments/Footer';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function ProductDetails() {
  const [count, setCount] = useState(1);
  const postApi = 'http://localhost:3000/products';
  const navigate = useNavigate();

  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductDetails(id);
  }, [id]);

  const getProductDetails = id => {
    fetch(`${postApi}/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Lấy dữ liệu không thành công');
        }
        return response.json();
      })
      .then(data => setProducts([data]))
      .catch(error => console.error(error));
  };

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  const addCart = id => {
    const product = products.find(product => product.id === id);

    if (!product) return;

    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingCartProduct = existingCart.find(item => item.id === id);

    if (existingCartProduct) {
      existingCartProduct.quantity += count > 0 ? count : 1;
    } else {
      product.quantity = count > 0 ? count : 1;
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

      <main className="container px-44 ">
        <div className="flex">
          <div className="w-2/4 p-4">
            <div className="product-image mb-9 w-full bg-cover bg-center ">
              <img
                className="w-full ml-5 h-96 image bg-cover bg-center flex-shrink-0"
                src={products[0]?.image}
                alt=""
              />
            </div>
            <div className="product-list-image flex flex-wrap justify-between gap-4">
              <div>
                <img className="h-28" src={products[0]?.image} alt="" />
              </div>
              <div>
                <img className="h-28" src={products[0]?.image} alt="" />
              </div>
              <div>
                <img className="h-28" src={products[0]?.image} alt="" />
              </div>
              <div>
                <img className="h-28" src={products[0]?.image} alt="" />
              </div>
            </div>
          </div>
          <div className="w-2/4 p-4">
            <div className="product">
              <p className="product-category text-3xl mb-3 text-neutral-500">
                {products[0]?.category}
              </p>
              <p className="product-title text-5xl mb-6 font-bold text-slate-950">
                {products[0]?.title}
              </p>
              <p className="product-price text-2xl mb-5 font-bold text-slate-950">
                22.3$
              </p>
              <p className="product-description text-xl mb-5 text-neutral-500">
                {products[0]?.description}
              </p>
              <div className="product-size mb-7">
                <h4 className="text-2xl mb-2 text-slate-400">Size</h4>
                <div className="flex items-center space-x-6">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="size"
                      id="size-s"
                      className="hidden"
                    />
                    <span className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-gray-950 hover:bg-blue-500 hover:text-white transition-colors">
                      S
                    </span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="size"
                      id="size-m"
                      className="hidden"
                    />
                    <span className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-gray-950 hover:bg-blue-500 hover:text-white transition-colors">
                      M
                    </span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="size"
                      id="size-l"
                      className="hidden"
                    />
                    <span className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-gray-950 hover:bg-blue-500 hover:text-white transition-colors">
                      L
                    </span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="size"
                      id="size-xl"
                      className="hidden"
                    />
                    <span className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-gray-950 hover:bg-blue-500 hover:text-white transition-colors">
                      XL
                    </span>
                  </label>
                </div>
              </div>
              <div className="product-colors mb-6">
                <h4 className="text-2xl mb-2 text-slate-400">Colors</h4>
                <input type="color" name="" value="#CC0000" id="" />
                <input
                  className="ml-4"
                  type="color"
                  value="#FFCCFF"
                  name=""
                  id=""
                />
                <input
                  className="ml-4"
                  type="color"
                  value="#FFCC00"
                  name=""
                  id=""
                />
                <input
                  className="ml-4"
                  type="color"
                  value="#66CCFF"
                  name=""
                  id=""
                />
                <input
                  className="ml-4"
                  type="color"
                  value="#000000"
                  name=""
                  id=""
                />
              </div>
              <div className="flex items-center space-x-4 mb-6">
                <button
                  onClick={decrement}
                  id="decrement"
                  className="w-10 h-10 bg-gray-200 text-gray-800 rounded-md flex items-center justify-center hover:bg-gray-400 transition-colors"
                >
                  -
                </button>
                <span id="counter" className="text-2xl text-gray-800">
                  {count}
                </span>
                <button
                  onClick={increment}
                  id="increment"
                  className="w-10 h-10 bg-gray-200 text-gray-800 rounded-md flex items-center justify-center hover:bg-gray-400 transition-colors"
                >
                  +
                </button>
              </div>

              <div className="flex flex-col items-center mb-5">
                <button className="w-full py-4 text-xl bg-black text-white border border-transparent hover:bg-transparent hover:text-black hover:border-black transition-all duration-300">
                  <a href={`/cart/payment`}>Buy now</a>
                </button>

                <div className="flex space-x-4 w-full mt-3">
                  <button
                    onClick={() => addCart(products[0].id)}
                    className="w-1/2 py-4 text-xl bg-black text-white border border-transparent hover:bg-transparent hover:text-black hover:border-black transition-all duration-300"
                  >
                    Add to Cart
                  </button>

                  <button className="w-1/2 py-4 text-xl bg-black text-white border border-transparent hover:bg-transparent hover:text-black hover:border-black transition-all duration-300">
                    Save to Favorite
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default ProductDetails;
