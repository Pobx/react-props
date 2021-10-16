// import Hello from "./hello";
import Message from "./message";

function App() {
  // const name ='Geidtiphong'
  const objMessage = { greet: "Hi", who: "Poppy" };
  return (
    <div className="App">
      {/* <Hello who={`My Name is ${name}`} /> */}
      {/* <Hello who={99} /> */}
      {/* <Hello who="Pobx" /> */}
      {/* <Message greet="Hi" who="Geidtiphong Singseewo" /> */}
      {/* <Message who="Pobx" /> */}
      <Message {...objMessage} />
    </div>
  );
}

export default App;
