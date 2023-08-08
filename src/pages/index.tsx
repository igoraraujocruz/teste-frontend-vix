import { useEffect } from 'react';

export default function Home() {
  fetch('http://localhost:3000/api/users')
    .then(async response => await response.json())
    .then(data => {
      console.log(data);
    });
  return <h1>Hello World</h1>;
}
