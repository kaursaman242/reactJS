
const rootEl = document.getElementById("root-element")

const reactDom = ReactDOM.createRoot(rootEl)

const Counter = () => {

    const title = "Hello World!"
    // count is a state
    // const state = React.useState(100) // it gives out array of two
    // const value = state[0] // first index represents value
    // const setValue = state[1] // second index represents value

    const [count, setCount] = React.useState(0) // it gives out array of two

    React.useEffect(()=>{
        if(count!==0) alert("The count is "+count)
    },[count])
    React.useEffect(()=>{
        alert("Hello World!")
    },[])

    return (
        <div>
            <h1>{title}</h1>
            <div>
                <h3 id="counter">Counter: {count}</h3>
            </div>
            <div>
                <button id="counterBtn" onClick={() => {
                    setCount(count + 1)
                }}>
                    +
                </button>

                <div>
                    <button id="minusBtn" onClick={() => {
                        setCount(count - 1)
                    }}>
                        -
                    </button>
                </div>
            </div>
        </div>
    )
}


reactDom.render(<Counter />)