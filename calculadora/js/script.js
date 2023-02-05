
const input = document.getElementById('input')

document.querySelectorAll('.cell').forEach(function (ev){
  ev.addEventListener('click', function (){
    const value = ev.dataset.value
    input.value += value
  })
})

input.addEventListener('keydown', function(ev){
  const permitidos = ['1', '2', '3', '4', '5', '6', 
                      '7', '8', '9', '0', '/', '*',
                      '-', '+', '%', ]
  ev.preventDefault()

  if(permitidos.includes(ev.key)){
    input.value += ev.key
  }

  if(ev.key == 'Enter'){
    input.focus()
    operations()
  }

  if(ev.key == 'Backspace'){
    let text = input.value 
    input.value = text.substring(0, text.length-1)
  }

  if(ev.key == 'Delete'){
    input.focus()
    input.value=''
  }

})

function operations(){
  const lista = [input.value]
  let v1 = v2 = resultado = ''

  for (let i = 0; i < lista.length; i++) {    
    if(lista[i].includes('/')){

      v1 = lista[i].split('/')[0]
      v2 = lista[i].split('/')[1]

      resultado = (parseFloat(v1) / parseFloat(v2))
    }

    if(lista[i].includes('*')){
    
      v1 = lista[i].split('*')[0]
      v2 = lista[i].split('*')[1]

      resultado = (parseFloat(v1) * parseFloat(v2))
    }

    if(lista[i].includes('-')){

      v1 = lista[i].split('-')[0]
      v2 = lista[i].split('-')[1]

      resultado = (parseFloat(v1) - parseFloat(v2))
    }

    if(lista[i].includes('+')){

      v1 = lista[i].split('+')[0]
      v2 = lista[i].split('+')[1]

      resultado = (parseFloat(v1) + parseFloat(v2))
    }
  }
  return input.value = resultado
}

document.getElementById('clear').addEventListener('click', function(){
  input.value=''
  input.focus()
})

document.getElementById('btn').addEventListener('click', operations)