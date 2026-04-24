import "./Mybutton.scss";

const Mybutton = () => {
    return (
        <div>
            <button className="my-button" onClick={() => { alert('hello') }}>Click me</button>
        </div>
    )
}

export default Mybutton 