function parseDateTime(dateStr, timeStr) {
  if (!dateStr || !timeStr) return null;
  return new Date(dateStr + "T" + timeStr + ":00");
}

function minutesToHHMM(mins) {
  const sign = mins < 0 ? "-" : "";
  mins = Math.abs(Math.round(mins));
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return `${sign}${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}`;
}

function ensureLater(start, end) {
  while (end <= start) {
    end = new Date(end.getTime() + 24*60*60*1000);
  }
  return end;
}

function computeAndRender() {
  const dataL = document.getElementById("dataLargada").value;
  const horaL = document.getElementById("horaLargada").value;
  const dataP = document.getElementById("dataPegada").value;
  const horaP = document.getElementById("horaPegada").value;

  const descansoElem = document.getElementById("descansoText");
  const situElem = document.getElementById("situacaoText");
  const resultPanel = document.querySelector(".result-panel");

  const start = parseDateTime(dataL, horaL);
  let end = parseDateTime(dataP, horaP);

  if (!start || !end) {
    descansoElem.textContent = "—";
    situElem.textContent = "—";
    situElem.style.color = "var(--text)";
    return;
  }

  end = ensureLater(start, end);

  const diffMs = end - start;
  const diffMins = Math.round(diffMs / (60*1000));

  const limiteMins = 11 * 60;

  const descansoText = minutesToHHMM(diffMins);
  const situacao = diffMins < limiteMins ? "❌ Descanso insuficiente" : "✅ Descanso suficiente";

  descansoElem.textContent = descansoText;
  situElem.textContent = situacao;
  situElem.style.color = diffMins < limiteMins ? "var(--danger)" : "var(--ok)";
}


["dataLargada","horaLargada","dataPegada","horaPegada"].forEach(id=>{
  const el = document.getElementById(id);
  el.addEventListener("input", computeAndRender);
  el.addEventListener("change", computeAndRender);
});


window.addEventListener("load", computeAndRender);

const campos = [
  "dataLargada",
  "horaLargada",
  "dataPegada",
  "horaPegada"
];

campos.forEach((id, i) => {
  const campo = document.getElementById(id);
  campo.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const prox = document.getElementById(campos[i + 1]);
      if (prox) prox.focus();
    }
  });
});
