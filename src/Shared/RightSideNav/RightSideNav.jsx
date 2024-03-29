import {  FaGoogle,FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'
const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
            <h2 className="text-3xl font-bold">Login With</h2>
            <button className="btn outline w-full p-2 text-xl mb-2">
            < FaGoogle></FaGoogle>
                   Google                  
            </button>
            <button className="btn outline w-full p-2 text-xl">
            < FaGithub></FaGithub>
                   Github                  
            </button>
            </div>
            <div className="p-4 mb-6">
            <h2 className="text-3xl font-bold mb-2">Find Us</h2>
             <a className='flex items-center border rounded-t-lg p-4' href="">
                <FaFacebook className='mr-4 text-2xl '></FaFacebook>
                <small className='text-2xl'>Facebook</small>
             </a>
             <a className='flex items-center border  p-4' href="">
                <FaTwitter className='mr-4 text-2xl'></FaTwitter>
                <small className='text-2xl'>Twitter</small>
             </a>
             <a className='flex items-center border rounded-b-lg p-4' href="">
                <FaInstagram className='mr-4 text-2xl'></FaInstagram>
                <small className='text-2xl'>Instagram</small>
             </a>
            </div>
            {/* Q Zone */}
            <div className="p-4 space-y-3 mb-6">
            <h2 className="text-3xl font-bold">Q Zone</h2>
             <img src={qZone1} alt="" />
             <img src={qZone2} alt="" />
             <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;