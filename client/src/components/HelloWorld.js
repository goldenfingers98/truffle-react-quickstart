import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


const HelloWorld = () => {

    const [value, setValue] = useState(0);
    const instance = useSelector(state => state.instance);
    const address = useSelector(state=>state.address);
    const inputRef = useRef();

    useEffect(()=>{
        instance && instance.methods.get().call({from: address}).then(res=>{
            setValue(res)
        })
    },[instance])

    const handler = (event) => {
        event.preventDefault();
        instance.methods.set(inputRef.current.value).send({from: address}).then(res=>{
            setValue(inputRef.current.value)
        });
    }

    return (
        <>
            <h1>Your value is { value }</h1>
            <input type="number" ref={inputRef}/>
            <button onClick={handler} >Submit</button>
        </>

    );
}

export default HelloWorld;