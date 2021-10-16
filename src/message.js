function Message({ greet="Hello", who }) {
  return (
    <div>
      {greet}, {who}
    </div>
  );
}

export default Message;
