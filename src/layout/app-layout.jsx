import { Outlet } from "react-router-dom";
import Header from "@/components/header";
const AppLayout = () => {
  return(
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container px-10">
        <Header/>
      <Outlet/>
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
        Made  by  Abhiman 
      </div>
    </div>
  );
  
}

export default AppLayout;