import Header from "./Header";

const Total = (props) => {
  // get total of exercises using the reduce method.
  // accumulator is the returned value of the last execution of the callback fn: on the first call, it's value is initialValue if specified, and if not, it's the array[0]
  // currentvalue is the value at the current index in process.
  const total = props.parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0)

  return (
    <Header heading={'h4'} title={`total of ${total} execises`} />
  )
}

export default Total