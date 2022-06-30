import React from 'react';
import SingleTask from "../../Shared/SingleTask";

const Home = () => {
    const tasks = [
        {
            id:1,
            task:"asdkjajk asjhsa askjdhas skajda"
        },
        {
            id:2,
            task:"asdkjajk asjhsa askjdhas skajda"
        },
        {
            id:3,
            task:"asdkjajk asjhsa askjdhas skajda"
        },
    ]
    return (
        <div className='lg:w-[60%] mx-auto'>
            <h2>Total completed tasks {0}</h2>
            <div className='grid lg:grid-cols-2  grid-cols-1 mt-20 gap-10'>
                <div className='border p-6'>
                        <h4 className='text-center text-lg font-bold'>Completed tasks </h4>
                    {tasks.map(task =>{
                        return(
                            <div className='m-4'>
                                <div className='flex justify-between items-center'>
                                    <h3 className='line-through'>{task.task}</h3>
                                    <button >X</button>
                                </div>

                            </div>
                        )
                    })}
                  <div className='text-center'>
                      <button type="button"
                              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">See more
                      </button>
                  </div>
                </div>

                <div className='border p-6'>
                    <h4 className='text-center text-lg font-bold'>All tasks </h4>
                    {tasks.map(task =>{
                        return(
                           <SingleTask task={task} key={task.id} />
                        )
                    })}
                    <div className='text-center'>
                        <button type="button"
                                className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">+ Add more
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
