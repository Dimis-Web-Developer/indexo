import Login from "./Login";
import Register from  "./Register"

function TopBar() {
  return (
    <div className="hidden md:flex h-12 w-full items-center justify-end bg-black border-t-4 border-blue-600 px-6">
      <div className="flex items-center gap-3">
        <Login />
        <span className="text-gray-400">/</span>
        <Register />
      </div>
    </div>
  );
}

export default TopBar;


