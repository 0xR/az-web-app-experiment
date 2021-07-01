import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { message } = await( await fetch(`/api/HttpTrigger1`)).json();
      setData(message);
    })();
  });

  return <div>{data}</div>;
}

export default App;
