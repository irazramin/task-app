import React, {useEffect, useRef, useState} from 'react';
import SingleTask from "../../Shared/SingleTask";
import useFetch from "../../hooks/useFetch";

const Todo = () => {
    const [showInput, setShowInput] = useState(false);
    const [task, setTask] = useState('');
    const [tasks] = useFetch();

    // const tasks = [
    //     {
    //         id: 1,
    //         task: "asdkjajk asjhsa askjdhas skajda"
    //     },
    //     {
    //         id: 2,
    //         task: "asdkjajk asjhsa askjdhas skajda"
    //     },
    //     {
    //         id: 3,
    //         task: "asdkjajk asjhsa askjdhas skajda"
    //     },
    // ]

    // useEffect(() =>{
    //     fetch(`http://localhost:5000/task`)
    //         .then(res => res.json())
    //         .then(data =>{
    //             setTasks(data)
    //         })
    // },[])

    const addTask = (value) => {
        const task = {task:value};
        fetch(`http://localhost:5000/task`,{
            method:"POST",
            headers:{
                "Content-type":"application/json",
            },
            body:JSON.stringify(task),
        })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
            })
    }
    return (
        <div className='mt-20 mx-auto w-[70%]'>
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
                            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add
                        a new task
                    </button>
                </div>}

            <div className='lg:w-[50%] mx-auto mt-10'>
                <div className='border p-6'>
                    <h4 className='text-center text-lg font-bold'>All tasks </h4>
                    {tasks.map(task => {
                        return (
                            <SingleTask task={task} key={task._id}/>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Todo;
