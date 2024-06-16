import Header from '../../compoments/Header';
import Footer from '../../compoments/Footer';

function PayMents() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <div className="mx-44 mb-16">
          <h1 className="text-4xl my-9 font-bold">Billing details</h1>
          <form action="" className="grid grid-cols-12 gap-4">
            <div className="col-span-6">
              <div className="grid grid-cols-12 mb-4">
                <div className="col-span-6">
                  <label className="font-medium text-lg">
                    First Name: <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="w-full border py-3 pl-3 mt-2 focus:border-lime-400 outline-none hover:shadow-inner foucs:shadow-lime-400"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="col-span-6 ml-2">
                  <label className="font-medium text-lg">
                    Last Name: <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="w-full border py-3 pl-3 mt-2 focus:border-lime-400 outline-none hover:shadow-inner foucs:shadow-lime-400"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="form-group mb-2 mt-5">
                <label className="font-medium text-lg">
                  Phone:<span className="text-red-500">*</span>
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
                  Email Address: <span className="text-red-500">*</span>
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
                  Street Address: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border py-3 pl-3 mt-2 focus:border-lime-400 outline-none hover:shadow-inner foucs:shadow-lime-400 "
                  name=""
                  id=""
                />
              </div>
              <div className="form-group mb-2 mt-5">
                <label className="font-medium text-lg">
                  Town / City: <span className="text-red-500">*</span>
                </label>
                <select
                  name=""
                  id=""
                  className="border w-full py-3.5 pl-3.5 mt-2"
                >
                  <option value="" className=" text-gray-100">
                    Western Province
                  </option>
                  <option value="">Sri Lanka</option>
                  <option value="">Sri Lanka</option>
                  <option value="">Sri Lanka</option>
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
                >
                  <option value="" className=" text-gray-100">
                    Western Province
                  </option>
                  <option value="">Sri Lanka</option>
                  <option value="">Sri Lanka</option>
                  <option value="">Sri Lanka</option>
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

                <div className="mb-3">
                  <div className="inline-block">
                    <p className="font-medium text-sm text-gray-300">
                      Asgaard sofa <span className="text-black">X1</span>
                    </p>
                  </div>
                  <div className="float-right">
                    <p className="font-semibold text-sm">25.000.000đ</p>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="inline-block">
                    <p className="font-medium text-sm">Subtotal</p>
                  </div>
                  <div className="float-right">
                    <p className="font-semibold text-sm">25.000.000đ</p>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="inline-block">
                    <p className="font-medium text-sm">Total</p>
                  </div>
                  <div className="float-right">
                    <p className="font-bold text-lg text-amber-500">
                      25.000.000đ
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
                    <button className="text-amber-500 font-semibold border-2 text-sm border-amber-300 py-2 px-24 hover:text-white hover:bg-amber-300">
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
