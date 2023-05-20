class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' '']+/g, "");
  }

  static titleize(string){
    let articles = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let stringArray = string.split(" ")
    stringArray[0] = Formatter.capitalize(stringArray[0])
    for (let i=1; i<stringArray.length; i++){
      if(articles.indexOf(stringArray[i]) === -1){
        stringArray[i] = Formatter.capitalize(stringArray[i])
      }
    }
    return stringArray.join(" ")
  }
}