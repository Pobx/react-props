function Hello(props) {
  return <div>Hello, {props.who} <button type="button" onClick={props.fn}>Alert</button></div>
}

export default Hello;