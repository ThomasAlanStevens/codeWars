//return the total number of smiling faces in the array
function countSmileys(arr) {
    return arr.filter(face => /[:;]/.test(face) && /[)D]/.test(face) && !/[^:;\-~)D]/.test(face) && (face.match(/[\-~]/) == null || face.match(/[\-~]/ig).length < 2)).length
  }