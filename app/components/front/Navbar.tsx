import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Heart, ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Image from "next/image";
import logo from "@/public/logo.svg";
import UserDropdown from "./UserDropdown";
import NavbarLinks from "./NavLinks";
import { headers } from "next/headers";
async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="absolute inset-x-0 top-0 z-50">
      <nav className="w-full max-w-8xl mx-auto px-2 lg:px-8  py-5 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} width={40} height={20} alt="logo" />
            <h2 className="font-bold text-white text-xl hidden lg:block">Golden Shop</h2>
          </Link>
        </div>
        <NavbarLinks />
        <div className="flex items-center">
          {user ? (
            <>
              <Link
                href={"/Wishlist"}
                className="group p-2 flex items-center mr-2"
              >
                <Heart className="w-6 h-6 text-white group-hover:text-gray-700" />
              </Link>
              <Link
                href={"/ShoppingBag"}
                className="group p-2 flex items-center mr-2"
              >
                <ShoppingBag className="w-6 h-6 text-white group-hover:text-gray-700" />
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                  5
                </span>
              </Link>
              <UserDropdown
                email={user.email as string}
                name={`${user.given_name} ${user.family_name}` as string}
                userImage={
                  user.picture ?? `https://avatar.vercel.sh/${user.given_name}`
                }
              />
            </>
          ) : (
            <div className="flex items-center">
              <Link
                href={"/wishlist"}
                className="group p-2 flex items-center mr-2"
              >
                <Heart className="w-6 h-6 text-white group-hover:text-gray-700" />
              </Link>
              <Link
                href={"/ShoppingBag"}
                className="group p-2 flex items-center mr-2 relative"
              >
                <ShoppingBag className="w-6 h-6 text-white group-hover:text-gray-700 " />
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
                  1
                </div>
              </Link>

              <LoginLink>
                <User className="w-6 h-6 text-white group-hover:text-gray-700" />
              </LoginLink>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
