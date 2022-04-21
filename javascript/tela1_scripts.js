const meuQuiz = document.querySelector(".meu-quizz");
const todosQuizz = document.querySelector(".todos-quizz");
const tela1 = document.querySelector(".tela1");

function renderizarMensagemTela1() {
  inserirTela1();
  inserirMeuQuiz();
  inserirTodosQuizz();
}

function inserirTela1 () {
  document.querySelector(".tela1").innerHTML += `
    <main>
      <section class="meu-quizz">

      </section>

      <section class="todos-quizz">

      </section>
    </main>
  `
}

function inserirMeuQuiz() {
  document.querySelector(".meu-quizz").innerHTML = `
    <div class="quizz-vazio ">
      <p>Você não criou nenhum quiz ainda :(</p>
      <button>Criar Quizz</button>
    </div>
    <div class="quizz-completo oculto">
      <div class="titulo">
        <h3>Seus Quizzes</h3>
        <ion-icon name="add-circle"></ion-icon>
      </div>
      <div class="quizzes">
        <div class="quizz simpsons">
          <p>
            Acerte os personagens corretos dos Simpsons e prove seu amor!
          </p>
        </div>
        <div class="quizz de-boas">
          <p>
            O quanto você é de boas?
          </p>
        </div>
      </div>
    </div>
  `
}

function inserirTodosQuizz() {
  document.querySelector(".todos-quizz").innerHTML += `
    <h3>Todos os Quizzes</h3>
    <div class="quizzes">
      <div class="quizz simpsons">
        <p>
          Acerte os personagens corretos dos Simpsons e prove seu amor!
        </p>
      </div>
      <div class="quizz de-boas">
        <p>
          O quanto você é de boas?
        </p>
      </div>
      <div class="quizz simpsons">
        <p>
          Acerte os personagens corretos dos Simpsons e prove seu amor!
        </p>
      </div>
      <div class="quizz de-boas">
        <p>
          O quanto você é de boas?
        </p>
      </div>
      <div class="quizz simpsons">
        <p>
          Acerte os personagens corretos dos Simpsons e prove seu amor!
        </p>
      </div>
      <div class="quizz de-boas">
        <p>
          O quanto você é de boas?
        </p>
      </div>
    </div>
  `
}

//renderizarMensagemTela1();

