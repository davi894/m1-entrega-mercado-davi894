/* console.log(products) */

function frutas() {

    let ulfrutas = document.querySelector("#frutas")
    console.log(ulfrutas)

    for (let i = 0; i < products.length; i++) {
        if (products[i].category == "Frutas") {
            /*  image: undefined, */
            let img = document.createElement("img")
            img.setAttribute("class", "product-img")
            img.src = `${products[i].image}`
            console.log(products[i].image)

            if (products[i].image == undefined) {
                img.src = "./img/products/no-img.svg"
            }

            let main = document.createElement("main")
            main.setAttribute("class", "product-main")

            let h2 = document.createElement("h2")
            h2.setAttribute("class", "product-title")
            h2.innerText = `${products[i].title}`

            let h5 = document.createElement("h5")
            h5.setAttribute("class", "product-category")
            h5.innerText = `${products[i].category}`

            let strong = document.createElement("strong")
            strong.setAttribute("class", "product-price")
            strong.innerText = `R$ ${products[i].price}`

            let lifrutas = document.createElement("li")
            lifrutas.append(img, main, h2, h5)
            ulfrutas.appendChild(lifrutas)
        }
    }
}
frutas()

function bebidas() {

    let ulBebidas = document.querySelector("#bebidas")

    for (let i = 0; i < products.length; i++) {
        if (products[i].category == "Bebidas") {
            /*  image: undefined, */
            let img = document.createElement("img")
            img.setAttribute("class", "product-img")
            img.src = `${products[i].image}`

           if (products[i].image == undefined) {
                img.src = "./img/products/no-img.svg"
                console.log("ooo")
            }

            let main = document.createElement("main")
            main.setAttribute("class", "product-main")

            let h2 = document.createElement("h2")
            h2.setAttribute("class", "product-title")
            h2.innerText = `${products[i].title}`

            let h5 = document.createElement("h5")
            h5.setAttribute("class", "product-category")
            h5.innerText = `${products[i].category}`

            let strong = document.createElement("strong")
            strong.setAttribute("class", "product-price")
            strong.innerText = `R$ ${products[i].price}`

            let liBebidas = document.createElement("li")
            liBebidas.append(img, main, h2, h5)
            ulBebidas.appendChild(liBebidas)
        }
    }
}
bebidas()

function higiene() {

    let ulHigiene = document.querySelector("#higiene")
    console.log(ulHigiene)

    let liHigiene = document.createElement("li")

    ulHigiene.appendChild(liHigiene)

    for (let i = 0; i < products.length; i++) {
        /*  image: undefined, */
        if (products[i].category == "Higiene") {

            let img = document.createElement("img")
            img.setAttribute("class", "product-img")
            img.src = `${products[i].image}`

            if (products[i].image == undefined) {
                img.src = "./img/products/no-img.svg"
                console.log("ooo")
            }

            let main = document.createElement("main")
            main.setAttribute("class", "product-main")

            let h2 = document.createElement("h2")
            h2.setAttribute("class", "product-title")
            h2.innerText = `${products[i].title}`

            let h5 = document.createElement("h5")
            h5.setAttribute("class", "product-category")
            h5.innerText = `${products[i].category}`

            let strong = document.createElement("strong")
            strong.setAttribute("class", "product-price")
            strong.innerText = `R$ ${products[i].price}`

            let lifrutas = document.createElement("li")
            lifrutas.append(img, main, h2, h5)
            ulHigiene.appendChild(lifrutas)
        }
    }
}
higiene()
