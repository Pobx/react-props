import Hello from "./hello";
// import Card from "./card";
// import Message from "./message";
// import MyChildren from "./MyChildren";

function App() {
  // const name ='Geidtiphong'
  // const objMessage = { greet: "Hi", who: "Poppy" };
  // const todos = [
  //   { id: 1, name: "Pobx 1" },
  //   { id: 2, name: "Pobx 2" },
  //   { id: 3, name: "Pobx 3" },
  // ];

  const fn = () => alert(1);

  return (
    <div className="App">
      {/* <Hello who={`My Name is ${name}`} /> */}
      {/* <Hello who={99} /> */}
      <Hello who="Pobx" fn={fn} />
      {/* <Message greet="Hi" who="Geidtiphong Singseewo" /> */}
      {/* <Message who="Pobx" /> */}
      {/* <Message {...objMessage} /> */}
      {/* <MyChildren>
        <h1>Pobx6666666666666666</h1>
      </MyChildren> */}
      {/* {todos.map((todo, index) => (
        <Card todo={todo} key={index} />
      ))} */}
    </div>
  );
}

export default App;
