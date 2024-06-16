import Header from '../../compoments/Header';
import Footer from '../../compoments/Footer';
import cart from '../../assets/img/empty-cart.webp';

import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
function Cart() {
  const [count, setCount] = useState(0);

  const [total, setTotal] = useState(0);

  const [productCart, setProductCart] = useState([]);

  useEffect(() => {
    const dataCart = localStorage.getItem('cart');

    if (dataCart) {
      const parseCart = JSON.parse(dataCart);
      const updateCart = updateCartItems(parseCart);
      setProductCart(updateCart);

      const productTotal = totalProductCart(updateCart);
      setTotal(productTotal);

      const count = updateCart.length;
      setCount(count);

      updateLocalStorage(updateCart);
    }
  }, []);
  // Update Cart Items
  const updateCartItems = parseCart => {
    return parseCart.map(product => ({
      ...product,
      quantity: product.quantity || 1,
    }));
  };
  // Total product cart
  const totalProductCart = updateCart => {
    return updateCart.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
  };
  // Update LocalStorage
  const updateLocalStorage = updateCart => {
    return localStorage.setItem('cart', JSON.stringify(updateCart));
  };
  // Event
  const handleIncreaseQuantity = productId => {
    const updateProductCart = productCart.map(product => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });

    setProductCart(updateProductCart);
    const productTotal = totalProductCart(updateProductCart);

    setTotal(productTotal);
    localStorage.setItem('cart', JSON.stringify(updateProductCart));
  };

  const handleDecreaseQuantity = productId => {
    const updateProductCart = productCart.map(product => {
      if (product.id === productId && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    setProductCart(updateProductCart);
    const productTotal = totalProductCart(updateProductCart);
    setTotal(productTotal);
    localStorage.setItem('cart', JSON.stringify(updateProductCart));
  };

  const handleDeleteProduct = productId => {
    const updateCart = productCart.filter(product => product.id !== productId);
    setProductCart(updateCart);

    const productTotal = totalProductCart(updateCart);
    setTotal(productTotal);

    const count = updateCart.length;
    setCount(count);

    localStorage.setItem('cart', JSON.stringify(updateCart));
    toast.success('Xoá khỏi giỏ hàng thành công');
  };

  return (
    <div>
      <header>
        <Header count={count} />
      </header>

      <main className="mx-96 mb-44">
        <h1 className="text-5xl mt-7">
          Giỏ hàng <small className="text-lg">(Sản phẩm)</small>
        </h1>

        {/* giỏ hàng trống */}

        {productCart.length === 0 ? (
          <div className="cart-empty text-center ">
            <img className="h-64 m-auto" src={cart} alt="" />
            <div className="mt-10">
              <a
                className="py-5 px-9 border border-black bg-black text-white text-xl hover:bg-transparent hover:text-black hover:border-black transition-all duration-1000 border border-transparent hover:border-black"
                href="/products"
              >
                Continue Choosing
              </a>
            </div>
          </div>
        ) : (
          <div className="mt-12">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-9">
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr>
                        <th className=" py-3 bg-gray-100 text-left text-xl leading-4 font-semibold tracking-wider">
                          Product
                        </th>
                        <th className="px-6 py-3 bg-gray-100 text-left text-xl leading-4 font-semibold tracking-wider">
                          Price
                        </th>
                        <th className="px-6 py-3 bg-gray-100 text-left text-xl leading-4 font-semibold tracking-wider">
                          Quantity
                        </th>
                        <th className="px-6 py-3 bg-gray-100 text-left text-xl leading-4 font-semibold tracking-wider">
                          Subtotal
                        </th>
                        <th className="px-6 py-3 bg-gray-100"></th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-100 divide-y divide-gray-200">
                      {productCart.map(product => (
                        <tr key={product.id}>
                          <td className="pr-6 py-4 whitespace-no-wrap mb-1">
                            <div className="flex items-center">
                              <img
                                className="h-14 w-14"
                                src={product.image}
                                alt=""
                              />
                              <span className="ml-4 text-sm font-semibold text-gray-400">
                                {product.title}
                              </span>
                            </div>
                          </td>
                          <td className="pr-6 py-4 whitespace-no-wrap text-lg leading-5 text-gray-500 font-semibold">
                            {`${product.price} $`}
                          </td>
                          <td className="pl-4 py-4 whitespace-no-wrap text-xl">
                            <div className="flex items-center">
                              <button
                                onClick={() =>
                                  handleDecreaseQuantity(product.id)
                                }
                                className="px-2 py-1"
                              >
                                -
                              </button>
                              <p className="px-3 py-1">{product?.quantity}</p>
                              <button
                                onClick={() =>
                                  handleIncreaseQuantity(product.id)
                                }
                                className="px-2 py-1"
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="pl-4 py-4 whitespace-no-wrap text-lg leading-5 text-gray-500 font-semibold">
                            {`${(product?.price * product?.quantity).toFixed(
                              2
                            )} $`}
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap text-3xl text-red-500">
                            <button
                              onClick={() => handleDeleteProduct(product.id)}
                            >
                              <i className="ti ti-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="col-span-3">
                <div className="w-full bg-gray-100">
                  <div className="cart-total mx-6">
                    <div className=" border-b-2 border-gray-200">
                      <h1 className="text-4xl font-bold py-3">Cart Total</h1>
                    </div>
                    <div className="my-3">
                      <p className="font-semibold text-xl inline-block">
                        Subtotal
                      </p>
                      <p className="price text-xl text-gray-300 font-semibold float-right">
                        {`${total.toFixed(2)} $`}
                      </p>
                    </div>

                    <div className="total">
                      <p className="font-semibold text-xl inline-block">
                        Total
                      </p>
                      <p className="price text-2xl text-red-500 font-bold float-right">
                        {`${total.toFixed(2)} $`}
                      </p>
                    </div>
                    <div className="text-center">
                      <a href="/cart/payments">
                        <button
                          className=" border-2 py-2 px-16 ml-2 my-6 border-amber-400 rounded text-amber-400 font-semibold hover:bg-amber-500 hover:text-white "
                          type="button"
                        >
                          CheckOut
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default Cart;
