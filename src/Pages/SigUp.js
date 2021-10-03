import { email, lock } from "./../assets";
import { ButtonSign, Banner, AngkerLink, InputForm } from "./../components";
function SignUp() {
  return (
    <>
      <div className="w-full flex  bg-black">
        <div className="artboard phone-4 artboard-demo mx-auto my-auto login">
          <Banner />
          <div className="text-center w-5/6 mt-56">
            <InputForm
              image={email}
              typeInput={"email"}
              inputPlaceHolder={"Email"}
            />
            <InputForm
              image={lock}
              typeInput={"password"}
              inputPlaceHolder={"Password"}
            />
          </div>
          <div className="text-center mb-5">
            <div className="text-white font-semibold text-md hover:underline">
              Forgot Password
            </div>
          </div>
          <ButtonSign name={"Sign In"} />
          <div className="text-center my-5">
            <AngkerLink
              text={"Didn't have any account?"}
              link={"Sign Up here"}
              router={"/"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
