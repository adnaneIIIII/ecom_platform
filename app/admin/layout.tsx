import Image from "next/image";
import Link from "next/link";
import AdminLinks from "../components/admin/AdminLinks";
import AdminNav from "../components/admin/AdminNav";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {getUser}=getKindeServerSession();
  const user = await getUser();
  if(!user || user.email !== "adnane.elotmani@usmba.ac.ma"){
    redirect("/");
    }
  
  return (
    <div className="flex h-screen">
      <div className="lg:w-[15%] md:w-[10%]">
        {/* logo */}
        <div className="flex items-center justify-center py-4 px-2 mt-4">
          <Link href={"/admin"} className="flex items-center gap-2">
            <Image src={"/logo.svg"} alt="logo" width={40} height={40} />
            <span className="font-bold text-xl hidden lg:block text-[#5226ff]">
              Golden Shop
            </span>
          </Link>
        </div>

        {/* admin nav links */}

        <div className="sticky top-2">
          <AdminLinks />
        </div>
      </div>

      <div className="flex-1 ">
        <AdminNav />
        <div className="w-[95%]  justify-center mx-auto pb-8">{children}</div>
      </div>
    </div>
  );
}
