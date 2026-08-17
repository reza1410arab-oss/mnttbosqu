const gameGrid = document.getElementById("gameGrid");

const games = [
    {
        image: "img/game1.jpg",
        suggestion: `Dicoba bermain di game ini bos, lagi gacor bosku di PG SOFT - Wild Bandito

🔥 15x SPIN OTOMATIS TURBO ON
🔥 25x SPIN MANUAL TURBO OFF
🔥 10x SPIN OTOMATIS TURBO ON
🔥 5x SPIN MANUAL TURBO OFF`
    },

    {
        image: "img/game2.jpg",
        suggestion: `Dicoba bermain di game ini bos, lagi gacor bosku di PG SOFT - NAMA GAME 2

🔥 15x SPIN OTOMATIS TURBO ON
🔥 25x SPIN MANUAL TURBO OFF
🔥 10x SPIN OTOMATIS TURBO ON
🔥 5x SPIN MANUAL TURBO OFF`
    },

    {
        image: "img/game3.jpg",
        suggestion: `Dicoba bermain di game ini bos, lagi gacor bosku di PG SOFT - NAMA GAME 3

🔥 15x SPIN OTOMATIS TURBO ON
🔥 25x SPIN MANUAL TURBO OFF
🔥 10x SPIN OTOMATIS TURBO ON
🔥 5x SPIN MANUAL TURBO OFF`
    },

    {
        image: "img/game4.jpg",
        suggestion: `Dicoba bermain di game ini bos, lagi gacor bosku di PG SOFT - NAMA GAME 4

🔥 15x SPIN OTOMATIS TURBO ON
🔥 25x SPIN MANUAL TURBO OFF
🔥 10x SPIN OTOMATIS TURBO ON
🔥 5x SPIN MANUAL TURBO OFF`
    },

    {
        image: "img/game5.jpg",
        suggestion: `Dicoba bermain di game ini bos, lagi gacor bosku di PG SOFT - NAMA GAME 5

🔥 15x SPIN OTOMATIS TURBO ON
🔥 25x SPIN MANUAL TURBO OFF
🔥 10x SPIN OTOMATIS TURBO ON
🔥 5x SPIN MANUAL TURBO OFF`
    },

    {
        image: "img/game6.jpg",
        suggestion: `Dicoba bermain di game ini bos, lagi gacor bosku di PG SOFT - NAMA GAME 6

🔥 15x SPIN OTOMATIS TURBO ON
🔥 25x SPIN MANUAL TURBO OFF
🔥 10x SPIN OTOMATIS TURBO ON
🔥 5x SPIN MANUAL TURBO OFF`
    },

    {
        image: "img/game7.jpg",
        suggestion: `Dicoba bermain di game ini bos, lagi gacor bosku di PG SOFT - NAMA GAME 7

🔥 15x SPIN OTOMATIS TURBO ON
🔥 25x SPIN MANUAL TURBO OFF
🔥 10x SPIN OTOMATIS TURBO ON
🔥 5x SPIN MANUAL TURBO OFF`
    },

    {
        image: "img/game8.jpg",
        suggestion: `Dicoba bermain di game ini bos, lagi gacor bosku di PG SOFT - NAMA GAME 8

🔥 15x SPIN OTOMATIS TURBO ON
🔥 25x SPIN MANUAL TURBO OFF
🔥 10x SPIN OTOMATIS TURBO ON
🔥 5x SPIN MANUAL TURBO OFF`
    },

    {
        image: "img/game9.jpg",
        suggestion: `Dicoba bermain di game ini bos, lagi gacor bosku di PG SOFT - NAMA GAME 9

🔥 15x SPIN OTOMATIS TURBO ON
🔥 25x SPIN MANUAL TURBO OFF
🔥 10x SPIN OTOMATIS TURBO ON
🔥 5x SPIN MANUAL TURBO OFF`
    },

    {
        image: "img/game10.jpg",
        suggestion: `Dicoba bermain di game ini bos, lagi gacor bosku di PG SOFT - NAMA GAME 10

🔥 15x SPIN OTOMATIS TURBO ON
🔥 25x SPIN MANUAL TURBO OFF
🔥 10x SPIN OTOMATIS TURBO ON
🔥 5x SPIN MANUAL TURBO OFF`
    },

    {
        image: "img/game11.jpg",
        suggestion: `Dicoba bermain di game ini bos, lagi gacor bosku di PG SOFT - NAMA GAME 11

🔥 15x SPIN OTOMATIS TURBO ON
🔥 25x SPIN MANUAL TURBO OFF
🔥 10x SPIN OTOMATIS TURBO ON
🔥 5x SPIN MANUAL TURBO OFF`
    },

    {
        image: "img/game12.jpg",
        suggestion: `Dicoba bermain di game ini bos, lagi gacor bosku di PG SOFT - NAMA GAME 12

🔥 15x SPIN OTOMATIS TURBO ON
🔥 25x SPIN MANUAL TURBO OFF
🔥 10x SPIN OTOMATIS TURBO ON
🔥 5x SPIN MANUAL TURBO OFF`
    },

    {
        image: "img/game13.jpg",
        suggestion: `Dicoba bermain di game ini bos, lagi gacor bosku di PG SOFT - NAMA GAME 13

🔥 15x SPIN OTOMATIS TURBO ON
🔥 25x SPIN MANUAL TURBO OFF
🔥 10x SPIN OTOMATIS TURBO ON
🔥 5x SPIN MANUAL TURBO OFF`
    },

    {
        image: "img/game14.jpg",
        suggestion: `Dicoba bermain di game ini bos, lagi gacor bosku di PG SOFT - NAMA GAME 14

🔥 15x SPIN OTOMATIS TURBO ON
🔥 25x SPIN MANUAL TURBO OFF
🔥 10x SPIN OTOMATIS TURBO ON
🔥 5x SPIN MANUAL TURBO OFF`
    },

    {
        image: "img/game15.jpg",
        suggestion: `Dicoba bermain di game ini bos, lagi gacor bosku di PG SOFT - NAMA GAME 15

🔥 15x SPIN OTOMATIS TURBO ON
🔥 25x SPIN MANUAL TURBO OFF
🔥 10x SPIN OTOMATIS TURBO ON
🔥 5x SPIN MANUAL TURBO OFF`
    },

    {
        image: "img/game16.jpg",
        suggestion: `Dicoba bermain di game ini bos, lagi gacor bosku di PG SOFT - NAMA GAME 16

🔥 15x SPIN OTOMATIS TURBO ON
🔥 25x SPIN MANUAL TURBO OFF
🔥 10x SPIN OTOMATIS TURBO ON
🔥 5x SPIN MANUAL TURBO OFF`
    },

    {
        image: "img/game17.jpg",
        suggestion: `Dicoba bermain di game ini bos, lagi gacor bosku di PG SOFT - NAMA GAME 17

🔥 15x SPIN OTOMATIS TURBO ON
🔥 25x SPIN MANUAL TURBO OFF
🔥 10x SPIN OTOMATIS TURBO ON
🔥 5x SPIN MANUAL TURBO OFF`
    },

    {
        image: "img/game18.jpg",
        suggestion: `Dicoba bermain di game ini bos, lagi gacor bosku di PG SOFT - NAMA GAME 18

🔥 15x SPIN OTOMATIS TURBO ON
🔥 25x SPIN MANUAL TURBO OFF
🔥 10x SPIN OTOMATIS TURBO ON
🔥 5x SPIN MANUAL TURBO OFF`
    },

    {
        image: "img/game19.jpg",
        suggestion: `Dicoba bermain di game ini bos, lagi gacor bosku di PG SOFT - NAMA GAME 19

🔥 15x SPIN OTOMATIS TURBO ON
🔥 25x SPIN MANUAL TURBO OFF
🔥 10x SPIN OTOMATIS TURBO ON
🔥 5x SPIN MANUAL TURBO OFF`
    },

    {
        image: "img/game20.jpg",
        suggestion: `Dicoba bermain di game ini bos, lagi gacor bosku di PG SOFT - NAMA GAME 20

🔥 15x SPIN OTOMATIS TURBO ON
🔥 25x SPIN MANUAL TURBO OFF
🔥 10x SPIN OTOMATIS TURBO ON
🔥 5x SPIN MANUAL TURBO OFF`
    }
];


