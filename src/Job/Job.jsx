
import { MdOutlineLocationOn } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
const Job = ({ job }) => {

    const { logo,job_title,company_name,remote_or_onsite,location,job_type, salary    } = job;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            {/* <figure><img src={logo} alt="Shoes" /></figure> */}
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p className="text-left">{company_name}</p>

                <div className="text-left">
                    <button className="px-3 py-2 border rounded mr-2 font-bold">{remote_or_onsite}</button>
                    <button className="px-3 py-2 border rounded mr-2 font-bold">{job_type}</button>
                </div>

                <div className="text-left flex gap-5">
                    <h2 className="flex"> <MdOutlineLocationOn className="text-2xl"></MdOutlineLocationOn> {location}</h2>
                    <h2 className="flex"> <FaDollarSign className="text-xl"></FaDollarSign> {salary}</h2>
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;