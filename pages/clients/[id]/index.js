import { useRouter } from 'next/router';

export default function ClientProjectPage() {
  const router = useRouter();

  const LoadProjecthandler = () => {
    router.push('/clients/1/projecta');
  };

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={LoadProjecthandler}>Load Project A</button>
    </div>
  );
}
