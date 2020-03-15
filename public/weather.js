// weather
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Gumi&APPID=4d321592354ff1d92c084ade49ffb0c9'   

$.getJSON(url, function(data){
    var city = data.name;           //도시명
    var temp = data.main.temp;      //현재 온도
    var weather = data.weather;     //날씨 객체
    var icon = weather[0].icon;     //날씨 아이콘 정보 
    
    //날씨 아이콘 표시
    var icon_url = 'http://openweathermap.org/img/w/' + icon;

    // 날씨 정보 표시
    $('.weather .locate').html(city);			
    $('.weather  .logo').html("<img src='" + icon_url + ".png'>");
    $('.weather  .temp').html(parseInt(temp-273.15) + '&deg;');
})
// 체이닝으로 fail()메서드 연결.
.fail(function(){
    alert('loding error');
});