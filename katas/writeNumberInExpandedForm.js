function expandedForm(num) {
    return String(num).split('').reverse().map((int,i) => `${int}${'0'.repeat(i)}`).reverse().filter(num => +num != 0).join(' + ')
  }