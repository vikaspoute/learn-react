function Hello() {
  var name = "Vikas";
  let getName = () => name;
  return <h3>Hello this is future {getName()}</h3>;
}

export default Hello;
