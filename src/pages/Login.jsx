import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import OutlinedButton from "../components/OutlinedButton";

const Login = () => {
  return (
    <div className="bg-[#00ffddc4] text-white h-[92%] flex justify-center items-center">
      <div className="p-14 rounded-3xl border-4">
        <h1 className="text-3xl font-extrabold underline underline-offset-4 mb-6">
          Welcome back!
        </h1>
        <form>
          <InputField text="email" name="email" type="email" />
          <InputField text="password" name="password" type="password" />
          <Link className="flex justify-center items-center mb-2" to="/">
            <OutlinedButton
              classes="hover:text-white hover:bg-[rgba(0,255,221,0.77)] hover:border-4 hover:border-white"
              text="Log In"
            />
          </Link>
        </form>
        <p className="font-semibold mt-2">
          Not a member?{" "}
          <Link to="/sign-up" className="underline underline-offset-2">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
