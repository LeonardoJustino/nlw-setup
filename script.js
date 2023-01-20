const form = document.querySelector("form") //criei uma váriavel onde procurei o seletor form e armazenei os dados  //registrou memória
const nlwSetup = new NLWSetup(form) //criei um object  com a biclioteca chamada setup, ela precisava de um formulário para funcionar (biblioteca criada pela rocket para a nlw) //registrou memória
const button = document.querySelector('header button') // a tag button eu peguei e coloquei em uma variável chamada button //registrou memória

button.addEventListener('click', add) //quando eu clicar no botão, ela vai executar essa função que foi criada //registrou em memória o evento de clique  //QUANDO CLICAR ELE VAI EXECUTAR A FUNÇÃO
//condicional é a lógica de programação
form.addEventListener("change", save) //registrou memória uma alteração, sempre que o formulário for alterado ele vai rodar o save
function add() {

  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("dia ja incluso")
    return 
  }
  alert("adicionado com sucesso")
  nlwSetup.addDay(today) //quando for criar as datas, tem que colocar o barra e não o ifen
}
function save() {
//localStorage é um objeto que ele guarda na memória do navegador informações
localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))  
} // registrou memória e está pegando os dados  e guardando no localStorage

/*
const data = {
//nomes que tem no data-name, e cada item que tiver o mesmo nome no html ele vai add um dado, como um armário
  run: ["01-01", "01-02", "01-06"],
  water: ["01-04","01-05"],
  journal: ["01-01", "01-03"],
  takePills: ['01-02',]
}*/
//pegou as informações do localStorage, transformou em objeto e ele vai ter o mesmo formato que essa const data
const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {} 
nlwSetup.setData(data) // apartir do momento que tem esses dados, a gente add esses dados para o objeto nlwSetup através dessa função
nlwSetup.load() //aqui a gente manda ele fazer o carregamento das coisas
//JSON.parse(localStorage.getItem('NLWSetup@habits')) || {} -> oq eu quer dizer isso?  ja que o JSON... não existe então || eu vou pegar um objeto vazio e atribuir aqui. || -> ou
