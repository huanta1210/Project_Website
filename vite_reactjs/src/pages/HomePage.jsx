import Header from '../compoments/Header';
import Footer from '../compoments/Footer';
import img1 from '../assets/img/img-1.jpg';
import img2 from '../assets/img/img-2.jpg';
import img3 from '../assets/img/img-3.jpg';
import img4 from '../assets/img/img-4.jpg';
import img5 from '../assets/img/img-5.jpg';
import img6 from '../assets/img/img-6.jpg';
import img7 from '../assets/img/img-7.jpg';
import img8 from '../assets/img/img-8.jpg';

import card from '../assets/img/card.jpg';
import grow from '../assets/img/grow.jpg';
import hero from '../assets/img/hero.png';
import icon1 from '../assets/img/icon-2.png';
import icon2 from '../assets/img/icon-3.png';
import icon3 from '../assets/img/icon-4.png';
import icon4 from '../assets/img/icon-5.png';
import icon5 from '../assets/img/icon-7.png';
import icon6 from '../assets/img/icon-8.png';
import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';

function HomePage() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  const postApi = 'http://localhost:3000/products';
  // slider
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () =>
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);

  const handlePrevClick = () =>
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );

  // Call API
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(postApi)
      .then(response => {
        if (!response.ok) {
          toast.error('Lỗi API');
        }
        return response.json();
      })
      .then(data => setProducts(data.slice(0, 5)))
      .catch(error => {
        toast.error('Lỗi API');
        console.log(error);
      });
  };
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <div className="banner relative flex justify-center items-center overflow-hidden mb-10">
          <img className="w-full object-fit" src={card} alt="" />
          <p className="text-5xl text-slate-600 absolute left-20 top-1/3 font-poppins font-bold ">
            AWS powers your digital{' '}
            <span className="block text-white">transformation, seamlessly</span>
          </p>
          <a href="#" className="block absolute left-20 top-1.5/3 mt-7">
            <p className="inline-block mb-2 text-lg text-slate-800 font-bold text-white font-poppins">
              Give it a try <i className="fa-solid fa-arrow-right pl-4"></i>
            </p>
            <div className="border-b border-green-500 w-32 block"></div>
          </a>
          <div className="contact-shop absolute bottom-0 left-20 mb-3">
            <i className="inline-block text-xl fa-brands fa-facebook text-blue-700"></i>
            <div className="inline-block mx-1 h-px w-12 bg-gray-400 mb-1"></div>
            <i className="inline-block text-xl fa-brands fa-square-instagram text-pink-500"></i>
            <div className="inline-block mx-1 h-px w-12 bg-gray-400 mb-1"></div>
            <p className="inline-block text-xl text-slate-800 telephone">
              {' '}
              +84 764 5466 904
            </p>
            <div className="inline-block mx-1 h-px w-12 bg-gray-400 mb-1"></div>
            <p className="inline-block text-xl text-slate-800 email-contact">
              {' '}
              contact@banklist.com
            </p>
          </div>
        </div>
        <div className="header-text text-center mb-15 ">
          <h1 className="text-4xl font-bold pt-3 mb-2">Our clients</h1>
          <p className="text-xl text-slate-500">
            We have been working with some fortune 500+ clients
          </p>
        </div>

        <div className="ml-60 mr-60 mt-10">
          <div className="main-title flex">
            <img className="h-80 inline-block" src={grow} alt="" />
            <div>
              <p className="inline-block pl-20 text-xl text-justify mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                alias sint quos? Accusantium a fugiat porro reiciendis saepe
                quibusdam debitis ducimus. Nesciunt quos autem dolorum
                voluptates cum dolores dicta fuga inventore ab? Nulla incidunt
                eius numquam sequi iste pariatur quibusdam! Quasi, fugit in
                cumque cupiditate reprehenderit debitis animi enim eveniet
                consequatur odit quam quos possimus assumenda dicta fuga
                inventore ab.Lorem ipsum dolor sit amet, consectetur adipisicing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo
                consequat.Excepteur sint occaecat cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est laborum. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className="rounded-lg text-xl font-bold ml-20 px-10 py-4 bg-lime-700 text-white hover:bg-transparent hover:text-black hover:border-black transition-all duration-1000 border border-transparent hover:border-black">
                Buy Now
              </button>
            </div>
          </div>
          <div className="main-title mt-8 flex justify-around">
            <div>
              <p className="inline-block text-xl text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                alias quos? Accusantium a fugiat porro reiciendis saepe
                quibusdam debitis ducimus. Nesciunt quos autem dolorum
                voluptates cum dolores dicta fuga inventore ab? Nulla incidunt
                eius numquam sequi iste pariatur quibusdam! Quasi, fugit in
                cumque cupiditate reprehenderit debitis animi enim eveniet
                consequatur odit quam quos possimus assumenda dicta fuga
                inventore ab.Lorem ipsum dolor sit amet, consectetur adipisicing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo
                consequat.Excepteur sint occaecat cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est laborum. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-lime-700 font-bold text-3xl my-3">Tim Smith</p>
              <p className="mb-5 text-gray-400">
                British Dragon Boat Racing Association
              </p>
              <div className="flex justify-between items-center">
                <img className="h-20 " src={icon1} alt="" />
                <img className="h-20 " src={icon2} alt="" />
                <img className="h-20 " src={icon3} alt="" />
                <img className="h-20 " src={icon4} alt="" />
                <img className="h-20 " src={icon5} alt="" />
                <img className="h-20 " src={icon6} alt="" />

                <a href="/products">
                  <p className="text-xl text-green-500 font-bold text-lime-700 font-poppins">
                    Shop Now <i className="fa-solid fa-arrow-right pl-4"></i>
                  </p>
                </a>
              </div>
            </div>

            <img className="h-96 inline-block pl-20" src={hero} alt="" />
          </div>
          <div className="header-text flex flex-col items-center justify-center my-16 ">
            <h1 className="text-4xl font-bold pt-3 mb-2">Our products</h1>
            <p className="text-xl text-slate-500">
              Our products have reached more than 500+ customers
            </p>
          </div>

          <div className="product flex flex-wrap justify-between gap-4">
            {products.map(product => (
              <div key={product.id} className="product-items w-72">
                <a href={`/products/${product.id}`}>
                  <img className="w-72 h-72" src={product.image} alt="" />
                </a>
                <p className="title pt-3 text-2xl">{product.title}</p>
                <p className="price pt-3 text-2xl inline-block">
                  {product.price} $
                </p>
              </div>
            ))}
          </div>

          <div className="header-text text-center my-16 ">
            <h1 className="text-4xl font-bold pt-3 mb-2">Our products</h1>
            <p className="text-xl text-slate-500">
              Our products have reached more than 500+ customers
            </p>
          </div>

          <div className="sliders relative w-full max-w-full overflow-hidden flex justify-center items-center mt-7 mb-60">
            <div
              className="slide w-full h-64 bg-cover bg-center flex"
              style={{
                transform: `translateX(-${
                  (currentIndex * 100) / images.length
                }%)`,
                transition: 'transform 0.5s ease-in-out',
              }}
            >
              {[...images].map((image, index) => (
                <div
                  key={index}
                  className="slide w-1/4 ml-5 h-64 bg-cover bg-center flex-shrink-0"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              ))}
            </div>

            <button
              onClick={handlePrevClick}
              className="slider-btn rounded-full bg-gray-200 p-4 text-xl text-white absolute left-0 top-2.5/4 left-16 z-10"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            >
              &larr;
            </button>
            <button
              onClick={handleNextClick}
              className="slider-btn rounded-full bg-gray-200 p-4 text-xl text-white absolute right-0 top-2.5/4 right-16 z-10"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            >
              &rarr;
            </button>
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
export default HomePage;
