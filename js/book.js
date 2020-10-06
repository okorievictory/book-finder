function find() {
	var book = document.getElementById('book').value;
	if (book == "") {
		alert("Please Enter a Valid Book Info")
	}else {
		fetch("https://www.googleapis.com/books/v1/volumes?q=" + book)
		.then(response =>{
			return response.json(); //.json converts to a json format
		})
		.then(result => {
			var html = "<p>";
			for (var i = 0; i < result.items.length; i++) {
				volinfo = result.items[i].volumeInfo;
				title = volinfo.title
				descrpt = volinfo.description
				author = volinfo.hasOwnProperty(volinfo.authors) ? volinfo.authors : 'No Author Found'
				html += "Book Title: " + title + "<br><br>" + "Book Author(s): " + author + "<br><br>" + "Book Description: " + descrpt + "<hr>"
			}
			html += "</p>"
			document.getElementById("books").innerHTML = html;
		})
		.catch (error => {console.log(error)})
	}
}