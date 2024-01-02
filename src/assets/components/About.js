import { useEffect } from "react";

const About = ({setShowAddProduct}) => {
    useEffect(() => {
        setShowAddProduct(false);
    }, [setShowAddProduct]);
    return (
        <div className="p-4 md:container md:mx-auto min-h-[70vh]">
            <h1 className="text-3xl font-bold">About us</h1>
            <address className="flex-1 text-left py-4">
                <p>College de Maisonneuve</p>
                <p>3800 R. Sherbrooke E, Montréal, QC H1X 2A2</p>
                <p>Canada</p>
            </address>

        </div>
    )
}
export default About;