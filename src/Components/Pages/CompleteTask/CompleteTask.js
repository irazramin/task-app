import React from 'react';
import SingleTask from "../../Shared/SingleTask";
import useFetch from "../../hooks/useFetch";
import CompletedTask from "../../Shared/CompletedTask";

const CompleteTask = () => {
    const [tasks] = useFetch();
    const completedTask = tasks.filter(task => task.completeTask);
    return (
        <div className='w-[70%] mx-auto'>
            <div className='lg:w-[50%] mx-auto mt-10'>
                <div className='border p-6'>
                    <h4 className='text-center text-lg font-bold'>Completed tasks </h4>
                    {completedTask.map(task => <CompletedTask task={task} key={task._id}/>)}
                </div>
            </div>
        </div>
    );
};

export default CompleteTask;
