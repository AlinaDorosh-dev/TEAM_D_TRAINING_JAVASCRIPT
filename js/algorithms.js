let promedio = (temperaturas) => {
  let tempMaxima = Math.max(...temperaturas);
  let tempMinima = Math.min(...temperaturas);

  let promedio = (tempMaxima + tempMinima) / 2;

  console.log("La temperatura promedio en Sevilla fué de: " + promedio);
};

promedio([31.7, 30.7, 32.5, 29.4, 31.6, 28.5, 31.7]);
