const ComponentWithProps = props => {
  return (
        <>
        <h1>{props.header}</h1>
        <p>{props.content}</p>
        <p>{props.number} plus some text</p>
        <p>{props.nonexistent} along with some text</p>
        </>
  )
}

export default ComponentWithProps
