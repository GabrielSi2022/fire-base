import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import  AuthContextProvider  from "./contexts/AuthContext";

export default function App() {
  return (
    <div className="bg-gray-900 h-screen w-full">
     <AuthContextProvider>
      <Header/>
      <Sidebar/>
      </AuthContextProvider>
    </div>
  );
}


