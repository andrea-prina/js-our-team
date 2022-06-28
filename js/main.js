const teamMembers = [
    {
        nameAndSurname : "Wayne Barnett",
        role : "Founder & CEO",
        image : "wayne-barnett-founder-ceo.jpg",
    },
    {
        nameAndSurname : "Angela Caroll",
        role : "Chief Editor",
        image : "angela-caroll-chief-editor.jpg",
    },
    {
        nameAndSurname : "Walter Gordon",
        role : "Office Manager",
        image : "walter-gordon-office-manager.jpg",
    },
    {
        nameAndSurname : "Angela Lopez",
        role : "Social Media Manager",
        image : "angela-lopez-social-media-manager.jpg",
    },
    {
        nameAndSurname : "Scott Estrada",
        role : "Developer",
        image : "scott-estrada-developer.jpg",
    },
    {
        nameAndSurname : "Barbara Ramos",
        role : "Graphic Designer",
        image : "barbara-ramos-graphic-designer.jpg",
    }
]


const teamCardsWrapper = document.querySelector(".ms_container");


for (i=0; i < teamMembers.length; i++){
    const imageSource = `./img/${teamMembers[i].image}`;
    createMemberCard(teamCardsWrapper, teamMembers[i].nameAndSurname, teamMembers[i].role, imageSource)
}


const nameInput = document.getElementById("name-surname");
const roleInput = document.getElementById("role");
const imgInput = document.getElementById("img-src");
const submitCardBtn = document.getElementById("submit-card-button");

submitCardBtn.addEventListener("click", function(){
    console.log(nameInput.value);
    console.log(roleInput.value);
    console.log(imgInput.value);
    if(nameInput.value != "" && roleInput.value != "" && imgInput.value != ""){
        const nameInputValue = nameInput.value;
        const roleInputValue = roleInput.value;
        const imgInputValue = imgInput.value;
        createMemberCard(teamCardsWrapper, nameInputValue, roleInputValue, imgInputValue);
    }

})



function createMemberCard (parentHtmlElement, memberName, memberRole, memberImgSource){
    const memberCard = document.createElement("div");
    memberCard.classList.add("card", "ms_card-size", "text-center");
    memberCard.innerHTML = `<img src="${memberImgSource}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${memberName}</h5>
                                <p class="card-text">${memberRole}</p>
                            </div>`;
    parentHtmlElement.append(memberCard);
}