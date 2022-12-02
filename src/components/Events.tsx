import React, {FC, useRef, useState} from 'react';

const Events: FC = () => {
    const [value, setValue] = useState<string>('');
    const [drag, setDrag] = useState<boolean> (false);
    const inputRef = useRef<HTMLInputElement>(null);
    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('drag')
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDrag(false);
    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDrag(false);
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDrag(false);
        console.log('drop');
    }

    return (
        <div>
            <input type="text" onChange={changeHandler} value={value} placeholder="Управляемый"/>
            <input type="text" ref={inputRef} placeholder="useRef"/>
            <button onClick={clickHandler}>click</button>
            <div  onDrag={dragHandler} draggable style={{width: 200, height: 200, background: 'red'}}></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{width: 200, height: 200, background: drag ? 'teal': 'red', marginTop: 24}}
            >

            </div>
        </div>
    );
};

export default Events;