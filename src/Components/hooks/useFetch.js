import React, {useEffect, useState} from 'react';

const useFetch = () => {
    const [tasks, setTasks] = useState([])
    const [renderFlag, setRenderFlag] = useState('')

    useEffect(() =>{
        fetch(`https://dry-tor-04054.herokuapp.com/task`)
            .then(res => res.json())
            .then(data =>{
                setTasks(data)
            });
    },[renderFlag])

    return [tasks, renderFlag, setRenderFlag]
};

export default useFetch;
