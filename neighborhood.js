const placeBut = document.querySelector('#placeNeighb')

placeBut.addEventListener('mouseover', () => {
	placeBut.style.backgroundColor = 'blue'
    placeBut.style.color = 'white'
})

placeBut.addEventListener('mouseout', () => {
	placeBut.style.backgroundColor = 'darkgoldenrod'
    placeBut.style.color = 'darkblue'
})

placeBut.addEventListener('click', () => {

    let restaurants = [
        "https://www.yelp.com/biz/terminal-27-los-angeles",
        "https://www.yelp.com/biz/rutts-catering-los-angeles",
        "https://www.yelp.com/biz/hangari-kalguksu-los-angeles-4",
        "https://www.yelp.com/biz/haneuem-los-angeles-3",
        "https://www.yelp.com/biz/tokki-korean-tapas-los-angeles",
        "https://www.yelp.com/biz/ahgassi-gopchang-los-angeles-6",
        "https://www.yelp.com/biz/chadolpoong-los-angeles-2",
        "https://www.yelp.com/biz/slurpin-ramen-bar-los-angeles-los-angeles",
        "https://www.yelp.com/biz/openaire-los-angeles",
        "https://www.yelp.com/biz/chef-kang-sul-box-los-angeles-3"
    ]
    var restaurant = restaurants[Math.floor(Math.random()*restaurants.length)];
	return window.location=restaurant
})