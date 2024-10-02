const url = 'https://raw.githubusercontent.com/larimarianaa/trabalho_json_grafico/refs/heads/main/disciplina.json' 

async function vizualizarInformacoes() {
  const res = await fetch(url)
    const dados = await res.json()
    const pessoas_branca = (dados.Brancas)
    const pessoas_preta = (dados.Preta)
    const pessoas_amarela = (dados.Amarela)
    const pessoas_parda = (dados.Parda)
    const pessoas_indigenas = (dados.Indigenas)