/* =========================
   BUAT SEMUA GAME
========================= */

function renderGames() {
    gameGrid.innerHTML = games.map((game, index) => `
        <article class="game-card">

            <div class="game-image">
                <img
                    src="${game.image}"
                    alt="Game ${index + 1}"
                    loading="lazy"
                >
            </div>

            <div class="game-actions">

                <button
                    class="btn-saran"
                    onclick="copySuggestion(${index})"
                >
                    🎯 SARAN & POLA
                </button>

                <button
                    class="btn-copy"
                    onclick="copyGame(${index})"
                >
                    🔥 COPY GAME
                </button>

            </div>

        </article>
    `).join("");
}


/* =========================
   COPY SARAN & POLA
========================= */

async function copySuggestion(index) {
    try {
        await navigator.clipboard.writeText(
            games[index].suggestion
        );

        console.log("Saran berhasil disalin");

    } catch (error) {
        console.error(error);
        alert("Gagal menyalin teks.");
    }
}


/* =========================
   COPY FOTO GAME
========================= */

async function copyGame(index) {
    try {
        const img = document.querySelectorAll(
            ".game-image img"
        )[index];

        if (!img) {
            throw new Error("Gambar tidak ditemukan");
        }

        /*
         * Ambil file gambar langsung dari folder img/
         */
        const response = await fetch(games[index].image);

        if (!response.ok) {
            throw new Error("File gambar tidak ditemukan");
        }

        const blob = await response.blob();

        /*
         * Pastikan browser mendukung ClipboardItem
         */
        if (!navigator.clipboard || typeof ClipboardItem === "undefined") {
            throw new Error(
                "Browser tidak mendukung copy gambar"
            );
        }

        /*
         * Copy FOTO langsung ke clipboard
         */
        const clipboardItem = new ClipboardItem({
            [blob.type]: blob
        });

        await navigator.clipboard.write([
            clipboardItem
        ]);

        console.log(
            `Foto Game ${index + 1} berhasil dicopy`
        );

    } catch (error) {
        console.error(
            "COPY GAME ERROR:",
            error
        );

        alert(
            "Gagal menyalin foto.\n\n" +
            "Pastikan website dibuka melalui HTTPS / GitHub Pages."
        );
    }
}


/* =========================
   JALANKAN
========================= */

renderGames();