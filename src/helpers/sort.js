const sortByPriceASC = (a,b) => {
  return parseFloat(a.price) - parseFloat(b.price);
}

const sortByPriceDESC = (a,b) => {
  return parseFloat(b.price) - parseFloat(a.price);
}

const sortByPopularityASC = (a,b) => {
  return parseFloat(a.purchasesCount) - parseFloat(b.purchasesCount);
}

const sortByPopularityDESC = (a,b) => {
  return parseFloat(b.purchasesCount) - parseFloat(a.purchasesCount);
}

const sortByRatingASC = (a,b) => {
  return parseFloat(a.rating) - parseFloat(b.rating);
}

const sortByRatingDESC = (a,b) => {
  return parseFloat(b.rating) - parseFloat(a.rating);
}

const sortByDiscountASC = (a,b) => {
  return parseFloat(a.discount) - parseFloat(b.discount);
}

const sortByDiscountDESC = (a,b) => {
  return parseFloat(b.discount) - parseFloat(a.discount);
}
const sortByNewASC = (a,b) => {
  if ((a.new === false) && (b.new === true)) {
    return -1;
  }

  if ((a.new === true) && (b.new === false)) {
    return 1;
  }

  if (a.new == b.new) {
    return 0;
  }
}

const sortByNewDESC = (a,b) => {
  if ((a.new === true) && (b.new === false)) {
    return -1;
  }

  if ((a.new === false) && (b.new === true)) {
    return 1;
  }

  if (a.new == b.new) {
    return 0;
  }
}

export default {
  price: {
    ASC: sortByPriceASC,
    DESC: sortByPriceDESC
  },
  popularity: {
    ASC: sortByPopularityASC,
    DESC: sortByPopularityDESC
  },
  rating: {
    ASC: sortByRatingASC,
    DESC: sortByRatingDESC
  },
  discount: {
    ASC: sortByDiscountASC,
    DESC: sortByDiscountDESC
  },
  new: {
    ASC: sortByNewASC,
    DESC: sortByNewDESC
  }
} 