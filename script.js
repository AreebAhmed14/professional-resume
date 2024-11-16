

document.getElementById("genbtn").addEventListener("click", ()=>{


    
// ----------------------------------------------------------------------------------------------------------------
// ---------------------------------------------select cv elements---------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------

let mainName = document.querySelector(".main-name")
let profession = document.querySelector(".profession")
let phone = document.querySelector(".phone")
let email = document.querySelector(".email")
let address = document.querySelector(".address")
let obj = document.querySelector(".obj-para")
let skills = document.querySelector(".skillslistmain")
let language = document.querySelector(".langslistmain")
let educations = document.querySelector(".allEduListMain")
let experiences = document.querySelector(".allExpiListMain")
let profilePic = document.querySelector(".mainprofilepic")




// ----------------------------------------------------------------------------------------------------------------
// ---------------------------------------------info by form---------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------

let getName = document.getElementById("name").value
let getemail = document.getElementById("email").value
let getnumber = document.getElementById("phone").value
let getaddress = document.getElementById("address").value
let getprofession = document.getElementById("profession").value
let getobjective = document.getElementById("obj").value
let allskills = document.querySelectorAll(".allskillslist")
let alllangs = document.querySelectorAll(".alllangslist")
let alledu = document.querySelectorAll(".alleducationlist")
let allexpi = document.querySelectorAll(".allexperiencelist")
let getPic = document.getElementById("pic")



let formInfo = {
    name: getName,
    profession: getprofession,
    email: getemail,
    phone: getnumber,
    address: getaddress,
    objective: getobjective,
    skills: allskills,
    languages: alllangs,
    education: alledu,
    experience: allexpi,
    picture: getPic
}

formInfo.skills.forEach(element => {
    let skillval = element.value
    let newskill = document.createElement("li")
    newskill.classList.add("lists")
    newskill.textContent = skillval
    skills.appendChild(newskill)
});
   
formInfo.languages.forEach(element => {
    let langsval = element.value
    let newlangs = document.createElement("li")
    newlangs.classList.add("lists")
    newlangs.textContent = langsval
    language.appendChild(newlangs)
});

formInfo.education.forEach(element => {
    let eduval = element.value
    let newedu = document.createElement("li")
    newedu.classList.add("left-list")
    newedu.textContent = eduval
    educations.appendChild(newedu)
});

formInfo.experience.forEach(element => {
    let expival = element.value
    let newexpi = document.createElement("li")
    newexpi.classList.add("left-list")
    newexpi.textContent = expival
    experiences.appendChild(newexpi)
});

profilePic.src = URL.createObjectURL(formInfo.picture.files[0])


    mainName.textContent = formInfo.name;
    profession.textContent = formInfo.profession;
    phone.textContent = formInfo.phone;
    email.textContent = formInfo.email;
    address.textContent = formInfo.address;
    obj.textContent = formInfo.objective;




    document.querySelector(".form").style.display="none"
    document.querySelector(".cv").style.display="block"
    setTimeout(()=>{
        let pdf = document.getElementById('cv-content');
            html2pdf().from(pdf).save();
    },2000)
})

document.getElementById("addeducationarea").addEventListener("click",()=>{
    let educationalarea = document.querySelector(".educationalarea")
    let addedu = `<textarea name="text" class="alleducationlist" id="education" rows="2"></textarea><br>` 
    educationalarea.insertAdjacentHTML("beforeend" , addedu)
})

document.getElementById("addexperiencearea").addEventListener("click",()=>{
    let experiencearea = document.querySelector(".experiencearea")
    let addexpi = `<textarea name="text" class="allexperiencelist" id="education" rows="2"></textarea><br>` 
    experiencearea.insertAdjacentHTML("beforeend", addexpi)
})

document.getElementById("addskillsarea").addEventListener("click",()=>{
    let skillsarea = document.querySelector(".skillsarea")
    let addskills = `<input name="text" class="allskillslist" id="skills"><br>` 
    skillsarea.insertAdjacentHTML("beforeend", addskills)
})

document.getElementById("addlangsarea").addEventListener("click",()=>{
    let langsarea = document.querySelector(".langsarea")
    let addlangs = `<input name="text" class="alllangslist" id="skills"><br>` 
    langsarea.insertAdjacentHTML("beforeend", addlangs)
})


// ---------------------------------page changes functions----------------------------------------

function exitintro(){
    document.querySelector(".introPage").style.display="none"
    document.querySelector(".firstpage").style.display="block"
}