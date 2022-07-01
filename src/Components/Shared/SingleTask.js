import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons'

const SingleTask = ({task}) => {
    const [complete,setComplete] = useState(false);
    const [isEditable, setIsEditable] = useState(false);
    const [taskIn, setTaskIn] = useState(task.task);

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

    const addTask = (value) => {
        console.log(value)
        // const task = {task:value};
        // fetch(`http://localhost:5000/task`,{
        //     method:"PUT",
        //     headers:{
        //         "Content-type":"application/json",
        //     },
        //     body:JSON.stringify(task),
        // })
        //     .then(res => res.json())
        //     .then(data =>{
        //         console.log(data)
        //     })
    }
    return (
        <div className='m-4'>
            <div className='flex justify-between items-center'>
                <div className="form-check">
                    <input
                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="checkbox" value={true} id="flexCheckDefault" onChange={(e) => completeTask(e) }/>
                </div>
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
                    <h3 className={`${task.completeTask ? 'line-through' : ''}`}>{task.task}</h3>}

                <div className=''>
                    {task.completeTask ? '' : <button onClick={() => setIsEditable(!isEditable)} className='mx-2' >{isEditable ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faEdit} />}</button>
                    }
                    <button className='mx-2'><FontAwesomeIcon icon={faTrashAlt} /></button>
                </div>
            </div>
            <div
                className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                id="exampleModalCenter" tabIndex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true"
                role="dialog">
                <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                    <div
                        className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div
                            className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                            <h5 className="text-xl font-medium leading-normal text-gray-800"
                                id="exampleModalScrollableLabel">
                                Edit Task
                            </h5>
                            <button type="button"
                                    className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                    data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body relative p-4">
                            <form onSubmit={(e) => e.preventDefault()}>
                                <input
                                    value={task.task}
                                    // onChange={(e) => setTask(e.target.value)}
                                    // onKeyDown={(e) => e.keyCode === 13 ? addTask(task) : null}
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
                        </div>
                        <div
                            className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                            <button type="button"
                                    className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                                    data-bs-dismiss="modal">
                                Close
                            </button>
                            <button type="button"
                                    className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleTask;
