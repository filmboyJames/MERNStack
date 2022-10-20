/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-comment-textnodes */
function Hello(props) {
  return (
    <h1>
      Hello,
      {' '}
      // eslint-disable-next-line react/destructuring-assignment
      {props.name}
    </h1>
  );
}

// const PropComp = () => {
//     return(
//         <>
//         <Hello name="Chris"/>
//         <Hello name="P."/>
//         <Hello name="Bacon"/>
//         </>
//     )
// }

export default Hello;
