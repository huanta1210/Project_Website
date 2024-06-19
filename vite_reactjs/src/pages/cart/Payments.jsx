import Header from '../../compoments/Header';
import Footer from '../../compoments/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

function PayMents() {
  const apiURLProvinces = 'https://esgoo.net/api-tinhthanh/1/0.htm';

  const [provinces, setProvinces] = useState([]);

  const [districts, setDistricts] = useState([]);

  const [awards, setAward] = useState([]);

  const [selectedProvinces, setSelectedProvinces] = useState(null);

  const [selectedDistricts, setSelectedDistricts] = useState(null);

  const [productCarts, setProductCarts] = useState([]);

  const [totalCart, setTotalCart] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelSubmitForm = () => {
    toast.success('Đặt hàng thành công');
  };

  const getProductCart = async () => {
    const getTokenCart = localStorage.getItem('cart');
    if (!getTokenCart) {
      toast.error('Get token cart not found');
    } else {
      const cart = JSON.parse(getTokenCart);
      setProductCarts(cart);
    }
  };

  const totalCartProduct = () => {
    const getTokenCart = localStorage.getItem('cart');
    if (!getTokenCart) {
      toast.error('Get token cart not found');
    }
    let cart = JSON.parse(getTokenCart);

    const total = cart.reduce(
      (acc, product) => acc + product.quantity * product.price,
      0
    );

    setTotalCart(total);
  };
  useEffect(() => {
    getProvinces();
    getProductCart();
    totalCartProduct();
  }, []);
  useEffect(() => {
    if (selectedProvinces) {
      getDistrics(selectedProvinces);
    }
  }, [selectedProvinces]);

  useEffect(() => {
    if (selectedDistricts) {
      getWard(selectedDistricts);
    }
  }, [selectedDistricts]);

  // lấy dữ liệu tỉnh thành phố
  const getProvinces = async () => {
    try {
      const response = await axios.get(apiURLProvinces);

      const getData = response.data;

      if (Array.isArray(getData.data)) {
        setProvinces(getData.data);
      }
    } catch (error) {
      console.error('Error fetching provinces:', error);
    }
  };
  // lấy dữ liệu quận huyện
  const getDistrics = async provincesId => {
    try {
      const apiURLDistrics = `https://esgoo.net/api-tinhthanh/2/${provincesId}.htm`;

      const response = await axios.get(apiURLDistrics);

      const getData = response.data;

      if (Array.isArray(getData.data)) {
        setDistricts(getData.data);
      }
    } catch (error) {
      console.error('Error fetching provinces:', error);
    }
  };
  // lấy dữ liệu thị xã
  const getWard = async districtId => {
    try {
      const apiURLAward = `https://esgoo.net/api-tinhthanh/3/${districtId}.htm`;

      const response = await axios.get(apiURLAward);

      const getData = response.data;

      if (Array.isArray(getData.data)) {
        setAward(getData.data);
      }
    } catch (error) {
      console.error('Error fetching provinces:', error);
    }
  };

  // event
  const handleChange = e => {
    const selectId = e.target.value;
    setSelectedProvinces(selectId);
    setSelectedDistricts(selectId);
  };
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <div className="mx-44 mb-16">
          <h1 className="text-4xl my-9 font-bold">Billing details</h1>

          <form
            action=""
            className="grid grid-cols-12 gap-4"
            onSubmit={handleSubmit(handelSubmitForm)}
          >
            <div className="col-span-6">
              <div className="">
                <label className="font-medium text-lg">
                  Name: <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full border py-3 pl-3 mt-2 focus:border-lime-400 outline-none hover:shadow-inner foucs:shadow-lime-400"
                  type="text"
                  name="name"
                  id=""
                  {...register('name', {
                    required: 'Không bỏ trống tên',
                  })}
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div className="form-group mb-2 mt-5">
                <label className="font-medium text-lg">
                  Phone:<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border py-3 pl-3 mt-2 focus:border-lime-400 outline-none hover:shadow-inner foucs:shadow-lime-400"
                  name="phone"
                  id=""
                  {...register('phone', {
                    required: 'Không bỏ trống số điện thoại',
                    pattern: {
                      value: /^(0[3|5|7|8|9])+([0-9]{8})$/,
                      message: 'Số điện thoại không đúng định dạng',
                    },
                  })}
                />
                {errors.phone && (
                  <p className="text-red-500">{errors.phone.message}</p>
                )}
              </div>
              <div className="form-group mb-2 mt-5">
                <label className="font-medium text-lg">
                  Email Address: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border py-3 pl-3 mt-2 focus:border-lime-400 outline-none hover:shadow-inner foucs:shadow-lime-400"
                  name="email"
                  id=""
                  {...register('email', {
                    required: 'Không bỏ trống email',
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: 'Email không đúng định dạng',
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="form-group mb-2 mt-5">
                <label className="font-medium text-lg">
                  Company Name (Optional):{' '}
                </label>
                <input
                  type="text"
                  className="w-full border py-3 pl-3 mt-2 focus:border-lime-400 outline-none hover:shadow-inner foucs:shadow-lime-400"
                  name=""
                  id=""
                />
              </div>
              <div className="form-group mb-2 mt-5">
                <label className="font-medium text-lg">
                  Address: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border py-3 pl-3 mt-2 focus:border-lime-400 outline-none hover:shadow-inner foucs:shadow-lime-400 "
                  name="address"
                  id=""
                  {...register('address', {
                    required: 'Không bỏ trống địa chỉ',
                  })}
                />
                {errors.address && (
                  <p className="text-red-500">{errors.address.message}</p>
                )}
              </div>
              <div className="form-group mb-2 mt-5">
                <label className="font-medium text-lg">
                  Town / City: <span className="text-red-500">*</span>
                </label>
                <select
                  name="city"
                  id=""
                  className="border w-full py-3.5 pl-3.5 mt-2"
                  onChange={handleChange}
                >
                  <option value="" selected>
                    Selected Town / City
                  </option>
                  {provinces &&
                    provinces.map(city => (
                      <option key={city.id} value={city.id}>
                        {city.full_name}
                      </option>
                    ))}
                </select>
              </div>

              <div className="form-group">
                <label className="font-medium text-lg">
                  District: <span className="text-red-500">*</span>{' '}
                </label>{' '}
                <br />
                <select
                  name=""
                  id=""
                  className="border w-full py-3.5 pl-3.5 mt-2"
                  onChange={handleChange}
                >
                  <option value="" selected>
                    Selected Districts
                  </option>

                  {districts &&
                    districts.map(district => (
                      <option value={district.id} key={district.id}>
                        {district.full_name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="form-group">
                <label className="font-medium text-lg">
                  Ward / Commune: <span className="text-red-500">*</span>{' '}
                </label>{' '}
                <br />
                <select
                  name=""
                  id=""
                  className="border w-full py-3.5 pl-3.5 mt-2"
                >
                  <option value="" selected>
                    Selected Ward / Commune
                  </option>
                  {awards &&
                    awards.map(award => (
                      <option value={award.id} key={award.id}>
                        {award.full_name}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <div className="col-span-6">
              <div className="pb-5 border-b-2 border-gray-300">
                <div className="mb-3">
                  <div className="inline-block">
                    <p className="font-bold text-xl">Product</p>
                  </div>
                  <div className="float-right">
                    <p className="font-bold text-xl">Subtotal</p>
                  </div>
                </div>
                {productCarts &&
                  productCarts.map(productCart => (
                    <div key={productCart.id} className="mb-3">
                      <div className="inline-block">
                        <p className="font-medium text-sm text-gray-400">
                          <img
                            src={productCart.image}
                            className="h-16 w-16 inline-block mr-3"
                            alt="Ảnh"
                          />
                          {productCart.title}{' '}
                          <span className="text-gray-400 ml-2">
                            SL:{productCart.quantity}
                          </span>
                        </p>
                      </div>
                      <div className="float-right">
                        <p className="font-semibold text-sm">
                          {productCart.price * productCart.quantity} $
                        </p>
                      </div>
                    </div>
                  ))}

                <div className="mb-3">
                  <div className="inline-block">
                    <p className="font-medium text-sm">Subtotal</p>
                  </div>
                  <div className="float-right">
                    <p className="font-semibold text-sm">{totalCart} $</p>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="inline-block">
                    <p className="font-medium text-sm">Total</p>
                  </div>
                  <div className="float-right">
                    <p className="font-bold text-lg text-amber-500">
                      {totalCart} $
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7">
                <div className="flex">
                  {' '}
                  <div className="h-4 w-4 border bg-black rounded-full mt-1"></div>
                  <span className="font-semibold text-sm text-black pl-2 pt-0.5 ">
                    Direct Bank Transter
                  </span>
                </div>

                <div className="mt-3">
                  <p className="text-gray-300 leading-6 font-medium text-sm mb-3">
                    Make your payments directly into our bank account. Please
                    use your Order ID as the payment refernce. You order wil not
                    be shipped until the funds have cleared in our account.
                  </p>
                  <div className="flex mb-2">
                    {' '}
                    <div className="h-4 w-4 border rounded-full mt-1"></div>
                    <span className="font-medium text-sm text-gray-300 pl-2 pt-0.5 ">
                      Direct Bank Transter
                    </span>
                  </div>
                  <div className="flex mb-2">
                    {' '}
                    <div className="h-4 w-4 border rounded-full mt-1"></div>
                    <span className="font-medium text-sm text-gray-300 pl-2 pt-0.5 ">
                      Cash On Delivery
                    </span>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-sm leading-6 font-medium">
                    Your personal data will be used to support your experience
                    throughout this webiste, to manage access to your account,
                    and for other purposes described in our{' '}
                    <span className="font-semibold">privacy policy</span>
                  </p>
                  <div className="text-center mt-5">
                    <button
                      className="text-amber-500 font-semibold border-2 text-lg border-amber-300 py-2 px-24 hover:text-white hover:bg-amber-300"
                      type="submit"
                    >
                      Place order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default PayMents;
