import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import InputField from "../components/InputField";
import OutlinedButton from "../components/OutlinedButton";
import { CiCirclePlus } from "react-icons/ci";
import botImg from "../assets/user-img.avif";
import { TailSpin } from "react-loader-spinner";

const SignUp = () => {
  // eslint-disable-next-line no-unused-vars
  const [signUpForm, setSignUpForm] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
    picture: "",
  });

  const [image, setImage] = useState(null);
  const [uploadingImg, setUploadingImg] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const navigate = useNavigate();

  function validateImg(e) {
    const file = e.target.files[0];
    if (file.size >= 1048576) {
      return alert("Max file size is 1mb");
    } else {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  }

  async function handleOnChange(e) {
    const { name, value } = e.target;
    setSignUpForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!image) return alert("Please upload your profile picture");
    try {
      setUploadingImg(true);
      const urlData = await axios.post(
        "http://api.cloudinary.com/v1_1/harsha2k01/image/upload",
        {
          file: image,
          upload_preset: "w2nkmotf",
          cloud_name: "harsha2k01",
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSignUpForm((prev) => ({
        ...prev,
        picture: urlData.data.secure_url,
      }));
      setUploadingImg(false);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#00FFDF] text-white h-[92%] flex justify-center items-center">
      {uploadingImg ? (
        <TailSpin
          visible={true}
          height="80"
          width="80"
          color="#fff"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ) : (
        <div className="p-16 rounded-3xl border-4">
          <h1 className="text-3xl font-extrabold underline underline-offset-4 mb-6">
            Create an Account
          </h1>
          <form onSubmit={handleSignUp}>
            <div className="relative flex justify-center items-center">
              <img
                className="h-24 w-24 rounded-full relative"
                src={imagePreview || botImg}
                alt="bot-image"
              />
              <label
                htmlFor="imageUpload"
                className="z-30 absolute top-[82px] right-[102px]"
              >
                <CiCirclePlus className="text-black bg-white rounded-full h-4" />
              </label>
              <InputField
                classes="absolute h-2 w-4 top-[66px] right-[104px] hidden cursor-pointer"
                type="file"
                name="imageUpload"
                onChange={validateImg}
              />
            </div>
            <InputField
              text="username"
              name="username"
              onChange={handleOnChange}
            />
            <InputField
              text="email"
              name="email"
              type="email"
              onChange={handleOnChange}
            />
            <InputField
              text="password"
              name="password"
              type="password"
              onChange={handleOnChange}
            />
            <InputField
              text="confirm password"
              name="passwordConfirm"
              type="password"
              onChange={handleOnChange}
            />
            <div className="flex justify-center items-center mb-2">
              <OutlinedButton
                btnType="submit"
                classes="hover:text-white hover:bg-[rgba(0,255,221,0.77)] hover:border-4 hover:border-white"
                text="Sign Up"
              />
            </div>
          </form>
          <p className="font-semibold mt-2">
            Already a member?{" "}
            <Link to="/login" className="underline underline-offset-2">
              Login
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default SignUp;
