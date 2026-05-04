    fetch("https://dummyjson")
      .then(res => res.json())
      .then(data => setRate(data?.rates?.USD || 1))
      .catch(() => setRate(1));
 ), []);