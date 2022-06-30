import React from 'react';

const SingleTask = ({task}) => {
    return (
        <div className='m-4'>
            <div className='flex justify-between items-center'>
                <div className="form-check">
                    <input
                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="checkbox" value="" id="flexCheckDefault" />
                </div>
                <h3 className={`${task.complete ? 'line-through' : ''}`}>{task.task}</h3>
                <button >X</button>
            </div>

        </div>
    );
};

export default SingleTask;
