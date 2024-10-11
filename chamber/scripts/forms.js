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
<h3>Application for ${capitalize(show("first"))} ${capitalize(show("last"))}</h3>
<p><strong>Your title:</strong> ${capitalize(show("title"))}</p>
<p><strong>Your Email:</strong> <a href="mailto:${show("email")}">${show("email")}</a></p>
<p><strong>Your Phone:</strong> ${show("phone")}</p>
<p><strong>Your Organization:</strong> ${show("organization")}</p>
<p><strong>Your Business Description:</strong> ${show("description")}</p>
<p><strong>Your Membership Level:</strong> ${show("membership")}</p>
<p><strong>Date and Time of Application:</strong> ${show("timestamp")}</p>


`


