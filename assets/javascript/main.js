var queryUrl; 





$('#submit-button').on('click', function(){
var search = $('#user-input').val().trim()
console.log(search)
queryUrl = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=ZbNgxU0AVUxxbLot5nbWFp4cgL5Sqdhu&limit=10`
axios({
    url: queryUrl,
    method: "GET"
})
    .then(function (response) {
        console.log(response)
        console.log(response.data.data)
        var responseArr = response.data.data
        for (var i = 0; i < responseArr.length; i++) {
            $('#gifs').append(`<img id= "gif-${i}" src="${response.data.data[i].url}" ></img>`)
        }
        })
        
    .catch(function (err) {
        console.error(err)
    })
})
