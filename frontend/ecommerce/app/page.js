import Image from 'next/image';
import styles from './page.module.css';

async function getMessage() {
  const res = await fetch('http://localhost:1337/api/hellos?locale=all', { next: { revalidate: 1 } }); // The result is cached
  const resdata = await res.json();
  const data = resdata.data;
  return data;
}

export default async function Home() {
  const message = await getMessage();

  return (
    <main style={{ textAlign: 'center', marginTop: '250px' }}>
      <p style={{ marginBottom: '35px' }}>fetch("http://localhost:1337/api/hellos?locale=all")</p>
      {message &&
        message.map((item) => {
          return (
            <>
              <h2>
                {item.attributes.message} : locale = {item.attributes.locale}
              </h2>
            </>
          );
        })}
    </main>
  );
}
