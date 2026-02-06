const answers_no = {
    french: [
      "Non",
      "Tu es sûr ?",
      "Vraiment sûr ??",
      "Vraiment vraiment sûr ???",
      "Réfléchis encore",
      "Pourquoi tu es si froid ?",
      "On peut en parler ?",
      "S’il te plaît 🥺",
      "Je t’en supplie",
      "Ok ça fait mal 😭",
      "Tu es méchant",
      "Pourquoi tu fais ça",
      "Une chance stp",
      "Bon… encore une fois",
      "On recommence 😐"
    ]
  };
  
  const answers_yes = {
    french: "Oui 💕"
  };
  
  let language = "french";
  const no_button = document.getElementById("no-button");
  const yes_button = document.getElementById("yes-button");
  let i = 1;
  let size = 50;
  let clicks = 0;
  
  no_button.addEventListener("click", () => {
    const banner = document.getElementById("banner");
    banner.src = "public/images/no.gif";
    refreshBanner();
  
    clicks++;
  
    size += 20;
    yes_button.style.width = size + "px";
    yes_button.style.height = size + "px";
  
    if (i < answers_no[language].length) {
      no_button.innerHTML = answers_no[language][i];
      i++;
    } else {
      alert("Bon… on recommence 😅");
      i = 1;
      size = 50;
      yes_button.style.width = "50px";
      yes_button.style.height = "50px";
      no_button.innerHTML = answers_no[language][0];
    }
  });
  
  yes_button.addEventListener("click", () => {
    const banner = document.getElementById("banner");
    banner.src = "public/images/yes.gif";
    refreshBanner();
  
    document.querySelector(".buttons").style.display = "none";
    document.querySelector(".message").style.display = "block";
  });
  
  function refreshBanner() {
    const banner = document.getElementById("banner");
    const src = banner.src;
    banner.src = "";
    banner.src = src;
  }
  