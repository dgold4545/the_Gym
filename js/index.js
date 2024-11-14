"use strict";

const DATA = [
  {
    "first name": "Олексій",
    "last name": "Петров",
    photo: "./img/trainers/trainer-m1.jpg",
    specialization: "Басейн",
    category: "майстер",
    experience: "8 років",
    description:
      "Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
  },
  {
    "first name": "Марина",
    "last name": "Іванова",
    photo: "./img/trainers/trainer-f1.png",
    specialization: "Тренажерний зал",
    category: "спеціаліст",
    experience: "2 роки",
    description:
      "Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
  },
  {
    "first name": "Ігор",
    "last name": "Сидоренко",
    photo: "./img/trainers/trainer-m2.jpg",
    specialization: "Дитячий клуб",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
  },
  {
    "first name": "Тетяна",
    "last name": "Мороз",
    photo: "./img/trainers/trainer-f2.jpg",
    specialization: "Бійцівський клуб",
    category: "майстер",
    experience: "10 років",
    description:
      "Тетяна є експертом в бойових мистецтвах. Вона проводить тренування для професіоналів і новачків. Її підхід до навчання допомагає спортсменам досягати високих результатів.",
  },
  {
    "first name": "Сергій",
    "last name": "Коваленко",
    photo: "./img/trainers/trainer-m3.jpg",
    specialization: "Тренажерний зал",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Сергій фокусується на роботі з фітнесом та кардіотренуваннями. Він вдосконалив свої методики протягом багатьох років. Його учні завжди в формі та енергійні.",
  },
  {
    "first name": "Олена",
    "last name": "Лисенко",
    photo: "./img/trainers/trainer-f3.jpg",
    specialization: "Басейн",
    category: "спеціаліст",
    experience: "4 роки",
    description:
      "Олена спеціалізується на синхронному плаванні. Вона тренує команди різного рівня. Її команди завжди займають призові місця на змаганнях.",
  },
  {
    "first name": "Андрій",
    "last name": "Волков",
    photo: "./img/trainers/trainer-m4.jpg",
    specialization: "Бійцівський клуб",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Андрій має досвід у вивченні різних бойових мистецтв. Він викладає техніку та тактику бою. Його учні здобувають перемоги на міжнародних турнірах.",
  },
  {
    "first name": "Наталія",
    "last name": "Романенко",
    photo: "./img/trainers/trainer-f4.jpg",
    specialization: "Дитячий клуб",
    category: "спеціаліст",
    experience: "3 роки",
    description:
      "Наталія розробила унікальну програму для дітей дошкільного віку. Вона допомагає дітям розвивати фізичні та ментальні навички. Її класи завжди веселі та динамічні.",
  },
  {
    "first name": "Віталій",
    "last name": "Козлов",
    photo: "./img/trainers/trainer-m5.jpg",
    specialization: "Тренажерний зал",
    category: "майстер",
    experience: "10 років",
    description:
      "Віталій спеціалізується на функціональному тренуванні. Він розробив ряд ефективних тренувальних програм. Його клієнти швидко досягають бажаних результатів.",
  },
  {
    "first name": "Юлія",
    "last name": "Кравченко",
    photo: "./img/trainers/trainer-f5.jpg",
    specialization: "Басейн",
    category: "спеціаліст",
    experience: "4 роки",
    description:
      "Юлія є експертом у водних видах спорту. Вона проводить тренування з аквагімнастики та аеробіки. Її учні демонструють вражаючі показники на змаганнях.",
  },
  {
    "first name": "Олег",
    "last name": "Мельник",
    photo: "./img/trainers/trainer-m6.jpg",
    specialization: "Бійцівський клуб",
    category: "майстер",
    experience: "12 років",
    description:
      "Олег є визнаним майстром в бойових мистецтвах. Він тренує чемпіонів різних вагових категорій. Його методики вважаються одними з найефективніших у світі бойових мистецтв.",
  },
  {
    "first name": "Лідія",
    "last name": "Попова",
    photo: "./img/trainers/trainer-f6.jpg",
    specialization: "Дитячий клуб",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Лідія має великий досвід у роботі з дітьми. Вона організовує різноманітні спортивні ігри та заняття. Її класи завжди допомагають дітям розвивати соціальні навички та командний дух.",
  },
  {
    "first name": "Роман",
    "last name": "Семенов",
    photo: "./img/trainers/trainer-m7.jpg",
    specialization: "Тренажерний зал",
    category: "спеціаліст",
    experience: "2 роки",
    description:
      "Роман є експертом у кросфіту та функціональних тренуваннях. Він розробив власні програми для різних вікових груп. Його учні часто отримують нагороди на фітнес-турнірах.",
  },
  {
    "first name": "Анастасія",
    "last name": "Гончарова",
    photo: "./img/trainers/trainer-f7.jpg",
    specialization: "Басейн",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Анастасія фокусується на водних програмах для здоров'я та фітнесу. Вона проводить тренування для осіб з різним рівнем підготовки. Її учні відзначають покращення здоров'я та благополуччя після занять.",
  },
  {
    "first name": "Валентин",
    "last name": "Ткаченко",
    photo: "./img/trainers/trainer-m8.jpg",
    specialization: "Бійцівський клуб",
    category: "спеціаліст",
    experience: "2 роки",
    description:
      "Валентин є експертом в таеквондо та кікбоксингу. Він викладає техніку, тактику та стратегію бою. Його учні часто стають чемпіонами на національних та міжнародних змаганнях.",
  },
  {
    "first name": "Лариса",
    "last name": "Петренко",
    photo: "./img/trainers/trainer-f8.jpg",
    specialization: "Дитячий клуб",
    category: "майстер",
    experience: "7 років",
    description:
      "Лариса розробила комплексну програму для розвитку фізичних та інтелектуальних навичок дітей. Вона проводить заняття в ігровій формі. Її методика допомагає дітям стати активними та розумними.",
  },
  {
    "first name": "Олексій",
    "last name": "Петров",
    photo: "./img/trainers/trainer-m9.jpg",
    specialization: "Басейн",
    category: "майстер",
    experience: "11 років",
    description:
      "Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
  },
  {
    "first name": "Марина",
    "last name": "Іванова",
    photo: "./img/trainers/trainer-f9.jpg",
    specialization: "Тренажерний зал",
    category: "спеціаліст",
    experience: "2 роки",
    description:
      "Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
  },
  {
    "first name": "Ігор",
    "last name": "Сидоренко",
    photo: "./img/trainers/trainer-m10.jpg",
    specialization: "Дитячий клуб",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
  },
  {
    "first name": "Наталія",
    "last name": "Бондаренко",
    photo: "./img/trainers/trainer-f10.jpg",
    specialization: "Бійцівський клуб",
    category: "майстер",
    experience: "8 років",
    description:
      "Наталія є майстром у бойових мистецтвах. Вона вивчала різні техніки та стили, із якими працює зі своїми учнями. Її підхід до навчання відповідає найвищим стандартам.",
  },
  {
    "first name": "Андрій",
    "last name": "Семенов",
    photo: "./img/trainers/trainer-m11.jpg",
    specialization: "Тренажерний зал",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Андрій спеціалізується на функціональному тренуванні. Він розробив власну систему вправ для зміцнення корпусу. Його учні завжди отримують видимі результати.",
  },
  {
    "first name": "Софія",
    "last name": "Мельник",
    photo: "./img/trainers/trainer-f11.jpg",
    specialization: "Басейн",
    category: "спеціаліст",
    experience: "6 років",
    description:
      "Софія працює з аквагімнастикою. Вона вивчила різні техніки та стили плавання. Її заняття допомагають клієнтам розслабитися та покращити фізичну форму.",
  },
  {
    "first name": "Дмитро",
    "last name": "Ковальчук",
    photo: "./img/trainers/trainer-m12.png",
    specialization: "Дитячий клуб",
    category: "майстер",
    experience: "10 років",
    description:
      "Дмитро спеціалізується на розвитку дитячого спорту. Він розробив унікальну програму для малюків. Його методики забезпечують гармонійний розвиток дітей.",
  },
  {
    "first name": "Олена",
    "last name": "Ткаченко",
    photo: "./img/trainers/trainer-f12.jpg",
    specialization: "Бійцівський клуб",
    category: "спеціаліст",
    experience: "5 років",
    description:
      "Олена є відомим тренером у жіночому бойовому клубі. Вона вивчила різні техніки самооборони. Її підхід дозволяє її ученицям відчувати себе впевнено в будь-яких ситуаціях.",
  },
];

