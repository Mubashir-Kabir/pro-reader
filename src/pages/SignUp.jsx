import React from "react";
import Lottie from "lottie-react";
import user from "../Utilities/user.json";

import RegisterForm from "../componants/RegisterForm";

const SignUp = () => {
  return (
    <div>
      <div className="grid grid-cols-1 items-center  lg:grid-cols-2 justify-between align-middle py-10">
        <div className="w-3/4 mx-auto hidden lg:block">
          <Lottie animationData={user} loop={true}></Lottie>
        </div>
        <div className="md:mx-20">
          <RegisterForm></RegisterForm>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
