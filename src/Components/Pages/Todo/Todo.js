import React, {useEffect, useRef, useState} from 'react';
import SingleTask from "../../Shared/SingleTask";
import useFetch from "../../hooks/useFetch";
import {useQuery} from "react-query";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
const Todo = () => {

    const [showInput, setShowInput] = useState(false);
    const [task, setTask] = useState('');
    const [tasks, renderFlag, setRenderFlag] = useFetch();

    useEffect(() => {
        console.log('rendered...');
    }, [renderFlag]);

    const addTask = (value) => {
        if(value === ''){
            return
        }
        const task = {task:value};
        fetch(`https://dry-tor-04054.herokuapp.com/task`,{
            method:"POST",
            headers:{
                "Content-type":"application/json",
            },
            body:JSON.stringify(task),
        })
            .then(res => res.json())
            .then(data =>{
                setRenderFlag(data.timestamp);
                setTask('')
            });
    }

    return (
        <div className='mt-20 mx-auto w-[70%]'>
            <div className='lg:w-[50%] mx-auto mt-10'>
                <div className='border p-6'>
                    <h4 className='text-center text-lg font-bold my-3'>All tasks </h4>

                    {showInput ?
                        <div>
                            <div className="flex justify-center items-center ">
                                <div className="mb-3 xl:w-96">
                                    <form onSubmit={(e) => e.preventDefault()}>
                                        <input
                                            value={task}
                                            onChange={(e) => setTask(e.target.value)}
                                            onKeyDown={(e) => e.keyCode === 13 ? addTask(task) : null}
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
                                <button className='mx-5 my-5' onClick={() => setShowInput(false)}>X</button>
                            </div>
                        </div> : <div className='flex justify-center'>
                            <button type="button"
                                    onClick={() => setShowInput(true)}
                                    className="border-[3px] font-semibold text-sm text-black  border-dashed  w-[50%] mx-auto p-1 rounded-[50px]  bg-gray-100">
                                 <FontAwesomeIcon icon={faPlus} className='text-gray-800' /> Add Task
                            </button>

                        </div>}
                    {tasks.map(task => {
                        return (
                            <SingleTask task={task} key={task._id} onComplete={(resp) => {
                                setRenderFlag(resp.timestamp);
                            }} />
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Todo;
