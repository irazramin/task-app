import React from 'react';

const CompletedTask = ({task}) => {
    return (
        <div>
            <div className='m-4'>
                <div className='flex justify-between items-center'>
                    <h3 className='line-through'>{task.task}</h3>
                    <button >X</button>
                </div>

            </div>
        </div>
    );
};

export default CompletedTask;
