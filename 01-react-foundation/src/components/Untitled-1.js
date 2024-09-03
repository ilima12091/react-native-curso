function countEights(from, to) {
  let eights = 0;
  for (let count = from; count <= to; count++) {
    let number = count.toString();
    // Recorremos cada dígito del número y sumamos si es "8"
    for (let digit of number) {
      if (digit === "8") {
        eights++;
      }
    }
  }
  console.log(eights);
}

countEights(100, 999);
