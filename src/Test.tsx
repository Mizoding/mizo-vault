import { useState } from "react"

export const Test = ({name}: {name: string}) => {
    const [count,setCount] = useState(1);
    return(
        <div>
            <h1>Hello {name} x{count}!</h1>
            <button onClick={() => setCount((c) => c + 1)}>Increment</button>
        </div>
    )
}