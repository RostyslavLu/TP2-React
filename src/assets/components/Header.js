import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="p-4 md:container md:mx-auto">
            <nav className="flex flex-row justify-end gap-5 min-h-36 text-indigo-700 text-xl font-bold">
                <Link to="/" className="text-center p-2">Home</Link>
                <Link to="/products" className="text-center p-2">Products</Link>
                <Link to="/about" className="text-center p-2">About</Link>
            </nav>
        </div>
    )
}
export default Header;