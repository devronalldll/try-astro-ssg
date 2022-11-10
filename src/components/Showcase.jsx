import {useState} from 'react'
function Showcase() {
  const [name, setName] = useState("Brad")
  return <>
    <h1>Hello {name}</h1>
  </>;
}
export default Showcase;
