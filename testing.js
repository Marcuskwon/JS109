function findNextSquare(sq) {
  console.log(Math.sqrt(sq))
  console.log(Math.floor(Math.sqrt(sq)));
  if (Math.sqrt(sq) - Math.floor(Math.sqrt(sq)) !== 0) {
    return (Math.sqrt(sq) + 1) ** 2;
  }
  
  
  // Return the next square if sq is a perfect square, -1 otherwise
  return -1;
}

findNextSquare(5);
findNextSquare(4);
findNextSquare(121);