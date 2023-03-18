// responsive navbar

let navTop = document.querySelector(".navResicon");

navTop.addEventListener("click", () => navF());

let navbarTop = document.querySelector(".navbarMaindiv");

let navF = () => {
    navbarTop.classList.toggle("activeNavbar");
};

// footer email validation

function emailFooterBtnF() {
    let emailinputFooterEmail = document.getElementById(
        "errorFooterEmailinput"
    ).value;
    let errorFtremailP = document.getElementById("errorFooterEmailP");

    if (emailinputFooterEmail == "") {
        errorFtremailP.innerHTML = "*Email is required";

        return false;
    } else {
        alert("Done");
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
    } else {
        errorFrm1.innerHTML = "";
        intBrdClr1.style.border = "1px solid #ccc";
    }

    if (emailFrm == "") {
        errorFrm2.innerHTML = "*This is a required";
        intBrdClr2.style.border = "2px solid red";

        return false;
    } else {
        errorFrm2.innerHTML = "";
        intBrdClr2.style.border = "1px solid #ccc";
    }

    if (subjectFrm == "") {
        errorFrm3.innerHTML = "*This is a required";
        intBrdClr3.style.border = "2px solid red";

        return false;
    } else {
        errorFrm3.innerHTML = "";
        intBrdClr3.style.border = "1px solid #ccc";

        alert("Message send");
    }
}

// comparision page

function items01() {
    let select1 = document.getElementById("select01").selectedIndex;
    let select2 = document.getElementById("select02").selectedIndex;

    let img1 = document.getElementById("img01CP");
    let pName1 = document.getElementById("PName01");
    let pBrand1 = document.getElementById("PBrand01");
    let pPrice1 = document.getElementById("Pprice01");
    let pDes1 = document.getElementById("PDes01");

    if (select1 == select2) {
        alert("You Are Not Selected Same Products");
    } else if (select1 == 1) {
        document.getElementById("img01CP").src =
            "images/Jackpot-Water-Dispenser img 01.jpg";
        document.getElementById("PName01").innerHTML = "Water Dispenser";
        document.getElementById("PBrand01").innerHTML = "Haier";
        document.getElementById("Pprice01").innerHTML = "RS 27,000";
        document.getElementById("PDes01").innerHTML =
            "Super Elegant Design <br> SUS - 304 Water Tanks  <br> Bigger Refrigerator Portion <br>  Hot and Cold Water  <br> Double Safety Device to prevent from Overheating  <br> LED lights Indicator <br> Copper Winding Compressor";
    } else if (select1 == 2) {
        document.getElementById("img01CP").src = "images/frige img 02.jpg";
        document.getElementById("PName01").innerHTML = "Refrigerator";
        document.getElementById("PBrand01").innerHTML = "Dawlance ";
        document.getElementById("Pprice01").innerHTML = "RS 68,500";
        document.getElementById("PDes01").innerHTML =
            "<b>Color:</b> Black <br> <b>Main Material</b> Metal <br> <b>Warranty</b> 3 year compressor 1 year parts Brand warranty <br> ";
    } else if (select1 == 3) {
        document.getElementById("img01CP").src =
            "images/juicer blender machine img 02.jpg";
        document.getElementById("PName01").innerHTML = "3 In 1 Juicer Blender";
        document.getElementById("PBrand01").innerHTML = "Jackpot ";
        document.getElementById("Pprice01").innerHTML = "RS 7,490";
        document.getElementById("PDes01").innerHTML =
            "450 watts power  <br> 220 / 240 Volts <br> Stainless steel coated blades  <br> 3 in 1 function appliance";
    } else if (select1 == 4) {
        document.getElementById("img01CP").src = "images/led tv img  02.jpg";
        document.getElementById("PName01").innerHTML = "32 Inch HD LED TV";
        document.getElementById("PBrand01").innerHTML = "Samsung ";
        document.getElementById("Pprice01").innerHTML = "RS 39,900";
        document.getElementById("PDes01").innerHTML =
            "<b>Color:</b> Black <br> <b>Connectivity</b> HDMI|USB 2.0 <br> <b>Resolution	</b> 1920 x 1080 pixels <br> <b>Display Size:</b> 40 – 49 inches";
    } else if (select1 == 5) {
        document.getElementById("img01CP").src =
            "images/Cambridge -Electric- Kettle img 01.png";
        document.getElementById("PName01").innerHTML = "Electric Kettle";
        document.getElementById("PBrand01").innerHTML = "Sogo";
        document.getElementById("Pprice01").innerHTML = "RS 6,720";
        document.getElementById("PDes01").innerHTML =
            "Stainless Steel Inner Pot <br> Overheat Protection <br> Button Control lid cap        <br> 1 year warranty";
    }
    else if (select1 == 6) {
        document.getElementById("img01CP").src =
            "images/Haier-Washing-Machine img 01.jpg";
        document.getElementById("PName01").innerHTML = "Washing Machine";
        document.getElementById("PBrand01").innerHTML = "National";
        document.getElementById("Pprice01").innerHTML = "RS 17,500";
        document.getElementById("PDes01").innerHTML =
            "3 Years WARRANTY <br> Double Tub Washing Machine <br> Copper Winding ";
    }

    else if (select1 == 7) {
        document.getElementById("img01CP").src =
            "images/Gaba-National-Microwave-Oven img 01.jpg";
        document.getElementById("PName01").innerHTML = "Microwave Oven";
        document.getElementById("PBrand01").innerHTML = "National";
        document.getElementById("Pprice01").innerHTML = "RS 15,900";
        document.getElementById("PDes01").innerHTML =
            "Pull Handle Door <br> 1050 Watts | 220 – 240V – 50Hz <br> 35 min. Timer ";
    }

    else if (select1 == 8) {
        document.getElementById("img01CP").src =
            "images/slice toaster img 02.jpg";
        document.getElementById("PName01").innerHTML = "Slice Toaster";
        document.getElementById("PBrand01").innerHTML = "Sogo";
        document.getElementById("Pprice01").innerHTML = "RS 4,505";
        document.getElementById("PDes01").innerHTML =
            "Can heat 2loaves of bread at the same time <br> Non-stick cooking plates <br> Comes with a 6 month warranty ";
    }
}

