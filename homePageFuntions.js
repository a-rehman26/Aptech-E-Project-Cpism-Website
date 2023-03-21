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

// comparision page  items 1 ************---

function items01() {
    let select1 = document.getElementById("select01").selectedIndex;
    let select2 = document.getElementById("select02").selectedIndex;


    if (select1 == select2) {

        document.getElementById("img01CP").src =
            "images/empty img for comparision page.png";
        document.getElementById("PName01").innerHTML = "N/A";
        document.getElementById("PBrand01").innerHTML = "N/A";
        document.getElementById("Pprice01").innerHTML = "N/A";
        document.getElementById("PDes01").innerHTML =
            "N/A";

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

    else if (select1 == 9) {
        document.getElementById("img01CP").src =
            "images/Anex-350W-Hand-Mixer.jpg";
        document.getElementById("PName01").innerHTML = "Hand Mixer";
        document.getElementById("PBrand01").innerHTML = "Anex";
        document.getElementById("Pprice01").innerHTML = "RS 5,200";
        document.getElementById("PDes01").innerHTML =
            "Power: 230V 50HZ <br> 350 Watts motor <br> Color: Black & Silver";
    }

    else if (select1 == 10) {
        document.getElementById("img01CP").src =
            "images/AC image 02.jpg";
        document.getElementById("PName01").innerHTML = "Inverter Air Conditioner";
        document.getElementById("PBrand01").innerHTML = "Haier";
        document.getElementById("Pprice01").innerHTML = "RS 79,000";
        document.getElementById("PDes01").innerHTML =
            "WARRANTY: 5 Years Compressor (1 time claimable) <br> solar setup: The UPS device costs 12000 with delivery and installation. <br> Color: White ";
    }

    else if (select1 == 11) {
        document.getElementById("img01CP").src =
            "images/Anex-Pizza-Pan-Grill.jpg";
        document.getElementById("PName01").innerHTML = "Pizza Pan Grill";
        document.getElementById("PBrand01").innerHTML = "Anex";
        document.getElementById("Pprice01").innerHTML = "RS 7,199";
        document.getElementById("PDes01").innerHTML =
            "Deluxe Pizza Pan <br>  Also for grilling,cooking,frying and warm keeping. <br> Anti-stick coating.";
    }

    else if (select1 == 12) {
        document.getElementById("img01CP").src =
            "images/casa-high-qualitystainlesssteel-three-stove img 01.jpeg";
        document.getElementById("PName01").innerHTML = "StainlessSteel Flame Stove";
        document.getElementById("PBrand01").innerHTML = "National";
        document.getElementById("Pprice01").innerHTML = "RS 19,500";
        document.getElementById("PDes01").innerHTML =
            "Stainless Steel Panel ,Embedded Furnace <br>  Refined Copper Cover Fire, Corrosion Resistance <br> Thermocouple Flame- Out Protection.";
    }

    else if (select1 == 13) {
        document.getElementById("img01CP").src =
            "images/Royal-Deluxe-Pedestal-Fans img 01.jpg";
        document.getElementById("PName01").innerHTML = "Stand Fan";
        document.getElementById("PBrand01").innerHTML = "Dawlance";
        document.getElementById("Pprice01").innerHTML = "RS 9,899";
        document.getElementById("PDes01").innerHTML =
            "Size: 24 <br> Sweep Size: 600mm <br> Rated Power: 125W <br> Air Delivery: 210 m/3min";
    }

    else if (select1 == 14) {
        document.getElementById("img01CP").src =
            "images/Gaba-National-Wet-Dry-Drum-Vacuum-Cleaner img 01.jpg";
        document.getElementById("PName01").innerHTML = "Vacuum Cleaner";
        document.getElementById("PBrand01").innerHTML = "National";
        document.getElementById("Pprice01").innerHTML = "RS 20,500";
        document.getElementById("PDes01").innerHTML =
            "1 Year Brand Warranty <br> Dust Full Indicator <br> Maximum Tank Capacity <br> Rated Power: 1200 watss <br> Color:x Stainless Steel";
    }

    else if (select1 == 15) {
        document.getElementById("img01CP").src =
            "images/Kenwood-EImperial-Floor-Standing-AC img 01.jpg";
        document.getElementById("PName01").innerHTML = "Floor Standing AC";
        document.getElementById("PBrand01").innerHTML = "Samsung";
        document.getElementById("Pprice01").innerHTML = "RS 148,500";
        document.getElementById("PDes01").innerHTML =
            "LED Dsiplay <br> Heat & Cool Function <br>  Auto Restart <br>  3 Year Warranty";
    }

    else if (select1 == 16) {
        document.getElementById("img01CP").src =
            "images/silver-grammy-ultra-durable-non-stick-kitchen-set img 01.jpeg";
        document.getElementById("PName01").innerHTML = "Non Stick Kitchen Set (16 PCS)";
        document.getElementById("PBrand01").innerHTML = "Anex";
        document.getElementById("Pprice01").innerHTML = "RS 799";
        document.getElementById("PDes01").innerHTML =
            "The Striking Cookware Set has very shape Size a Kitchen Could Need. Silver Grammy Brings the most desirable 17 Piece non stick cookware set for you made of non stick bottom and made of Durable Materials to Help cooking easy. Any meal of the day will be a joy to prepare with this versatile set.";
    }

    else if (select1 == 17) {
        document.getElementById("img01CP").src =
            "images/Nasgas-Super-Dlx-Double-Safety-Water-Heater img 01.jpg";
        document.getElementById("PName01").innerHTML = "Water Heater";
        document.getElementById("PBrand01").innerHTML = "Haier";
        document.getElementById("Pprice01").innerHTML = "RS 36,499";
        document.getElementById("PDes01").innerHTML =
            "– Works on both Electric and Gas <br> – QC Approved Brass Safety Valve  <br> – Tank capacity 35 Gallon        ";
    }

    else if (select1 == 18) {
        document.getElementById("img01CP").src =
            "images/Jackpot-Heavy-Weight-Dry-Iron img 01.jpg";
        document.getElementById("PName01").innerHTML = "Heavy Weight Dry Iron";
        document.getElementById("PBrand01").innerHTML = "Jackpot";
        document.getElementById("Pprice01").innerHTML = "RS 3,350";
        document.getElementById("PDes01").innerHTML =
            "Jackpot Heavy Weight Electric Iron - White is must for every household. It can be used for heavy and stiff ironing. It is ideal for ironing thick fabric and big fabrics like curtains or table clothes.";
    }

    else if (select1 == 19) {
        document.getElementById("img01CP").src =
            "images/panasonic-nr-bs60ms600-litters-side-by-side-refrigerator img 01.jpeg";
        document.getElementById("PName01").innerHTML = "Double Door Side By Side Refrigerator";
        document.getElementById("PBrand01").innerHTML = "Dawlance";
        document.getElementById("Pprice01").innerHTML = "RS 155,000";
        document.getElementById("PDes01").innerHTML =
            "Electric Control with LED Display <br> Interior LED Lights <br> Super Freezing and Super Cooling Function ";
    }

    else if (select1 == 20) {
        document.getElementById("img01CP").src =
            "images/home-shop-400-1200w-multilevel-heater-adjustable-room img 01.jpg";
        document.getElementById("PName01").innerHTML = "Room Heater";
        document.getElementById("PBrand01").innerHTML = "Samsung";
        document.getElementById("Pprice01").innerHTML = "RS 155,000";
        document.getElementById("PDes01").innerHTML =
            "<b> Colour </b> Black <br> <b> Main Material </b> Plastic <br> <b> Shipping Weight (kg) </b> 5Kg  ";
    }

    else if (select1 == 21) {
        document.getElementById("img01CP").src =
            "images/Inverex-Solar-Inverter-Aerox img 01.jpg";
        document.getElementById("PName01").innerHTML = "Solar Inverter";
        document.getElementById("PBrand01").innerHTML = "Samsung";
        document.getElementById("Pprice01").innerHTML = "RS  49,000";
        document.getElementById("PDes01").innerHTML =
            "Warranty: 5years <br> Required: 2 Battery  ";
    }

}



// comparision page  items 2 ************---

function items02() {
    let select1 = document.getElementById("select01").selectedIndex;
    let select2 = document.getElementById("select02").selectedIndex;


    if (select2 == select1) {
        document.getElementById("img02CP").src =
            "images/empty img for comparision page.png";
        document.getElementById("PName02").innerHTML = "N/A";
        document.getElementById("PBrand02").innerHTML = "N/A";
        document.getElementById("Pprice02").innerHTML = "N/A";
        document.getElementById("PDes02").innerHTML =
            "N/A";

        alert("You Are Not Selected Same Products");
    } else if (select2 == 1) {
        document.getElementById("img02CP").src =
            "images/Jackpot-Water-Dispenser img 01.jpg";
        document.getElementById("PName02").innerHTML = "Water Dispenser";
        document.getElementById("PBrand02").innerHTML = "Haier";
        document.getElementById("Pprice02").innerHTML = "RS 27,000";
        document.getElementById("PDes02").innerHTML =
            "Super Elegant Design <br> SUS - 304 Water Tanks  <br> Bigger Refrigerator Portion <br>  Hot and Cold Water  <br> Double Safety Device to prevent from Overheating  <br> LED lights Indicator <br> Copper Winding Compressor";
    } else if (select2 == 2) {
        document.getElementById("img02CP").src = "images/frige img 02.jpg";
        document.getElementById("PName02").innerHTML = "Refrigerator";
        document.getElementById("PBrand02").innerHTML = "Dawlance ";
        document.getElementById("Pprice02").innerHTML = "RS 68,500";
        document.getElementById("PDes02").innerHTML =
            "<b>Color:</b> Black <br> <b>Main Material</b> Metal <br> <b>Warranty</b> 3 year compressor 1 year parts Brand warranty <br> ";
    } else if (select2 == 3) {
        document.getElementById("img02CP").src =
            "images/juicer blender machine img 02.jpg";
        document.getElementById("PName02").innerHTML = "3 In 1 Juicer Blender";
        document.getElementById("PBrand02").innerHTML = "Jackpot ";
        document.getElementById("Pprice02").innerHTML = "RS 7,490";
        document.getElementById("PDes02").innerHTML =
            "450 watts power  <br> 220 / 240 Volts <br> Stainless steel coated blades  <br> 3 in 1 function appliance";
    } else if (select2 == 4) {
        document.getElementById("img02CP").src = "images/led tv img  02.jpg";
        document.getElementById("PName02").innerHTML = "32 Inch HD LED TV";
        document.getElementById("PBrand02").innerHTML = "Samsung ";
        document.getElementById("Pprice02").innerHTML = "RS 39,900";
        document.getElementById("PDes02").innerHTML =
            "<b>Color:</b> Black <br> <b>Connectivity</b> HDMI|USB 2.0 <br> <b>Resolution	</b> 1920 x 1080 pixels <br> <b>Display Size:</b> 40 – 49 inches";
    } else if (select2 == 5) {
        document.getElementById("img02CP").src =
            "images/Cambridge -Electric- Kettle img 01.png";
        document.getElementById("PName02").innerHTML = "Electric Kettle";
        document.getElementById("PBrand02").innerHTML = "Sogo";
        document.getElementById("Pprice02").innerHTML = "RS 6,720";
        document.getElementById("PDes02").innerHTML =
            "Stainless Steel Inner Pot <br> Overheat Protection <br> Button Control lid cap        <br> 1 year warranty";
    }
    else if (select2 == 6) {
        document.getElementById("img02CP").src =
            "images/Haier-Washing-Machine img 01.jpg";
        document.getElementById("PName02").innerHTML = "Washing Machine";
        document.getElementById("PBrand02").innerHTML = "National";
        document.getElementById("Pprice02").innerHTML = "RS 17,500";
        document.getElementById("PDes02").innerHTML =
            "3 Years WARRANTY <br> Double Tub Washing Machine <br> Copper Winding ";
    }

    else if (select2 == 7) {
        document.getElementById("img02CP").src =
            "images/Gaba-National-Microwave-Oven img 01.jpg";
        document.getElementById("PName02").innerHTML = "Microwave Oven";
        document.getElementById("PBrand02").innerHTML = "National";
        document.getElementById("Pprice02").innerHTML = "RS 15,900";
        document.getElementById("PDes02").innerHTML =
            "Pull Handle Door <br> 1050 Watts | 220 – 240V – 50Hz <br> 35 min. Timer ";
    }

    else if (select2 == 8) {
        document.getElementById("img02CP").src =
            "images/slice toaster img 02.jpg";
        document.getElementById("PName02").innerHTML = "Slice Toaster";
        document.getElementById("PBrand02").innerHTML = "Sogo";
        document.getElementById("Pprice02").innerHTML = "RS 4,505";
        document.getElementById("PDes02").innerHTML =
            "Can heat 2loaves of bread at the same time <br> Non-stick cooking plates <br> Comes with a 6 month warranty ";
    }

    else if (select2 == 9) {
        document.getElementById("img02CP").src =
            "images/Anex-350W-Hand-Mixer.jpg";
        document.getElementById("PName02").innerHTML = "Hand Mixer";
        document.getElementById("PBrand02").innerHTML = "Anex";
        document.getElementById("Pprice02").innerHTML = "RS 5,200";
        document.getElementById("PDes02").innerHTML =
            "Power: 230V 50HZ <br> 350 Watts motor <br> Color: Black & Silver";
    }

    else if (select2 == 10) {
        document.getElementById("img02CP").src =
            "images/AC image 02.jpg";
        document.getElementById("PName02").innerHTML = "Inverter Air Conditioner";
        document.getElementById("PBrand02").innerHTML = "Haier";
        document.getElementById("Pprice02").innerHTML = "RS 79,000";
        document.getElementById("PDes02").innerHTML =
            "WARRANTY: 5 Years Compressor (1 time claimable) <br> solar setup: The UPS device costs 12000 with delivery and installation. <br> Color: White ";
    }

    else if (select2 == 11) {
        document.getElementById("img02CP").src =
            "images/Anex-Pizza-Pan-Grill.jpg";
        document.getElementById("PName02").innerHTML = "Pizza Pan Grill";
        document.getElementById("PBrand02").innerHTML = "Anex";
        document.getElementById("Pprice02").innerHTML = "RS 7,199";
        document.getElementById("PDes02").innerHTML =
            "Deluxe Pizza Pan <br>  Also for grilling,cooking,frying and warm keeping. <br> Anti-stick coating.";
    }

    else if (select2 == 12) {
        document.getElementById("img02CP").src =
            "images/casa-high-qualitystainlesssteel-three-stove img 01.jpeg";
        document.getElementById("PName02").innerHTML = "StainlessSteel Flame Stove";
        document.getElementById("PBrand02").innerHTML = "National";
        document.getElementById("Pprice02").innerHTML = "RS 19,500";
        document.getElementById("PDes02").innerHTML =
            "Stainless Steel Panel ,Embedded Furnace <br>  Refined Copper Cover Fire, Corrosion Resistance <br> Thermocouple Flame- Out Protection.";
    }

    else if (select2 == 13) {
        document.getElementById("img02CP").src =
            "images/Royal-Deluxe-Pedestal-Fans img 01.jpg";
        document.getElementById("PName02").innerHTML = "Stand Fan";
        document.getElementById("PBrand02").innerHTML = "Dawlance";
        document.getElementById("Pprice02").innerHTML = "RS 9,899";
        document.getElementById("PDes02").innerHTML =
            "Size: 24 <br> Sweep Size: 600mm <br> Rated Power: 125W <br> Air Delivery: 210 m/3min";
    }

    else if (select2 == 14) {
        document.getElementById("img02CP").src =
            "images/Gaba-National-Wet-Dry-Drum-Vacuum-Cleaner img 01.jpg";
        document.getElementById("PName02").innerHTML = "Vacuum Cleaner";
        document.getElementById("PBrand02").innerHTML = "National";
        document.getElementById("Pprice02").innerHTML = "RS 20,500";
        document.getElementById("PDes02").innerHTML =
            "1 Year Brand Warranty <br> Dust Full Indicator <br> Maximum Tank Capacity <br> Rated Power: 1200 watss <br> Color:x Stainless Steel";
    }

    else if (select2 == 15) {
        document.getElementById("img02CP").src =
            "images/Kenwood-EImperial-Floor-Standing-AC img 01.jpg";
        document.getElementById("PName02").innerHTML = "Floor Standing AC";
        document.getElementById("PBrand02").innerHTML = "Samsung";
        document.getElementById("Pprice02").innerHTML = "RS 148,500";
        document.getElementById("PDes02").innerHTML =
            "LED Dsiplay <br> Heat & Cool Function <br>  Auto Restart <br>  3 Year Warranty";
    }

    else if (select2 == 16) {
        document.getElementById("img02CP").src =
            "images/silver-grammy-ultra-durable-non-stick-kitchen-set img 01.jpeg";
        document.getElementById("PName02").innerHTML = "Non Stick Kitchen Set (16 PCS)";
        document.getElementById("PBrand02").innerHTML = "Anex";
        document.getElementById("Pprice02").innerHTML = "RS 799";
        document.getElementById("PDes02").innerHTML =
            "The Striking Cookware Set has very shape Size a Kitchen Could Need. Silver Grammy Brings the most desirable 17 Piece non stick cookware set for you made of non stick bottom and made of Durable Materials to Help cooking easy. Any meal of the day will be a joy to prepare with this versatile set.";
    }

    else if (select2 == 17) {
        document.getElementById("img02CP").src =
            "images/Nasgas-Super-Dlx-Double-Safety-Water-Heater img 01.jpg";
        document.getElementById("PName02").innerHTML = "Water Heater";
        document.getElementById("PBrand02").innerHTML = "Haier";
        document.getElementById("Pprice02").innerHTML = "RS 36,499";
        document.getElementById("PDes02").innerHTML =
            "– Works on both Electric and Gas <br> – QC Approved Brass Safety Valve  <br> – Tank capacity 35 Gallon        ";
    }

    else if (select2 == 18) {
        document.getElementById("img02CP").src =
            "images/Jackpot-Heavy-Weight-Dry-Iron img 01.jpg";
        document.getElementById("PName02").innerHTML = "Heavy Weight Dry Iron";
        document.getElementById("PBrand02").innerHTML = "Jackpot";
        document.getElementById("Pprice02").innerHTML = "RS 3,350";
        document.getElementById("PDes02").innerHTML =
            "Jackpot Heavy Weight Electric Iron - White is must for every household. It can be used for heavy and stiff ironing. It is ideal for ironing thick fabric and big fabrics like curtains or table clothes.";
    }

    else if (select2 == 19) {
        document.getElementById("img02CP").src =
            "images/panasonic-nr-bs60ms600-litters-side-by-side-refrigerator img 01.jpeg";
        document.getElementById("PName02").innerHTML = "Double Door Side By Side Refrigerator";
        document.getElementById("PBrand02").innerHTML = "Dawlance";
        document.getElementById("Pprice02").innerHTML = "RS 155,000";
        document.getElementById("PDes02").innerHTML =
            "Electric Control with LED Display <br> Interior LED Lights <br> Super Freezing and Super Cooling Function ";
    }

    else if (select2 == 20) {
        document.getElementById("img02CP").src =
            "images/home-shop-400-1200w-multilevel-heater-adjustable-room img 01.jpg";
        document.getElementById("PName02").innerHTML = "Room Heater";
        document.getElementById("PBrand02").innerHTML = "Samsung";
        document.getElementById("Pprice02").innerHTML = "RS 1,699";
        document.getElementById("PDes02").innerHTML =
            "<b> Colour </b> Black <br> <b> Main Material </b> Plastic <br> <b> Shipping Weight (kg) </b> 5Kg  ";
    }

    else if (select2 == 21) {
        document.getElementById("img02CP").src =
            "images/Inverex-Solar-Inverter-Aerox img 01.jpg";
        document.getElementById("PName02").innerHTML = "Solar Inverter";
        document.getElementById("PBrand02").innerHTML = "Samsung";
        document.getElementById("Pprice02").innerHTML = "RS  49,000";
        document.getElementById("PDes02").innerHTML =
            "Warranty: 5years <br> Required: 2 Battery  ";
    }

}

// ac changes deatling images

function change1AC() {
    document.getElementById("imageDetailing1").src = "images/samsung images AC invertor for detailing img 005.avif";
}

function change2AC() {
    document.getElementById("imageDetailing1").src = "images/samsung images AC invertor for detailing img 003.avif";
}

function change3AC() {
    document.getElementById("imageDetailing1").src = "images/samsung images AC invertor for detailing img 004.avif";
}

function change4AC() {
    document.getElementById("imageDetailing1").src = "images/samsung images AC invertor for detailing img 002.avif";
}
