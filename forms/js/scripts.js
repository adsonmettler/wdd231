// Grab the entire URL this page including the attached GET values
const currentUrl = window.location.href;


// Divid the url into two halves
const everything=currentUrl.split('?')


// Grab just the second half
let formData = everything[1].split('&')


function show(cup) {

    formData.forEach((element) => {

        if (element.startsWith(cup)) {
            result=element.split('=')[1].replace("%40","@")
        } // end if
    })
    return(result)
} // end show


function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }


const showInfo = document.querySelector('#results')
showInfo.innerHTML = `
<p>Apporiment for ${capitalize(show("first"))} ${capitalize(show("last"))}</p>
<p>Proxy ${show("ordinance")} on ${show("fecha")} in the ${show("location")} Temple. </p>
<p>Your Phone: ${show("phone")}</p>
<p>Your Email: <a href="mailto:${show("email")}">${show("email")}</a></p>

`


