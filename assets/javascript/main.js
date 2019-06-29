var queryUrl; 





$('#submit-button').on('click', function(){
var search = $('#user-input').val().trim()
console.log(search)
queryUrl = `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=ZbNgxU0AVUxxbLot5nbWFp4cgL5Sqdhu&limit=15`
axios({
    url: queryUrl,
    method: "GET"
})
    .then(function (response) {
        console.log(response)
        console.log(response.data.data[0].source)
        $('#gifs').append(`<div><img src="${response.data.data[0].source}"></img></div>`)
        })
    .catch(function (err) {
        console.error(err)
    })
})
