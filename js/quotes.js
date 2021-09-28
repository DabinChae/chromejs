const quotes = [
    {
        quote : "잠자는 동안에도 돈이 들어오는 방법을 찾아내지 못한다면 당신은 죽을때까지 일을 해야만 할것이다.",
        author : "워렌 버핏",
    },
    {
        quote : "불황은 또한 기회다.",
        author : "워렌 버핏2",
    },
    {
        quote : "투자의 제1원칙 : 절대로 돈을 잃지 말라 투자의 제2원칙 : 제1원칙을 절대 잊지 말라.",
        author : "워렌 버핏3",
    },
    {
        quote : "모두가 노리는 종목에 투자하면 아주 비싼 대가를 치러야 한다.",
        author : "워렌 버핏4",
    },
    {
        quote : "다른 사람들이 욕심을 부릴 때 신중하라. 다른 사람들이 두려워할 때 욕심 부리라.",
        author : "워렌 버핏5",
    },
    {
        quote : "처음으로 주식을 사기 전까지 나는 인생을 낭비했다.",
        author : "워렌 버핏6",
    },
    {
        quote : "주식시장은 인내심 없는 사람의 돈을 인내심 있는 사람에게 이동시키는 도구다.",
        author : "워렌 버핏7",
    },
    {
        quote : "사람들이 공포감에 빠져 있을때 욕심을 부려라. 거꾸로 사람들이 탐욕을 부릴 때 에는 공포를 느껴라. 그러나 자신이 시장보다 더 똑똑하다는 오만함은 버려라.",
        author : "워렌 버핏8",
    },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;

