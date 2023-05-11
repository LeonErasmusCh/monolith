import Image from 'next/image'
import styles from './page.module.css'

async function getMessage() {
  const res = await fetch('http://localhost:1337/api/hellos/2',
  { next : { revalidate : 1}}
  ); // The result is cached
  const resdata = await res.json();
  const message = resdata.data.attributes.message
  return message
}
 

export default async function Home() {
  const message = await getMessage()
  return (
    <main className={styles.main}>
      <h1>{message}</h1> 
    </main>
  )
}
