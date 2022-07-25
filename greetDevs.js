function greetDevelopers(list) {
    list.forEach(listItem => {
      listItem.greeting = `Hi ${listItem.firstName}, what do you like the most about ${listItem.language}?`
    })
    return list
  }