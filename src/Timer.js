import {useState, useEffect} from 'react'
export function Timer(props){
    const [count, setCount] = useState(10)
    const [timerId, setTimerId] = useState(0)
    const handleTime = ()=>{
        setCount(count=>{
            console.log(count)
            if(count<=0){
                clearInterval(timerId)
                return 0;
            }
            
            return count-1
        })
    }
    useEffect(()=>{
        const id = setInterval(handleTime, 1000)
        console.log(id)
        setTimerId(id)
    }, [])

    return <span>{count!=0?count:"Time Out"}</span>
}