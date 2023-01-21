const form = document.querySelector('#form-habits') // comando que busca um atributo no HTML
const habitsTracker = new NLWSetup(form)
const button = document.querySelector('header button') //comando que busca um atributo no HTML

button.addEventListener('click', add) // comando de quando clicar no botão ele adicionar o dia atual
form.addEventListener('change', save) // comando de quando houver alterações ele salvar no cache

function add() {
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5) // comando que adiciona a data atual no formato DD/MM
    const dayExists = habitsTracker.dayExists(today) // comando que verifica se o dia já existir guardado 

    if(dayExists) { // se o dia adicionado já estiver guardado, ele retorna false
        alert('[❌] Este dia já foi adicionado')
        return
    }

    alert('Adicionado com sucesso ✅') // se o dia não estiver sido adicionado/guardo, ele retorna true
    habitsTracker.addDay(today) // comando adiciona o dia atual
}

function save() {
    localStorage.setItem('HabitsTracker@save', JSON.stringify(habitsTracker.data)) // comando que salva alterações no formulário no cache
}

const data = JSON.parse(localStorage.getItem('HabitsTracker@save')) || {} // "ou ||"
habitsTracker.setData(data) 
habitsTracker.load() // comando que carrega as informações