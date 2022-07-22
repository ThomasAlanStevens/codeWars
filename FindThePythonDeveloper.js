function getFirstPython(list) {
    let pythonDevs = list.filter(person => person.language == "Python")
    return pythonDevs.length === 0 ? `There will be no Python developers` : `${pythonDevs[0].firstName}, ${pythonDevs[0].country}`
  }