import React from "react";
import { Card } from "./ui/Card";
import Image from "next/image";
import LoginForm from "./loginForm";

const LoginCard = () => {
  return (
    <Card className="mx-auto max-w-sm bg-transparent flex flex-col gap-4">
      <div className="flex justify-between items-center gap-2">
        <Image
          alt="logo"
          src={"/AMB-Logo.png.webp"}
          width={1000}
          height={1000}
          className="w-[180px] h-full"
        />
      </div>
      <hr className="border-[#D98B44]" />
      <h3 className="font-bold leading-6 text-xl mb-2">Welcome back</h3>
      <LoginForm />
    </Card>
  );
};

export default LoginCard;
