const btn = document.querySelector('.btn')
btn.addEventListener('click', function () {
    fetch('https://646cb85d7b42c06c3b2bdef5.mockapi.io/fotos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            image: document.querySelector('#image').value,
            name: document.querySelector('#name').value,
            job: document.querySelector('#job').value,

        })
    }).then(res => {
        if (res.ok) {
            console.log('true')
            document.querySelector('#image').value = '';
            document.querySelector('#name').value = '';
            document.querySelector('#job').value = '';
        }
        else {
            console.error('Bir xəta baş verdi!')
        }
    })
    .catch(() => console.error('Bir xəta baş verdi!'))
})