import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleMyBooksClick = () => {
    navigate("/mybooks");
  };

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={handleLogoClick}
          >
            <h1 className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
              BookStore
            </h1>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={handleMyBooksClick}
              className="text-gray-600 hover:text-gray-800"
            >
              My Books
            </Button>
            {user && (
              <>
                <Button
                  variant="ghost"
                  className="text-gray-600 hover:text-gray-800"
                >
                  {user.email}
                </Button>

                <Button
                  variant="default"
                  onClick={handleLogout}
                  className="text-white hover:bg-gray-600"
                >
                  Logout
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
