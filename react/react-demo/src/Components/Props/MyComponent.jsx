import ComponentWithProps from './ComponentWithProps'

const MyComponent = () => {
  return (
        <>
        <h1>Hello Worlds?</h1>
        <p> Trying out empty tags</p>
        <ComponentWithProps
        header="Header"
        content="This is the content"
        number ="34"
        nonexistent="Ghosts"
        />
        </>
  )
}

export default MyComponent
