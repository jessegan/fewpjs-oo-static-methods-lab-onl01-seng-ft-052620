class Formatter {
  //add static methods here

  static capitalize(string){
    return string.slice(0,1).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string){
    let words = string.split(" ")
    let except = ["a","an","but","of","for","at","by","from","the","and"]

    let titleized_words = words.map((word,i) => {
      if(i > 0 && except.includes(word)){
        return word
      } else {
        return this.capitalize(word)
      }
    })

    return titleized_words.join(" ")
  }
}