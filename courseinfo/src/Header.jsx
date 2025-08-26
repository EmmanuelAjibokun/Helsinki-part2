const Header = ({heading, title}) => {
  if (heading == 'h1') {
    return (
      <h1>{title}</h1>
    )
  } else if (heading == 'h2') {
    return (
      <h2>{title}</h2>
    )
  } else if (heading == 'h3') {
    return (
      <h3>{title}</h3>
    )
  } else if (heading == 'h4') {
    return (
      <h4>{title}</h4>
    )
  }
}

export default Header