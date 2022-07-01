import React from 'react';
import SingleTask from "../../Shared/SingleTask";
import useFetch from "../../hooks/useFetch";
import CompletedTask from "../../Shared/CompletedTask";

const CompleteTask = () => {
    const [tasks, renderFlag, setRenderFlag] = useFetch();

    const completedTask = tasks.filter(task => task.completeTask);
    return (
        <div className='w-[70%] mx-auto min-h-screen relative'>
            <div className='lg:w-[50%] mx-auto mt-10'>
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
