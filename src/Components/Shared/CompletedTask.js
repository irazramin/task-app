import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons'
const CompletedTask = ({task,onComplete}) => {

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
        <div>
            <div className='lg:m-5 m-3'>
                <div className='flex justify-between items-center p-5 rounded-lg shadow-lg bg-white'>
                    <h3 className='line-through'>{task.task.length > 25 ? task.task.slice(0,25)+"...." : task.task}</h3>
                    <button onClick={deleteTask} className='mx-2'><FontAwesomeIcon icon={faTrashAlt} /></button>

                </div>

            </div>
        </div>
    );
};

export default CompletedTask;
