String.prototype.camelCase=function(){
    if(this == '') return ''
    return this.trim().split(' ').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join('')
  }