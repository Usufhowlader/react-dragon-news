import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex my-6">
            <button className="btn btn-danger">Breaking News</button>
            <Marquee pauseOnHover='true' speed={100}>
             <Link to='/' className="mr-6"> I can be a React component, multiple React components....</Link>
             <Link to='/' className="mr-6"> I can be a React component, multiple React components....</Link>
             <Link to='/' className="mr-6"> I can be a React component, multiple React components....</Link>
             <Link to='/' className="mr-6"> I can be a React component, multiple React components....</Link>
             <Link to='/' className="mr-6"> I can be a React component, multiple React components....</Link>
             <Link to='/' className="mr-6"> I can be a React component, multiple React components....</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;