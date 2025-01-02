import LoginForm from "./LoginForm";

import AnimationBackground from "@/components/login/AnimationBackground";
import CardInner from "@/components/common/CardInner";

import "../../styles/LoginPage.css";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen">
        <div className="sm:block hidden">
          <AnimationBackground />
        </div>
        <div className="flex h-screen login-form">
          <div className="m-auto">
            <CardInner className="w-full">
              <div className="flex items-center space-x-2 justify-center">
                <img
                  alt="Flowbite Logo"
                  className="h-14"
                  src="/craft-net-logo.svg"
                />
                <span className="self-center text-4xl font-semibold whitespace-nowrap">
                  Craftnet
                </span>
              </div>
              <div className="mb-4">
                <p className="text-gray-500 text-center py-3">
                  Welcome to Craftnet!
                  <br />
                  This platform showcases my technical abilities through a
                  dynamic, responsive, and user-friendly social networking
                  experience.
                </p>
              </div>
              <div>
                <LoginForm />
              </div>
            </CardInner>
          </div>
        </div>
      </div>
    </>
  );
}
