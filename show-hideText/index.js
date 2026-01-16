
  const rootEl = document.getElementById("root-element");
  const reactDom = ReactDOM.createRoot(rootEl);

const Text=()=>{
    const [showText, setShowText] = React.useState(false);

    function toggleText() {
      setShowText(!showText);
    }
  

    return (
      <div>
        <button onClick={toggleText}>
          Show / Hide Text
        </button>

        {showText && <p>Hello! This text is shown and hidden.</p>}
      </div>
    );
  }

  reactDom.render(<Text />);

