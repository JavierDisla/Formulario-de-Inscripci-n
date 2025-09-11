 let root = document.getElementById("root")

 
 let lblNombreCompleto = document.createElement(`p`)
 lblNombreCompleto.textContent = `Nombre: `
 root.appendChild(lblNombreCompleto)

 let inpNombre = document.createElement(`input`)
 inpNombre.placeholder = `Introduce Nombre Completo`
 root.appendChild(inpNombre)

 

 let lbledad = document.createElement(`p`)
 lbledad.textContent = `Edad:`
 root.appendChild(lbledad)

 let inpedad = document.createElement(`input`)
 inpedad.placeholder = `Introduce la Edad `
 root.appendChild(inpedad)


 
 let lblcorreo = document.createElement(`p`)
 lblcorreo.textContent = `Correo:`
 root.appendChild(lblcorreo)

 let inpcorreo = document.createElement(`input`)
 inpcorreo.placeholder = `Correo Completo Sin Espacios`
 root.appendChild(inpcorreo)
 

 let lblModalida = document.createElement(`p`)
 lblModalida.textContent = `Modalidad:`
 root.appendChild(lblModalida)

 let inpmodalida = document.createElement(`input`)
 inpmodalida.placeholder = `Noche, Tarde, Mañana`
 root.appendChild(inpmodalida)
