let jmeno = prompt("Zadejte křestní jméno (bez diakritiky):")
let prijmeni = prompt("Zadejte příjmení (bez diakritiky):")
jmeno = jmeno.trim()
jmeno = jmeno.toLowerCase()
jmeno = jmeno.slice(0,3)
prijmeni = prijmeni.trim()
prijmeni = prijmeni.toLowerCase()
prijmeni = prijmeni.slice(0,5)

document.body.innerHTML += `
<span class="before-name">${prijmeni}</span><span class="before-surname">${jmeno}</span><span class="after">@fit.cvut.cz</span>
`
