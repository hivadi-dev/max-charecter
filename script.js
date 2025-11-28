const inp = document.getElementById('inputtext')
const charcount = document.getElementById('charcount')
inp.addEventListener('input', (e) => {
    charcount.innerText = inp.value.length
    if (inp.value.length > 10) {
        inp.value = inp.value.slice(0, 20)
    }
})
