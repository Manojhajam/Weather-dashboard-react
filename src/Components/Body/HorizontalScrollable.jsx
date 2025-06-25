import React, {useRef} from 'react'

const HorizontalScrollable = ({ children, className = '' }) => {
    const scrollRef = useRef();

    const handleMouseDown = (event) => {
        const oldX = event.pageX;
        const scrollLeft = scrollRef.current.scrollLeft;
    

        const handleMouseMove = (event) => {
            const newX = event.pageX;
            const offset = newX - oldX;

            scrollRef.current.scrollLeft = scrollLeft - offset;
        }
        const handleMouseUp = () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener("mouseup", handleMouseUp);
    }

    
    return <div className={`overflow-x-hidden whitespace-nowrap cursor-grab active:cursor-grabbing ${className}`} ref={scrollRef} onMouseDown={handleMouseDown}>
        {children}
      </div>;
}

export default HorizontalScrollable;
