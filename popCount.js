function popCount(bs) {
  switch (bs) {
    case 0:
      return 0;

    case 1:
      return 1;

    default:
      if (bs % 2 === 0) {
        return popCount(bs >> 1);
      } else {
        return 1 + popCount(bs >> 1);
      }
  }
}



module.exports = popCount;
