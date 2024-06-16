

import Header from "../../compoments/Header";
import Footer from "../../compoments/Footer";


function LoginRecover() {
    return (
        <div>
            <header>
                <Header />
            </header>

            <main className="mx-96 main-login">
                <div className="login flex flex-col items-center justify-center mt-28 mr-12">
                    <div className="login-title text-center">
                        <h1 className="text-5xl text-slate-600 ">Reset password</h1>
                        <p className="text-xl ml-4 mt-5 text-slate-600">Forgot password? Enter your email address to retrieve your password via email</p>

                    </div>
                </div>
                <div className="login-form my-10 ">
                    <div>
                        <form action="">
                            <div className="form-group mb-8">
                                <label className="text-2xl text-slate-600" htmlFor="email">Email:<span className="text-red-500">*</span></label> <br />
                                <input className="w-full py-6 mt-3 rounded-md border-gray-300" type="email" name="email" id="email" required placeholder="Enter Your Email" /> <br />
                                <span className="form-error"></span>
                            </div>
                            <div className="form-group text-center ">
                                <button className="btn-submit border border-black py-6 px-36 text-2xl text-white bg-black font-bold" type="submit">Password Retrieval</button>
                                <p className="text-xl mt-6">Come back <a className="text-red-500" href="/login">Here.</a></p>

                            </div>


                        </form>
                    </div>
                </div>
            </main>

            <footer>
                <Footer />
            </footer>

        </div>
    )

}

export default LoginRecover;