"use client";

import useAuthStore from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/Button";
import Image from "next/image";

const Navbar = () => {
  const logout = useAuthStore((state) => state.logout);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="sticky top-0 z-50 bg-[#faebe1] w-full flex justify-between items-center h-14 px-4 border-b border-[#D98B44]">
      <div>
        <Image
          alt="logo"
          src={"/AMB-Logo.png.webp"}
          width={1000}
          height={1000}
          className="w-full h-14 py-4"
        />
      </div>
      <Button
        onClick={handleLogout}
        className="p-2 bg-red-500 text-white text-xs px-2 py-2"
      >
        Logout
      </Button>
    </div>
  );
};

export default Navbar;
