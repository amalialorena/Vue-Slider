var carousel = new Vue (
{
    el: "#carousel",

    data: {
        slidesIndex: 0,
        slides: [
            {
            image: 'img/01.jpg',
            title: 'Svezia',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
            image: 'img/02.jpg',
            title: 'Svizzera',
            text: 'Lorem ipsum, dolor sit amet.',
            },
            {
            image: 'img/03.jpg',
            title: 'Gran Bretagna',
            text: 'Lorem ipsum, dolor sit ametEt temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi.',
            },
            {
            image: 'img/04.jpg',
            title: 'Germania',
            text: 'Lorem ipsum, dolor sit ametEt temporibus.',
            },
            {
            image: 'img/05.jpg',
            title: 'Paradise',
            text: 'Lorem ipsum, dolor sit ametEt temporibus voluptatum suscipit.',
            },
            

        ],

    },

});






//Rifare l’esercizio dello slider come fatto assieme in classe.
//Quindi farlo funzionare con Vue, nel modo del framework.

