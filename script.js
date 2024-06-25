function toggleMode() {
  const html = document.documentElement

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }

  //html.classList.toggle("light") // Tem a mesma função do if acima

  //alterando a imagem do avatar
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/gato_oculos_de_sol.jpg")
    img.setAttribute("alt", "Gato cinza olhando para cima")
  } else {
    img.setAttribute("src", "./assets/Avatar.png")
  }
}
