import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons'

const SingleTask = ({task, onComplete}) => {
    const [complete,setComplete] = useState(false);
    const [isEditable, setIsEditable] = useState(false);
    const [taskIn, setTaskIn] = useState(task.task);

    const completeTask = e =>{
        fetch(`https://dry-tor-04054.herokuapp.com/complete/${task._id}`,{
            method:"PUT",
            headers:{
                "Content-type":"application/json",
            },
            body:JSON.stringify({completeTask:e.target.checked}),
        })
            .then(res => res.json())
            .then(data =>{
                setComplete(e.target.checked);
                onComplete(data);
            })
    }

    const addTask = (value) => {
        const uTask = {task:value};
        fetch(`https://dry-tor-04054.herokuapp.com/task/${task._id}`,{
            method:"PUT",
            headers:{
                "Content-type":"application/json",
            },
            body:JSON.stringify(uTask),
        })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                onComplete(data)
            })
    }

    const deleteTask = () =>{
        fetch(`https://dry-tor-04054.herokuapp.com/task/${task._id}`,{
            method:"DELETE",
        })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                onComplete(data);

            });
    }
    return (
        <div className='my-5'>
            <div className='flex justify-between items-center p-5 rounded-lg shadow-lg bg-white'>
                <div className="form-check flex">
                    <input
                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="checkbox" checked={task.completeTask} id="flexCheckDefault" onChange={(e) => completeTask(e) }/>
                    {isEditable
                        ?
                        <>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <input
                                    value={taskIn}
                                    onChange={(e) => setTaskIn(e.target.value)}
                                    onKeyDown={(e) => e.keyCode === 13 ?
                                        <>
                                            {
                                                addTask(taskIn)
                                            }
                                            {setIsEditable(false)}
                                        </> : null}
                                    type="text"
                                    className="
                                        form-control
                                        block
                                        w-full
                                        px-3
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding
                                        border border-solid border-gray-300
                                        rounded
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                    "
                                    id="exampleFormControlInput1"
                                    placeholder="Enter your task"
                                />
                            </form>
                        </>
                        :
                        <h3 className={`${task.completeTask ? 'line-through' : ''}`}>{task.task}</h3>

                    }
                </div>


                <div className=''>
                    {task.completeTask ? '' : <button onClick={() => setIsEditable(!isEditable)} className='mx-2' >{isEditable ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faEdit} />}</button>
                    }
                    <button onClick={deleteTask} className='mx-2'><FontAwesomeIcon icon={faTrashAlt} /></button>
                </div>
            </div>
        </div>
    );
};

export default SingleTask;
