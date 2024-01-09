import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="p-4 md:container md:mx-auto">
            <nav className="flex flex-row justify-end gap-5 min-h-36 text-indigo-700 text-xl font-bold">
                <Link to="/" className="text-center p-2 hover:text-indigo-400 transition ease-in-out delay-150 duration-300">Home</Link>
                <Link to="/products" className="text-center p-2 hover:text-indigo-400 transition ease-in-out delay-150 duration-200">Products</Link>
                <Link to="/about" className="text-center p-2 hover:text-indigo-400 transition ease-in-out delay-150 duration-200">About</Link>
            </nav>
        </div>
    )
}
export default Header;