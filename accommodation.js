const descriptions = {
    acc1: "Admire the northern lights and the twinkling of the bright starry sky in one of our Glass Igloos – either with a group of friends, or snuggled up romantically with your loved one. The two-person igloos include a toilet and the option of an extra bed. Saunas and showers are available in separate buildings. The four-person igloos include their own toilet and shower. The Glass Igloos are available to book all through the Northern Lights season, beginning from around 24th  August until the end of April",
    acc2: "Our newly built Kelo-Glass igloos combine the comforting warmth of our cosy log chalets with the sensational views of our world-famous glass igloos. Sleeping up to six and featuring a private sauna, fireplace, kitchenette, and a bedroom with a stunning glass roof, they’re made from Lapland’s unique Kelo pinewood. Take in the enchanting beauty of the northern lights and the Lappish wilderness from the comfort of your own private hideaway.",
    acc3: "Our log chalets for one to ten people are made of impressively large kelo pines – trees that once stood dead and dried out – and designed in a rugged style that fits perfectly with their wild surroundings.  While you won’t find widescreen TVs or dishwashers inside, you can enjoy even better sources of entertainment in every chalet – a fireplace and a sauna. NOW AVAILABLE: Summer & autumn bookings 1 June – 30 October! Witness the magic of the Midnights Sun and beginning of the Northern Lights season",
    acc4: "A night in one of our snow igloos is an unforgettable experience. Rarely does anyone get the chance to sleep as cosily as they do in an ice-cool igloo that shields them from even the faintest outside noise. Even if the mercury dips to minus 40 degrees centigrade outside, the temperature inside is a consistent minus three to minus six. We’ll provide everything you need for a cool, comfortable night in, such as a down sleeping bag",
    acc5: "For lovebirds travelling together, we have a truly classy suite. The spacious 60 m2 log chalet made of kelo wood features a great bathroom with conveniences like a bath tub and sauna.  On the terrace, there’s an outdoor Jacuzzi for relaxing bathing whatever the season. NOW AVAILABLE: Summer & autumn bookings 1 June – 30 October! Witness the magic of the Midnights Sun and beginning of the Northern Lights season.",
    acc6: "Earth lodges (kammi in Finnish) have been used as residences in Finland since ancient times. Their turf roofs conceal them in the landscape, as if forest trolls had built them. It’s hard to imagine a more appropriate love nest – the earth lodge is the perfect hideout. And why rush out? After all, you do have a sauna and a great bathroom with bathtub all to yourselves",
    acc7: "In the almost century-old traditional house, you can immerse yourself in the authentic Lapland lifestyle of old. The hectic, modern rat race will feel like a distant memory as you rock comfortably in the rocking chair. The log house sleeps two people, and naturally it features a sauna as well. The house also has a very interesting past, very much intertwined in world history.",
    acc8: "Our largest chalet, Sivakka sleeps up to ten people, so there’s easily enough room for a larger family or team of colleagues. There’s a large living room, three bedrooms, a kitchen, a separate fireplace room, and a sauna.",
    acc9: "How about staying on the banks of the golden river, in peace and quiet? These idyllic chalets have their own sauna, and in the front yard you’ll find a kick sled. This traditional Finnish winter runabout will get you to the restaurant or activity sites in no time",
}
const items = document.querySelectorAll('.accommodation-list li').forEach(item => {
    console.log(item);
    item.addEventListener('mouseenter', event => {
        const imageSrc = event.target.getAttribute('data-image');

        // remove style 'active' from all items
        document.querySelectorAll('.accommodation-list li').forEach(item => item.classList.remove('active'));
        // add style 'active' to the current item
        item.classList.add('active');

        document.getElementById('accommodation-image').src = `./pictures/${imageSrc}.png`;
        document.getElementById('accommodation-description').textContent = descriptions[imageSrc];
    });
});