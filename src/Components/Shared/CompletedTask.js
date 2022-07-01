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
            <div className='m-4'>
                <div className='flex justify-between items-center p-5 rounded-lg shadow-lg bg-white'>
                    <h3 className='line-through'>{task.task}</h3>
                    <button onClick={deleteTask} className='mx-2'><FontAwesomeIcon icon={faTrashAlt} /></button>

                </div>

            </div>
        </div>
    );
};

export default CompletedTask;
