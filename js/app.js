$(function () {
  $('#search').submit((event) => {
    event.preventDefault()
    console.log('form being submitted')

    const query = $('#query').val()
    console.log(query)

    $('#results-table tbody').html('')
    $('#query').val('')

    search(query)
  })

  function displayResults (gifs) {
    console.log(gifs)
    gifs.forEach((gif) => {
      $('#results-table tbody').append(
        `<tr>
          <td>${gif.title}</td>
          <td><img src="${gif.images.fixed_height.url}"></td>
          <td>${gif.rating}</td>
          <td><a href="${gif.url}"> link </a></td>
        </tr>`
      )
    })
  }

  /*
    Modify the search() to use vanilla Promise (syntax) to make the API request
    instead of $.ajax()
  */

  function search (searchTerm) {
    const url = 'https://api.giphy.com/v1/gifs/search'
    const apiKey = 'HRuknNTOGG0i1qVagcgOpKaxQz2OTAop'


// adding promises with axios
// writing the params as an object

axios.get(url, {
params: {
  api_key: apiKey,
  q: searchTerm,
  limit: 50,
}
// the arrow function in then is a callback
// callback = function passed as a parameter
// response is not a variable, its a placeholder for the object within the function
// always make sure to look at the API delivery and naming to call the right details
}).then((response) => {
console.log(response.data.data)
displayResults(response.data.data)
})
.catch((e) => {
  console,log(e)
})

    // $.ajax({
    //   url: url,
    //   type: 'GET',
    //   data: { q: searchTerm, limit: 50, api_key: apiKey }
    // })
    // .done((response) => {
    //   // execute this function if request is successful
    //   console.log(response)
    //   displayResults(response.data)
    // })
    // .fail(() => {
    //   // execute this function if request fails
    //   alert('error occurred')
    // })
  }
})
