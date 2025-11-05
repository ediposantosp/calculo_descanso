# Cálculo Descanso Motoristas

Projeto pronto para GitHub — versão estática para publicação no **GitHub Pages**.

**Descrição**
- Site estático (HTML + CSS + JavaScript).
- Calcula automaticamente o tempo de descanso entre `largada` e `pegada`.
- Limite mínimo fixo: **11 horas**.
- Resultado aparece em tempo real, ao lado direito do formulário.
- Assinado: Édipo Santos

**Arquivos**
- `index.html` — página principal.
- `style.css` — estilos.
- `script.js` — lógica.
- `README.md` — documentação.
- `.gitignore` — recomendação para Git.

**Publicação (GitHub)**
```bash
git init
git add .
git commit -m "Inicial: Cálculo Descanso Motoristas"
# crie o repo no GitHub (ou use gh cli)
# Exemplo com gh CLI:
gh repo create seu-usuario/calculo-descanso-motoristas --public --source=. --remote=origin
git push -u origin main
# Vá em Settings -> Pages e configure branch main / root para publicar
```

**Uso local**
- Abra `index.html` no navegador.