const preloader = document.querySelector("#preloader");
const originalData = [...DATA];
const mainSection = document.querySelector(".page-main");
const trainersCardsList = document.querySelector(".trainers-cards__container");
const trainerCardTemplate = document.querySelector("#trainer-card");
const creatCards = (data) => {
  const fragment = document.createDocumentFragment();
  data.forEach((obj) => {
    let trainerCard = trainerCardTemplate.content.cloneNode(true);
    const trainerPhoto = trainerCard.querySelector("img");
    trainerPhoto.setAttribute("src", `${obj["photo"]}`);
    const trainerName = trainerCard.querySelector(".trainer__name");
    trainerName.textContent = `${obj["last name"]} ${obj["first name"]}`;
    fragment.append(trainerCard);
  });
  trainersCardsList.innerHTML = "";
  trainersCardsList.append(fragment);
};
document.addEventListener("DOMContentLoaded", () => {
  creatCards(originalData);
});
const filterSidebar = document.querySelector(".sidebar");
const sortSidebar = document.querySelector(".sorting");
filterSidebar.removeAttribute("hidden");
sortSidebar.removeAttribute("hidden");

trainersCardsList.addEventListener("click", (e) => {
  const modalTemplate = document.querySelector("#modal-template");
  const modalTrainer = modalTemplate.content.cloneNode(true);
  const modalBody = modalTrainer.querySelector(".modal__body");
  const modalCloseBtn = modalBody.querySelector(".modal__close");
  const modalDesc = modalBody.querySelector(".modal__description");
  if (e.target.closest("button")) {
    let card = e.target.closest("li");
    let cardPhoto = card.querySelector("img");
    originalData.forEach((obj) => {
      if (cardPhoto.getAttribute("src") === obj["photo"]) {
        document.body.style.overflow = "hidden";

        const modalTrainerPhoto = modalBody.querySelector("img");
        const modalTrainerName = modalDesc.querySelector(".modal__name");
        const modalTrainerCategory = modalDesc.querySelector(
          ".modal__point--category"
        );
        const modalTrainerExperience = modalDesc.querySelector(
          ".modal__point--experience"
        );
        const modalTrainerSpecialization = modalDesc.querySelector(
          ".modal__point--specialization"
        );
        const modalTrainerText = modalDesc.querySelector(".modal__text");

        modalTrainerPhoto.setAttribute("src", `${obj["photo"]}`);
        modalTrainerName.textContent = `${obj["last name"]} ${obj["first name"]}`;
        modalTrainerCategory.textContent = `Категорія: ${obj["category"]}`;
        modalTrainerExperience.textContent = `Досвід: ${obj["experience"]}`;
        modalTrainerSpecialization.textContent = ` Напрям тренера: ${obj["specialization"]}`;
        modalTrainerText.textContent = `Досвід: ${obj["description"]}`;
        const modalElement = modalTrainer.firstElementChild;
        document.body.append(modalElement);
        modalCloseBtn.addEventListener("click", () => {
          modalElement.remove();
          document.body.style.overflow = "";
        });
      }
    });
  }
});

