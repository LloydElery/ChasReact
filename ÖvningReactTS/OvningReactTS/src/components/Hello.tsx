import App from "../App";

const sayHello = ["Hello", "Hejsan", "Hola", "Good day"];
const Hello = (props: typeof sayHello) => {
  return <>{props.count % 2 == 0 ? sayHello : null} </>;
};

export default Hello;
