function toUnderscore(string) {
    if(typeof string != 'string'){
      return String(string)
    }
    else{
      string  = string.replace(/(?=[A-Z])/g, (e) => `${e}_`)
      return string.replace(/[A-Z]/g, (e) => `${e.toLowerCase()}`).slice(1,)
    }
  }