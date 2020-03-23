//import Sass file
import '../sass/styles.scss';

let loadImg = 'Flicker image loading...';
//get element by ID 
document.getElementById('images').innerHTML = loadImg;
//Fetch flickr API by choosing flower category.
fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=flowers&api_key=aaf115cd704df850386394ef4f0dffde&format=json', {

})
    .then(response => {
        return (response.text());
    })
    .then((data) => {
        //convert JSONP to JSON
        const convertJson = JSON.parse(data.slice(14, -1)); 
        const listOfTheitem = convertJson.photos.photo;
        let images = '';
        Object.keys(listOfTheitem).forEach(photo => {
            images += `<img src="https://farm${listOfTheitem[photo].farm}.staticflickr.com/${listOfTheitem[photo].server}/${listOfTheitem[photo].id}_${listOfTheitem[photo].secret}.jpg">`;
        });
        document.getElementById('images').innerHTML = images;
    })
    .catch(err => {
        // Err Message
        loadImg = 'No Image found!! may be api has some problem try again later';
        document.getElementById('images').innerHTML = loadImg;
    });
