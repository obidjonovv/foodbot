import pizzaImg from '../images/pizza.webp'
import burgerImg from '../images/gamburger.webp'
import cocaImg from '../images/coca.png'
import saladImg from '../images/solad.png'
import waterImg from '../images/water.jpeg'
import icecreamImg from '../images/icecream.jpeg'
import kebabImg from '../images/kebab.png'


export function getData(){
    return [
        {title: "Pizza", price: 17.99, Image: pizzaImg},
        {title: "Burger", price: 9, Image: burgerImg},
        {title: "Coca", price: 14, Image: cocaImg},
        {title: "Salad", price: 14.9, Image: saladImg},
        {title: "Bottle of water", price: 4, Image: waterImg},
        {title: "Ice cream", price: 17, Image: icecreamImg},
        {title: "Kebab", price: 14.39, Image: kebabImg},
    ];
}