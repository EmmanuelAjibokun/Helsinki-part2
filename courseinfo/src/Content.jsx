import Part from "./Part"

const Content = (props) => {
  // const [part1, part2, part3] = props.parts;
  return (
    <div>
      {
        props.parts.map(part => <Part part={part.name} exercises={part.exercises} key={part.id} />)
      }
    </div>
  )
}

export default Content