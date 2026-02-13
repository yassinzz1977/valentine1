const answers_no = {
    french: [
      "Non",
      "Tu es sûr Oumaima🥺?",
      "Vraiment sûr ma princesse🥺 ??",
      "Arreeeetteee je vais me facher 🤬​???",
      "Réfléchis encore STPP",
      "Pourquoi tu es si froide ?",
      "Bon, si tu refuse je revoyage 😈​?",
      "S’il te plaît 🥺",
      "Tu dit encore non, j'accepte pas ton chat chez moi🐱​",
      "Ok ça fait mal 😭",
      "Tu es méchante je vais me pleindre a tata",
      "Je vais dire a Khalid on a voyagé🙃​",
      "OK on smarie plus💔​",
      "Bon… C'est Ta derniere chance😤​ ",
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

  
