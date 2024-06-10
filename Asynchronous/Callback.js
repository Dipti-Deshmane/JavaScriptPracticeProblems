function fetchData(callback) {
    setTimeout(() => {
      callback('Data received');
    }, 1000);
  }
  
  function handleData(data) {
    console.log(data);
  }
  
  fetchData(handleData); // "Data received" after 1 second
  