  export function superheroAlignment (superhero){
    if (superhero.biography.alignment === "good") {
      return "Bueno"
    }
    if (superhero.biography.alignment === "bad") {
      return "Malo"
    }
    return "-"
}
  
