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
    const memberCard = document.createElement("div");
    memberCard.classList.add("card", "ms_card-size", "text-center");

    const imageSource = `./img/${teamMembers[i].image}`;
    memberCard.innerHTML = `<img src="${imageSource}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${teamMembers[i].nameAndSurname}</h5>
                                <p class="card-text">${teamMembers[i].role}</p>
                            </div>`;
    teamCardsWrapper.append(memberCard);
}

// memberCard.innerHTML = `<img src="${imageSource}"></img>
// <h2>${teamMembers[i].nameAndSurname}</h2>
// <h5>${teamMembers[i].role}</h5>`;