import { useParams } from 'react-router-dom';

function UserParams() {
  const users = [
    {
      name: 'James',
      id: 1,
    },
    {
      name: 'Rachel',
      id: 2,
    },
  ];
  const params = useParams();
  console.log(params.id);

  return (
    <>
      <p>{`User ID: ${params.id}`}</p>
      {
      users.map((user) => <p>{`Username is ${user.name} and ID is ${user.id}`}</p>)
    }
    </>
  );
}

export default UserParams;
