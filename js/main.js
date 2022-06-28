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

// for (i=0; i < teamMembers.length; i++){
//     console.log(`Name: ${teamMembers[i].nameAndSurname}\nRole: ${teamMembers[i].role}\nImage URL: ${teamMembers[i].image}`);
// }

const teamCardsWrapper = document.querySelector(".container");


for (i=0; i < teamMembers.length; i++){
    const memberCard = document.createElement("div");
    memberCard.innerHTML = `<div>${teamMembers[i].image}</div>
                                <h2>${teamMembers[i].nameAndSurname}</h2>
                                <h5>${teamMembers[i].role}</h5>`;
    teamCardsWrapper.append(memberCard);
}