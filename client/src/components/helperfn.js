module.exports = {
  capitalize: (input) => {
    if (!input) {
      return input;
    }
    return input.split(' ').map(x => {
      if (x[0] === undefined) {
        return x;
      }
      return x[0].toUpperCase() + x.slice(1);
    }).join(' ');
  }
}