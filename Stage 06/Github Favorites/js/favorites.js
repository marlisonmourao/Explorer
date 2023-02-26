export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();
  }

  load() {
    this.entries = [
      {
        login: "maykbrito",
        name: "Mayk Brito",
        public_repos: "76",
        followers: "120000",
      },
      {
        login: "diego3g",
        name: "Diego Fernades",
        public_repos: "99",
        followers: "1400",
      },
    ];
  }

  delete(user) {
    const filteredEntries = this.entries.filter(
      (item) => item.login !== user.login
    );
    console.log(filteredEntries)
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root);

    this.tbody = this.root.querySelector("table tbody");


    this.update();
  }

  update() {
    this.removeAllTr();

    this.entries.forEach(user => {
      const row = this.createRow()
     
      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagem de ${user.name}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector(".user span").textContent = user.login;
      row.querySelector(".repositories").textContent = user.public_repos;
      row.querySelector(".followers").textContent = user.followers;

      row.querySelector('.remove').onclick = () => {
        const isOk = confirm('Tem certeza que deseja deletar essa linha')

        if(isOk) {
          this.delete(user)
        }
      }

      this.tbody.append(row)
    })

  }

  createRow() {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td class="user">
        <img src="https://github.com/marlisonmourao.png" alt="" />
        <a href="https://github.com/marlisonmourao" target="_blank">
          <p>Marlison Mourão</p>
          <span>marlisonmourao</span>
        </a>
      </td>
      <td class="repositories">36</td>
      <td class="followers">547</td>
      <td>
        <button class="remove">&times</button>
      </td>
  `;

    return tr;
  }

  removeAllTr() {
    this.tbody.querySelectorAll("tr").forEach((tr) => {
      tr.remove();
    });
  }
}
