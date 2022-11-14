import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import AuthContextProvider, { AuthContext } from "./contexts/AuthContext";

export default function App() {
  return (
    <AuthContextProvider>
      <div className="bg-gray-900 h-screen w-full">
        <Header />
        <Sidebar />
      </div>
    </AuthContextProvider>
  );
}