const filterForm = filterSidebar.querySelector("form");
const inputDirection = [...filterForm.querySelectorAll("[name='direction']")];
const inputCategory = [...filterForm.querySelectorAll("[name='category']")];
const translation = {
  "all-direction": "ВСІ",
  gym: "Тренажерний зал",
  "fight-club": "Бійцівський клуб",
  "kids-club": "Дитячий клуб",
  "swimming-pool": "Басейн",
  "all-category": "ВСІ",
  master: "майстер",
  specialist: "спеціаліст",
  instructor: "інструктор",
};
let filteredList = [...DATA];
filterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const directionInput = filterForm
    .querySelector("input[name = direction]:checked")
    .getAttribute("id");
  const categoryInput = filterForm
    .querySelector("input[name = category]:checked")
    .getAttribute("id");
  const translatedDirection = translation[directionInput];
  const translatedCategory = translation[categoryInput];
  if (translatedDirection !== "ВСІ" && translatedCategory !== "ВСІ") {
    filteredList = DATA.filter((el) => {
      return (
        el["specialization"] === translatedDirection &&
        el["category"] === translatedCategory
      );
    });
  } else if (translatedDirection !== "ВСІ" && translatedCategory === "ВСІ") {
    filteredList = DATA.filter((el) => {
      return el["specialization"] === translatedDirection;
    });
  } else if (translatedCategory !== "ВСІ" && translatedDirection === "ВСІ") {
    filteredList = DATA.filter((el) => {
      return el["category"] === translatedCategory;
    });
  } else {
    filteredList = [...DATA];
  }
  applySort();
});

const applySort = () => {
  const sortBtn = document.querySelector(".sorting__btn--active");
  if (sortBtn.textContent.trim() === "ЗА ПРІЗВИЩЕМ") {
    filteredList.sort((a, b) => {
      if (a["last name"].toLowerCase() > b["last name"].toLowerCase()) {
        return 1;
      }
      if (a["last name"].toLowerCase() < b["last name"].toLowerCase()) {
        return -1;
      }
      return 0;
    });
    creatCards(filteredList);
  }
  if (sortBtn.textContent.trim() === "ЗА ДОСВІДОМ") {
    filteredList.sort((a, b) => {
      return b["experience"].split(" ")[0] - +a["experience"].split(" ")[0];
    });
    creatCards(filteredList);
  }
  if (sortBtn.textContent.trim() === "ЗА замовчуванням") {
    filteredList.sort((a, b) => {
      return DATA.indexOf(a) - DATA.indexOf(b);
    });
    creatCards(filteredList);
  }
};
sortSidebar.addEventListener("click", (e) => {
  const allSortBtns = [...sortSidebar.querySelectorAll(".sorting__btn")];
  if (e.target.closest("button")) {
    allSortBtns.forEach((el) => {
      el.classList.remove("sorting__btn--active");
    });
    e.target.classList.add("sorting__btn--active");
    applySort();
  }
});

filterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const directionInput = filterForm
    .querySelector("input[name = direction]:checked")
    .getAttribute("id");
  const categoryInput = filterForm
    .querySelector("input[name = category]:checked")
    .getAttribute("id");
  const translatedDirection = translation[directionInput];
  const translatedCategory = translation[categoryInput];

  localStorage.setItem("filteredDirection", translatedDirection);
  localStorage.setItem("filteredCategory", translatedCategory);

  if (translatedDirection !== "ВСІ" && translatedCategory !== "ВСІ") {
    filteredList = DATA.filter((el) => {
      return (
        el["specialization"] === translatedDirection &&
        el["category"] === translatedCategory
      );
    });
  } else if (translatedDirection !== "ВСІ" && translatedCategory === "ВСІ") {
    filteredList = DATA.filter((el) => {
      return el["specialization"] === translatedDirection;
    });
  } else if (translatedCategory !== "ВСІ" && translatedDirection === "ВСІ") {
    filteredList = DATA.filter((el) => {
      return el["category"] === translatedCategory;
    });
  } else {
    filteredList = [...DATA];
  }
  applySort();
});

sortSidebar.addEventListener("click", (e) => {
  const allSortBtns = [...sortSidebar.querySelectorAll(".sorting__btn")];
  if (e.target.closest("button")) {
    allSortBtns.forEach((el) => {
      el.classList.remove("sorting__btn--active");
    });
    e.target.classList.add("sorting__btn--active");

    localStorage.setItem("sortOption", e.target.textContent.trim());

    applySort();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const savedDirection = localStorage.getItem("filteredDirection");
  const savedCategory = localStorage.getItem("filteredCategory");
  if (savedDirection && savedCategory) {
    const directionInput = filterForm.querySelector(
      `#${Object.keys(translation).find(
        (key) => translation[key] === savedDirection
      )}`
    );
    const categoryInput = filterForm.querySelector(
      `#${Object.keys(translation).find(
        (key) => translation[key] === savedCategory
      )}`
    );
    directionInput.checked = true;
    categoryInput.checked = true;
  }

  const savedSortOption = localStorage.getItem("sortOption");
  if (savedSortOption) {
    const sortBtns = sortSidebar.querySelectorAll(".sorting__btn");
    sortBtns.forEach((btn) => {
      if (btn.textContent.trim() === savedSortOption) {
        btn.classList.add("sorting__btn--active");
      }
    });
  }

  applySort();
});

document.addEventListener("DOMContentLoaded", () => {
  const savedDirection = localStorage.getItem("filteredDirection");
  const savedCategory = localStorage.getItem("filteredCategory");

  if (savedDirection && savedCategory) {
    const directionInput = filterForm.querySelector(
      `#${Object.keys(translation).find(
        (key) => translation[key] === savedDirection
      )}`
    );
    const categoryInput = filterForm.querySelector(
      `#${Object.keys(translation).find(
        (key) => translation[key] === savedCategory
      )}`
    );
    directionInput.checked = true;
    categoryInput.checked = true;

    const translatedDirection = savedDirection;
    const translatedCategory = savedCategory;

    if (translatedDirection !== "ВСІ" && translatedCategory !== "ВСІ") {
      filteredList = DATA.filter((el) => {
        return (
          el["specialization"] === translatedDirection &&
          el["category"] === translatedCategory
        );
      });
    } else if (translatedDirection !== "ВСІ" && translatedCategory === "ВСІ") {
      filteredList = DATA.filter((el) => {
        return el["specialization"] === translatedDirection;
      });
    } else if (translatedCategory !== "ВСІ" && translatedDirection === "ВСІ") {
      filteredList = DATA.filter((el) => {
        return el["category"] === translatedCategory;
      });
    } else {
      filteredList = [...DATA];
    }
  }

  const savedSortOption = localStorage.getItem("sortOption");
  if (savedSortOption) {
    const sortBtns = sortSidebar.querySelectorAll(".sorting__btn");
    sortBtns.forEach((btn) => {
      if (btn.textContent.trim() === savedSortOption) {
        btn.classList.add("sorting__btn--active");
      }
    });
  }

  applySort();
});
