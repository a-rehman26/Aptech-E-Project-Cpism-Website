// responsive navbar 

let navTop = document.querySelector(".navResicon");

navTop.addEventListener("click", () => navF());

let navbarTop = document.querySelector(".navbarMaindiv");

let navF = () => {
    navbarTop.classList.toggle("activeNavbar");
}

// footer email validation

function emailFooterBtnF() {
    let emailinputFooterEmail = document.getElementById("errorFooterEmailinput").value;
    let errorFtremailP = document.getElementById("errorFooterEmailP");

    if (emailinputFooterEmail == "") {
        errorFtremailP.innerHTML = "*Email is required";

        return false;
    }

    else {
        alert("Done")
        errorFtremailP.innerHTML = "";
    }
}


// form validation

function frmF() {
    let nameFrm = document.getElementById("frmUserNameID").value;
    let emailFrm = document.getElementById("frmUserEmailID").value;
    let subjectFrm = document.getElementById("frmUserSubjectID").value;

    let errorFrm1 = document.getElementById("ErrorFrmp1");
    let errorFrm2 = document.getElementById("ErrorFrmp2");
    let errorFrm3 = document.getElementById("ErrorFrmp3");

    let intBrdClr1 = document.getElementById("inputsDivBrdClr1");
    let intBrdClr2 = document.getElementById("inputsDivBrdClr2");
    let intBrdClr3 = document.getElementById("inputsDivBrdClr3");



    if (nameFrm == "") {

        errorFrm1.innerHTML = "*This is a required";
        intBrdClr1.style.border = "2px solid red";

        return false;
    }

    else {
        errorFrm1.innerHTML = "";
        intBrdClr1.style.border = "1px solid #ccc";

    }


    if (emailFrm == "") {
        errorFrm2.innerHTML = "*This is a required";
        intBrdClr2.style.border = "2px solid red";

        return false;
    }

    else {
        errorFrm2.innerHTML = "";
        intBrdClr2.style.border = "1px solid #ccc";

    }

    if (subjectFrm == "") {
        errorFrm3.innerHTML = "*This is a required";
        intBrdClr3.style.border = "2px solid red";

        return false;
    }

    else {
        errorFrm3.innerHTML = "";
        intBrdClr3.style.border = "1px solid #ccc";

        alert("Message send")

    }

}