function printerError(s) {
    return `${s.split('').filter(l => !/[a-m]/gi.test(l)).length}/${s.length}`
}