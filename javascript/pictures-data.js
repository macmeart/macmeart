const picturesDataObj = [
  // {
  //   titolo: "",
  //   anno: "",
  //   dimensioni: "",
  //   "descrizione-english": `description`,
  //   "descrizione-italiano": `descrizione`,
  //   "numero-dettagli": "0",
  //   path: "",
  //   alt: "Loading",
  // },
  {
    titolo: "Empathy would be the answer",
    anno: "2021",
    dimensioni: "100 x 100",
    "descrizione-english": `Blah...blah...blah... Powerful people talk and talk and talk about values, principles and what is right, but their actions converge on what is important to themselves only. Empathy and compassion are not inherent in the human being.

    I use different materials and techniques (canvass, paper, oil) ombined with original expedients (such as the use of the anagram) to express the hypocrisy that is leading the human race to its self-destruction.
    
    "Empathy would be the answer" shows the hypocrisy of the leaders and the distance between different worlds, when it would be enough to have an empathic proximity between people to easily aspire to a better world`,
    "descrizione-italiano": "descrizione",
    "numero-dettagli": "2",
    path: "./pictures/empathy-would-be-the-answer",
    alt: "Loading",
  },
  {
    titolo: "The last supper",
    anno: "2021",
    dimensioni: "100 x 100",
    "descrizione-english": `The world does not change with words. Man does not change with words. Politicians, big companies, States, hide their real &quot;to be&quot; behind a mask of &quot;to have&quot;. Search for power, vanity, selfishness, violence, greed, are hidden behind the mask.
    I use materials and techniques already seen in the artworks of important Italian artists of the previous century (i.e. Emilio Vedova) combined with original expedients (such as the use of the anagram) to sarcastically express the hypocrisy that is carrying human being to its self-destruction.
    &quot;The Last Supper (masquerade)&quot; shows a Minjun Christ laughing in front of human misery and all its false values.`,
    "descrizione-italiano": `Il mondo non cambia a parole. L'uomo non cambia a parole. I politici, le multinazionali, gli stati nascondono il loro vero &quot;essere&quot; dietro una maschera di &quot;avere&quot;. La ricerca del potere, la vanità, l'egoismo, la violenza, l'avarizia sono nascoste dietro la maschera.
    Uso materiali e tecniche già viste nei lavori di importanti artisti italiani del secolo scroso (i.e. Emilio Vedova) combinati ad originali espedienti (come l'uso di anagrammi) per esprimere sarcasticamente l'ipocrisia che sta trascinando l'essere umano alla sua autodistruzione. &quot;The Last Supper (masquerade)&quot;
    mostra un Cristo di Minjun che ride davanti all'umana miseria e a tutti i suoi falsi valori.`,
    "numero-dettagli": "5",
    path: "./pictures/the-last-supper",
    alt: "Loading",
  },
  {
    titolo: "Corruption",
    anno: "2021",
    dimensioni: "100 x 100",
    "descrizione-english": "description",
    "descrizione-italiano": "descrizione",
    "numero-dettagli": "6",
    path: "./pictures/corruption",
    alt: "Loading",
  },
  {
    titolo: "To the Absurd",
    anno: "2021",
    dimensioni: "100 x 100",
    "descrizione-english": `The world revolves around its own laws that are not the laws of the Man. Like Sisyphus, everyone climbs their own mountain but without caring for others and the lack of any goal.
    
    I use materials and techniques also used by main Italian artists of the previous century (Emilio Vedova, Mimmo Rotella,..) combined with original expedients (such as the use of the anagram) to express the misery of human being and his selfishness.
    
    "To the Absurd" shows the enormous distance between people, often running towards false myths`,
    "descrizione-italiano": `descrizione`,
    "numero-dettagli": "3",
    path: "./pictures/to-the-absurd",
    alt: "Loading",
  },
  {
    titolo: "Black rain in Glasgow",
    anno: "2021",
    dimensioni: "100 x 100",
    "descrizione-english": "description",
    "descrizione-italiano": "descrizione",
    "numero-dettagli": "0",
    path: "./pictures/black-rain-in-gl",
    alt: "Loading",
  },
  {
    titolo: "White city Black city",
    anno: "2022",
    dimensioni: "100 x 100",
    "descrizione-english": "description",
    "descrizione-italiano": "descrizione",
    "numero-dettagli": "0",
    path: "./pictures/white-city-black-city",
    alt: "Loading",
  },
];

const numbersArr =
  "one two three four five six seven eight nine ten eleven twelve".split(" ");

picturesDataObj.forEach((picObj, ind) => {
  picObj.class = numbersArr[ind];
  picObj.mainPicturePath = picObj.path + "/main.jpg";

  //crea le mini pictures
  picObj.miniPicturesPaths = [picObj.mainPicturePath];
  let i = +picObj["numero-dettagli"];
  while (i > 0) {
    picObj.miniPicturesPaths.push(`${picObj.path}/detail-${i}.jpg`);
    i--;
  }

  picObj.miniPictures = [];
  picObj.miniPicturesPaths.forEach((imgSrc, ind) => {
    let img = document.createElement("img");
    img.src = imgSrc;

    img.addEventListener("click", (event) => {
      changeMiniImage(event.target, bigPicture);
      event.stopPropagation();
    });
    picObj.miniPictures.push(img);
  });
});

const picturesArray = [];

picturesDataObj.forEach((picObj) => {
  //crea container
  const pictureContainer = document.createElement("div");
  pictureContainer.classList.add("picture-container");
  pictureContainer.classList.add(picObj.class);
  pictureContainer.dataset.anno = picObj.anno;
  pictureContainer.dataset.dimensioni = picObj.dimensioni;
  pictureContainer.dataset.titolo = picObj.titolo;

  //crea immagine principale vista in galleria
  const actualPicture = document.createElement("img");
  actualPicture.classList.add("picture");
  actualPicture.src = picObj.mainPicturePath;
  actualPicture.alt = picObj.alt;

  pictureContainer.append(actualPicture);
  picturesArray.push(pictureContainer);

  //apertura big picture modal
  actualPicture.addEventListener("click", (ev) => {
    bigPicture.src = actualPicture.src;

    const modalPicture = document.querySelector(".picture-modal");
    modalPicture.classList.add("appear-modal");
    document.body.classList.add("appear-modal");
    //window.location.hash = "#dettaglio";

    loadMiniImages(picObj.miniPictures);

    let descrizioneModal = `<span class="titolo">${picObj.titolo || ""}</span>`;

    let selectedLanguage;
    if (document.cookie.endsWith("english")) {
      selectedLanguage = "english";
    } else {
      selectedLanguage = "italiano";
    }
    descrizioneModal += picObj["descrizione-" + selectedLanguage];

    descrizioneModal += `<span class="anno">${
      picObj.anno || ""
    }</span><span class="dimensioni">${picObj.dimensioni || ""}</span>`;

    const modalPictureDescription = document.querySelector(".picture-modal p");
    modalPictureDescription.innerHTML = descrizioneModal;
  });
});
