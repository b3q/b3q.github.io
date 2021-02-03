var today = new Date();

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var dayofweek = `${days[today.getDay()]}`;
var banner = document.getElementsByClassName('banner-sat');
// var bannerDisplay = banner[0].style.display;

if (dayofweek == 'Friday') {
    banner[0].style.display = 'block';
}