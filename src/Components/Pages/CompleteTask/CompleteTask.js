import React from 'react';
import SingleTask from "../../Shared/SingleTask";
import useFetch from "../../hooks/useFetch";
import CompletedTask from "../../Shared/CompletedTask";
import '../../../App.css'
import TopBarProgress from "react-topbar-progress-indicator";
TopBarProgress.config({
    barColors: {
        "0": "blue",
        "1.0": "blue"
    },
    shadowBlur: 5
});
const CompleteTask = () => {
    const [tasks, renderFlag, setRenderFlag,isLoading] = useFetch();

    const completedTask = tasks.filter(task => task.completeTask);
    return (
        <div className='w-[70%] mx-auto my-20  height'>
            {isLoading && <TopBarProgress />}

            <div className='lg:w-[50%] mx-auto '>
                <div className='border p-6'>
                    <h4 className='text-center text-lg font-bold'>Completed tasks </h4>
                   {completedTask.length === 0 ? <h2 className='text-center my-20'>No complete task found</h2> : <>

                       {completedTask.map(task => <CompletedTask task={task} key={task._id} onComplete={(resp) => {
                           setRenderFlag(resp.timestamp);
                       }} />)}
                   </>}
                </div>
            </div>
        </div>
    );
};

export default CompleteTask;
