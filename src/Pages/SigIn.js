import { email, lock, googleAuth, facebookAuth, appleAuth } from "./../assets";
import {
  ButtonSign,
  Banner,
  AngkerLink,
  InputForm,
  AuthButton,
} from "./../components";

function SigIn() {
  return (
    <>
      <div className="w-full flex  bg-black">
        <div className="artboard phone-4 artboard-demo mx-auto my-auto login">
          <Banner />
          <div className="text-center w-5/6 mt-44">
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
          <ButtonSign name={"Sign Up"} />
          <div className="text-center mt-8 grid grid-cols-3 gap-6 ">
            <AuthButton auth={appleAuth} router={"/"} />
            <AuthButton auth={googleAuth} router={"/"} />
            <AuthButton auth={facebookAuth} router={"/"} />
          </div>
          <div className="text-center my-6">
            <AngkerLink
              text={"if you have an account?"}
              link={"Sign In here"}
              router={"/signUp"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SigIn;
