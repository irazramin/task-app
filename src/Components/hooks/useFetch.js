import React, {useEffect, useState} from 'react';

const useFetch = () => {
    const [tasks, setTasks] = useState([])
    const [renderFlag, setRenderFlag] = useState('');
    const [isLoading,setIsLoading] = useState(false)


    useEffect(() =>{
        setIsLoading(true)
        fetch(`https://dry-tor-04054.herokuapp.com/task`)
            .then(res => res.json())
            .then(data =>{
                setTasks(data)
                setIsLoading(false)
            });
    },[renderFlag])

    return [tasks, renderFlag, setRenderFlag,isLoading];
};

export default useFetch;
