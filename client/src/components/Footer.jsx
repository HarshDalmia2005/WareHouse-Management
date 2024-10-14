import facebook from "./facebook-brands-solid.svg"
import insta from "./instagram-brands-solid.svg"
import linkedin from './linkedin-brands-solid.svg'
import logo from './warehouse-solid.svg'
// import './Header.css'
const Footer = () => {
    return (
        <footer id="contact" className=" text-black py-8">
      
           
            <div className="container mx-auto  gap-8  border-t-2 py-3 border-black flex justify-between">
              
                <div className="w-[70%]">
                    <div className="flex">
                    <h1 className="font-inter block text-2xl font-bold text-black mr-5">WareHouse <br /><span className="bg-gradient-to-r from-red-950 to-cyan-500 bg-clip-text text-transparent">Management</span><br />System</h1>
                    <img src={logo} className="w-20" />
                    </div>
                    <p className="text-sm mt-5">
                    A Warehouse Management System (WMS) is software that optimizes warehouse operations, improving inventory tracking, order accuracy, and workflow efficiency. It helps automate tasks like picking, packing, and shipping, reducing errors and boosting productivity.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-bold mb-4">Follow Us</h2>
                    <div className="flex space-x-6 items-center">
                        <a href="#" className="hover:text-red-950"><img src={facebook} className="w-10 h-10 " />Facebook</a>
                        <a href="#" className="hover:text-red-950"><img src={insta} className="w-10 h-10 " />Instagram</a>
                        <a href="#" className="hover:text-red-950"><img src={linkedin} className="w-10 h-10" />LinkedIn</a>

                    </div>

                    <h2 className="text-lg font-bold mt-8">Contacts</h2>
                    <p className=" mt-2">Mobile No. : +91 6290104831
                        <br/>
                        Email : contact@wareHouseManagement.org</p>
                </div>
            </div>

            <div className="mt-8 border-t border-black pt-4 text-center text-sm">
                © 2024 WareHouse Management System. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;