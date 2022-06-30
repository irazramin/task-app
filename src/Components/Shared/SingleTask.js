import React, {useEffect, useState} from 'react';


const SingleTask = ({task}) => {
    const [complete,setComplete] = useState(false)
    const completeTask = e =>{
        fetch(`http://localhost:5000/complete/${task._id}`,{
            method:"PUT",
            headers:{
                "Content-type":"application/json",
            },
            body:JSON.stringify({completeTask:e.target.checked}),
        })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
            })
        setComplete(e.target.checked)
    }
    return (
        <div className='m-4'>
            <div className='flex justify-between items-center'>
                <div className="form-check">
                    <input
                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="checkbox" value={true} id="flexCheckDefault" onChange={(e) => completeTask(e) }/>
                </div>
                <h3 className={`${task.completeTask ? 'line-through' : ''}`}>{task.task}</h3>
                <button >X</button>
            </div>

        </div>
    );
};

export default SingleTask;
