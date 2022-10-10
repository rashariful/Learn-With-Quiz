import { Link } from "react-router-dom";

const Quiz = ({qz}) => {
const {name, logo, id , total} = qz
// console.log(qz);
    return (
        <div className="gap-4 grid border border-indigo-400 py-6 px-4 rounded-md shadow-sm">
            <img src={logo} className='bg-indigo-300 rounded-md' alt="" />
            <h3>Name: {name}</h3>
            <h3>Totall QS: {total}</h3>
            <Link to={`/qz/${id}`}>
                <button className="btn btn-primary w-full">Start Quiz</button>
            </Link>
        </div>
    );
};

export default Quiz;