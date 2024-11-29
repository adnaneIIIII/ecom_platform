"use server";
import {
  getKindeServerSession,
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import UserDropdown from "./UserDropdown";
import { Button } from "@/components/ui/button";

export default async function UserCompo() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();


  return (
    <div className="flex items-center">
         {user ? (
          <>
        <Link href={"/ShoppingBag"} className="group p-2 flex items-center mr-2">
              <ShoppingBag className="w-6 h-6 text-gray-500 group-hover:text-gray-700" />
              <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                5
              </span>
            </Link>
            <UserDropdown
              email={user.email as string}
              name={`${user.given_name} ${user.family_name}`as string}
              userImage={
                user.picture ?? `https://avatar.vercel.sh/${user.given_name}`
              }
            />
            </>
        ) : (
            <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-2">
            <Button variant={"ghost"} asChild>
              <LoginLink>Sign in</LoginLink>
            </Button>
            <span className="h-6 w-px bg-gray-900"></span>
            <Button variant={"ghost"} asChild>
              <RegisterLink>Create Account</RegisterLink>
            </Button>
          </div>
        )}
    </div>
  );
}
