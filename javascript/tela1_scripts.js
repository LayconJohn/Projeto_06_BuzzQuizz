function renderizarMensagemTela1() {
    document.querySelector(".tela1").innerHTML = `
    <header class="topo">
        <h1>BuzzQuiz</h1>
    </header>
  <main>
    <section class="meu-quizz">
      <div class="quizz-vazio">
        <p>Você não criou nenhum quiz ainda :(</p>
        <button>Criar Quizz</button>
      </div>
      <div class="quizz-completo oculto">
        <div class="titulo">
          <h3>Seus Quizzes</h3>
          <ion-icon name="add-circle"></ion-icon>
        </div>
        <div class="quizzes">
          <div class="quizz">
            <img
              src="https://s3-alpha-sig.figma.com/img/0944/77cf/673132f4da1ae224b665fd9dfeffb556?Expires=1651449600&Signature=I5DQl~unwCWPWx31SKX6m3M6oCZhdCol9vC6VArPFKH62pKoQ1FC65y9Dvt5ruYbkAkN-0Q83TzRGmP3ryovOr9vpV-fv8fjsf7wsyDld6lLDpzlmUlaPISp3Ku3wcw-kad-0t~FPUoA0JtRSYlLqB1m2I1BL4qf1WyFDihxXmQIveBtzt2sUsPe98rdUnA-G0yPexB~L1R0~FXtO~UoKqjB3McQFPahoEooAli~HtnYYINLeqAzw7uvUiW9egIU3v3MFYEu7qGxSsn6kjfPcoJKvKBWn3pS9penfZ2xPrfEPLxCVrTKvJpB6gvk6EuL2arG3IVgCJOR189Ub3CTKg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt=""
            />
            <p>
              Acerte os personagens corretos dos Simpsons e prove seu amor!
            </p>
          </div>
          <div class="quizz">
            <img
              src="https://s3-alpha-sig.figma.com/img/64d4/7d80/ee972fbf4fbabdbfebb6bcf202204d48?Expires=1651449600&Signature=UCyqea9GcgXLm-xjmqLEx34JXlZmUG7iq-stATXPXPwRpgIgGrB3obm09~XIzfKofvbGK2Cl~DJ25nB7DPaetPzbuu2I9-aF9wfbU2MXggCXPAJg1FbxA32KTf-HUIZOuSrFpwc~yc~TSjDa5-~97QifgVFp8buxH75jWQ9opVIiNxTFW9nh9u5XXk3jAKI0KbfixmEe7hkZ5BBAZzwj5mbmTifbEEOfWpHktiJBqpDyqjp8CzGLpAiJDZBWEKd5JOzJy2BrXqij502nebBFeKkUWxf11R0KiVAaW2Zy5X~5NDYx5tDAnV3SGVgVFEKe9tGTGPMica2Xh6KLQLl2OQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt=""
            />
            <p>
              O quanto você é de boas?
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="todos-quizz">
      <h3>Todos os Quizzes</h3>
      <div class="quizzes">
        <div class="quizz">
          <img
            src="https://s3-alpha-sig.figma.com/img/0944/77cf/673132f4da1ae224b665fd9dfeffb556?Expires=1651449600&Signature=I5DQl~unwCWPWx31SKX6m3M6oCZhdCol9vC6VArPFKH62pKoQ1FC65y9Dvt5ruYbkAkN-0Q83TzRGmP3ryovOr9vpV-fv8fjsf7wsyDld6lLDpzlmUlaPISp3Ku3wcw-kad-0t~FPUoA0JtRSYlLqB1m2I1BL4qf1WyFDihxXmQIveBtzt2sUsPe98rdUnA-G0yPexB~L1R0~FXtO~UoKqjB3McQFPahoEooAli~HtnYYINLeqAzw7uvUiW9egIU3v3MFYEu7qGxSsn6kjfPcoJKvKBWn3pS9penfZ2xPrfEPLxCVrTKvJpB6gvk6EuL2arG3IVgCJOR189Ub3CTKg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
          />
          <p>
            Acerte os personagens corretos dos Simpsons e prove seu amor!
          </p>
        </div>
        <div class="quizz">
          <img
            src="https://s3-alpha-sig.figma.com/img/64d4/7d80/ee972fbf4fbabdbfebb6bcf202204d48?Expires=1651449600&Signature=UCyqea9GcgXLm-xjmqLEx34JXlZmUG7iq-stATXPXPwRpgIgGrB3obm09~XIzfKofvbGK2Cl~DJ25nB7DPaetPzbuu2I9-aF9wfbU2MXggCXPAJg1FbxA32KTf-HUIZOuSrFpwc~yc~TSjDa5-~97QifgVFp8buxH75jWQ9opVIiNxTFW9nh9u5XXk3jAKI0KbfixmEe7hkZ5BBAZzwj5mbmTifbEEOfWpHktiJBqpDyqjp8CzGLpAiJDZBWEKd5JOzJy2BrXqij502nebBFeKkUWxf11R0KiVAaW2Zy5X~5NDYx5tDAnV3SGVgVFEKe9tGTGPMica2Xh6KLQLl2OQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
          />
          <p>
            O quanto você é de boas?
          </p>
        </div>
        <div class="quizz">
          <img
            src="https://s3-alpha-sig.figma.com/img/0944/77cf/673132f4da1ae224b665fd9dfeffb556?Expires=1651449600&Signature=I5DQl~unwCWPWx31SKX6m3M6oCZhdCol9vC6VArPFKH62pKoQ1FC65y9Dvt5ruYbkAkN-0Q83TzRGmP3ryovOr9vpV-fv8fjsf7wsyDld6lLDpzlmUlaPISp3Ku3wcw-kad-0t~FPUoA0JtRSYlLqB1m2I1BL4qf1WyFDihxXmQIveBtzt2sUsPe98rdUnA-G0yPexB~L1R0~FXtO~UoKqjB3McQFPahoEooAli~HtnYYINLeqAzw7uvUiW9egIU3v3MFYEu7qGxSsn6kjfPcoJKvKBWn3pS9penfZ2xPrfEPLxCVrTKvJpB6gvk6EuL2arG3IVgCJOR189Ub3CTKg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
          />
          <p>
            Acerte os personagens corretos dos Simpsons e prove seu amor!
          </p>
        </div>
        <div class="quizz">
          <img
            src="https://s3-alpha-sig.figma.com/img/64d4/7d80/ee972fbf4fbabdbfebb6bcf202204d48?Expires=1651449600&Signature=UCyqea9GcgXLm-xjmqLEx34JXlZmUG7iq-stATXPXPwRpgIgGrB3obm09~XIzfKofvbGK2Cl~DJ25nB7DPaetPzbuu2I9-aF9wfbU2MXggCXPAJg1FbxA32KTf-HUIZOuSrFpwc~yc~TSjDa5-~97QifgVFp8buxH75jWQ9opVIiNxTFW9nh9u5XXk3jAKI0KbfixmEe7hkZ5BBAZzwj5mbmTifbEEOfWpHktiJBqpDyqjp8CzGLpAiJDZBWEKd5JOzJy2BrXqij502nebBFeKkUWxf11R0KiVAaW2Zy5X~5NDYx5tDAnV3SGVgVFEKe9tGTGPMica2Xh6KLQLl2OQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
          />
          <p>
            O quanto você é de boas?
          </p>
        </div>
        <div class="quizz">
          <img
            src="https://s3-alpha-sig.figma.com/img/0944/77cf/673132f4da1ae224b665fd9dfeffb556?Expires=1651449600&Signature=I5DQl~unwCWPWx31SKX6m3M6oCZhdCol9vC6VArPFKH62pKoQ1FC65y9Dvt5ruYbkAkN-0Q83TzRGmP3ryovOr9vpV-fv8fjsf7wsyDld6lLDpzlmUlaPISp3Ku3wcw-kad-0t~FPUoA0JtRSYlLqB1m2I1BL4qf1WyFDihxXmQIveBtzt2sUsPe98rdUnA-G0yPexB~L1R0~FXtO~UoKqjB3McQFPahoEooAli~HtnYYINLeqAzw7uvUiW9egIU3v3MFYEu7qGxSsn6kjfPcoJKvKBWn3pS9penfZ2xPrfEPLxCVrTKvJpB6gvk6EuL2arG3IVgCJOR189Ub3CTKg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
          />
          <p>
            Acerte os personagens corretos dos Simpsons e prove seu amor!
          </p>
        </div>
        <div class="quizz">
          <img
            src="https://s3-alpha-sig.figma.com/img/64d4/7d80/ee972fbf4fbabdbfebb6bcf202204d48?Expires=1651449600&Signature=UCyqea9GcgXLm-xjmqLEx34JXlZmUG7iq-stATXPXPwRpgIgGrB3obm09~XIzfKofvbGK2Cl~DJ25nB7DPaetPzbuu2I9-aF9wfbU2MXggCXPAJg1FbxA32KTf-HUIZOuSrFpwc~yc~TSjDa5-~97QifgVFp8buxH75jWQ9opVIiNxTFW9nh9u5XXk3jAKI0KbfixmEe7hkZ5BBAZzwj5mbmTifbEEOfWpHktiJBqpDyqjp8CzGLpAiJDZBWEKd5JOzJy2BrXqij502nebBFeKkUWxf11R0KiVAaW2Zy5X~5NDYx5tDAnV3SGVgVFEKe9tGTGPMica2Xh6KLQLl2OQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
          />
          <p>
            O quanto você é de boas?
          </p>
        </div>
      </div>
    </section>
  </main>
    `
}

renderizarMensagemTela1();