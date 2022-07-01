import React, {useEffect} from 'react';
import SingleTask from "../../Shared/SingleTask";
import useFetch from "../../hooks/useFetch";
import {Link} from "react-router-dom";
import {useQuery} from "react-query";
import CompletedTask from "../../Shared/CompletedTask";
import "../../../App.css"
import TopBarProgress from "react-topbar-progress-indicator";
TopBarProgress.config({
    barColors: {
        "0": "blue",
        "1.0": "blue"
    },
    shadowBlur: 5
});
const Home = () => {
    const [tasks, renderFlag, setRenderFlag,isLoading] = useFetch();
    const completedTask = tasks.filter(task => task.completeTask);

    useEffect(() => {
        console.log('rendered...');
    }, [renderFlag]);



    return (
        <div className='md:w-[70%] mx-auto px-12 my-20 height'>
            {isLoading && <TopBarProgress />}
            <h2 className='my-10 text-lg font-bold text-center'>Total completed tasks : {completedTask.length}</h2>
            <div className='grid lg:grid-cols-2  grid-cols-1 mt-20 gap-10'>
                <div >
                        <div className='border p-6'>
                            <h4 className='text-center text-lg font-bold'>Completed tasks </h4>
                            {completedTask.length === 0 ? <h2 className='text-center my-20'>No complete task found</h2> : <>

                                {completedTask.map(task => <CompletedTask task={task} key={task._id} onComplete={(resp) => {
                                    setRenderFlag(resp.timestamp);
                                }} />)}

                                <div className='text-center'>
                                    <Link to='/completeTask'>
                                        <button type="button"
                                                className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">See more
                                        </button>
                                    </Link>
                                </div>
                            </>}

                        </div>
                </div>

                <div className='border p-6'>
                    <h4 className='text-center text-lg font-bold'>All tasks </h4>
                    {tasks.map(task =>{
                        return(
                           <SingleTask task={task} key={task._id} onComplete={(resp) => {
                               setRenderFlag(resp.timestamp);
                           }}/>
                        )
                    })}
                    <div className='text-center'>
                       <Link to='/todo'>
                           <button type="button"
                                   className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">+ Add more
                           </button>
                       </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;
