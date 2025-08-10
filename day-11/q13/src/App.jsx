import Navbar from "./Navbar";
import Main1 from "./Main1";
import Footer from "./Footer";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Main1 />
      <Footer />
    </AuthProvider>
  );
}

export default App
