const btnSend = document.querySelectorAll('button')[1]
const btnCancel = document.querySelectorAll('button')[1]
const form = document.querySelector('form')
const input1 = document.querySelectorAll('input')[0]
const input2 = document.querySelectorAll('input')[1]
const input3 = document.querySelectorAll('input')[2]

// 1ére fonctionnalité

btnCancel.addEventListener('click', function () {
    input1.value = ''
    input2.value = ''
})

// 2éme fonctionnalité

form.addEventListener('submit', function (evt) {
    evt.preventDefault()

    $('section').append(`
    <div class="card mt-3">
            <div class="card-body">

                <p class="card-text"> <span style="color:${input3.value}">${input2.value}</span> - ${input1.value} </p>

            </div>
        </div>
    `)
})