import Navbar from "../components/front/Navbar";
import Topbar from "../components/front/Topbar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
      <>{children}</>
  );
}
