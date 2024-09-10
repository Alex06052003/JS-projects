const sounds = [
    {
        key: "l",
        name: "Afterglow",
        path: "../assets/sounds/Afterglow - Worn Out.mp3",
    },
    {
        key: "p",
        name: "Nightmare",
        path: "../assets/sounds/Between Home and Serenity - Nightmare.mp3",
    },
    {
        key: "m",
        name: "Capsize",
        path: "../assets/sounds/Capsize - Smiling As I Burn.mp3",
    },
    {
        key: "s",
        name: "Delirium",
        path: "../assets/sounds/Lifespark. - Delirium.mp3",
    },
];

const menu = document.querySelector(".actions-list");

for (let sound of sounds) {
    const { key, name } = sound;
    menu.innerHTML += `
        <li class="actions-item">
            <button class="actions-btn btn">
                <h2 class="actions-btn__title">${key}</h2>
                <p class="actions-btn__text">${name}</p>
            </button>
        </li>
    `;
}

const audio = document.querySelector("#sounds");
audio.volume = 0.5;

const keys = menu.querySelectorAll(".btn");

keys.forEach((key, index) =>
    key.addEventListener("click", (event) => {
        const btn = event.target.closest(".btn");
        audio.src = sounds[index].path;
        btn.focus();
        audio.play();
    })
);

document.addEventListener("keydown", (event) => {
    const btn = event.key;
    for (let i = 0; i < sounds.length; i++) {
        const { key, path } = sounds[i];
        if (btn === key) {
            audio.src = path;
            audio.play();
        }
    }
    if (btn === "Escape") audio.pause();
});
