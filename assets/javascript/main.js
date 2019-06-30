var queryUrl;
var gifArr = ['Michael Scott', 'Creed Bratton', 'Pam Halpert'];

function button() {
    for (var i = 0; i < gifArr.length; i++) {
        $('#buttons').append(`<button class="btn btn-dark m-2 button" id="${gifArr[i]}" >${gifArr[i]}</button>`)
    }
}
button()
$('#submit-button').on('click', function () {
    event.preventDefault()
    $('#buttons').empty();
    var userInput = $('#user-input').val();
    gifArr.push(userInput);
    button()
    $('#user-input').val('')
})

$('#buttons').on('click', function () {
    event.preventDefault()
    var search = $(event.target).attr('id').trim()
    queryUrl = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=ZbNgxU0AVUxxbLot5nbWFp4cgL5Sqdhu&limit=10`
    axios({
        url: queryUrl,
        method: "GET"
    })
        .then(function (response) {
            console.log(response.data)
            var responseArr = response.data.data
            for (var i = 0; i < responseArr.length; i++) {
                $('#gifs').append(`<img id= "gif" data-state="still" type="gif" class="image-fluid fixed-bottom pics" data-still="${response.data.data[i].images.fixed_width_still.url}" data-animate="${response.data.data[i].images.fixed_width.url}" src="${response.data.data[i].images.fixed_width_still.url}" ></img>`)
            }
        })
        .catch(function (err) {
            alert('Pick Again')
            console.error(err)
        })
    $('#gifs').empty()
})
var animate;
var still
$('#gifs').on('click', function () {
    animate = $(event.target).attr('data-animate')
    still = $(event.target).attr('data-still')
    if ($(event.target).attr('src') === animate) {
        console.log('animate')
        $(event.target).attr('src', still)
        $(event.target).attr('data-state', 'animate')
    } else if ($(event.target).attr('src') === still) {
        console.log('still')
        $(event.target).attr('src', animate)
        $(event.target).attr('data-state', 'still')
    }
})
