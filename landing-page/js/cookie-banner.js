document.addEventListener("DOMContentLoaded", function () {
  const banner = document.createElement("div");
  banner.id = "cookie-banner";
  banner.innerHTML = `
    <div class="cookie-banner-content">
      <p>
        Questo sito utilizza cookie tecnici e, previo tuo consenso, cookie di terze parti per analisi e miglioramento della navigazione. 
        <a href="/privacy-policy.html" target="_blank" rel="noopener">Leggi la Privacy Policy</a>.
      </p>
      <div class="cookie-buttons">
        <button id="accept-cookies">Accetta</button>
        <button id="decline-cookies">Rifiuta</button>
      </div>
    </div>
  `;

  const style = document.createElement("style");
  style.textContent = `
    #cookie-banner {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background: #222;
      color: white;
      padding: 1em;
      z-index: 1000;
      font-family: sans-serif;
      display: none;
    }

    .cookie-banner-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .cookie-banner-content p {
      margin: 0 0 1em;
      font-size: 0.95em;
    }

    .cookie-buttons {
      display: flex;
      gap: 1em;
    }

    .cookie-buttons button {
      background-color: #00b894;
      color: white;
      border: none;
      padding: 0.5em 1em;
      cursor: pointer;
      border-radius: 5px;
      font-size: 0.9em;
    }

    .cookie-buttons button:hover {
      background-color: #019875;
    }
  `;

  document.head.appendChild(style);
  document.body.appendChild(banner);

  // Mostra il banner solo se non è già stato accettato o rifiutato
  if (!localStorage.getItem("cookieConsent")) {
    banner.style.display = "block";
  }

  document.getElementById("accept-cookies").addEventListener("click", function () {
    localStorage.setItem("cookieConsent", "accepted");
    banner.style.display = "none";
    // Inserisci qui eventuali script di terze parti da caricare dopo il consenso
    console.log("Cookie accettati");
  });

  document.getElementById("decline-cookies").addEventListener("click", function () {
    localStorage.setItem("cookieConsent", "declined");
    banner.style.display = "none";
    console.log("Cookie rifiutati");
  });
});
