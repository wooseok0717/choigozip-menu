module.exports = {
  capitalize: (input) => {
    if (!input) {
      return input;
    }
    return input.split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join(' ');
  }
}