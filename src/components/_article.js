class Article {
  constructor(domElement) {
    this.domElement = domElement;
    this.expandButton = domElement.querySelector(".expandButton");
    this.expandButton.textContent = "expand";
    this.expandButton.addEventListener("click", () => this.expandArticle());
  }

  expandArticle() {
    this.domElement.classList.toggle("article-open");
  }
}

const articles = document.querySelectorAll(".article").forEach(article => new Article(article));
