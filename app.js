const wrapper = document.querySelector(".sliderWrapper")
const menuItem = document.querySelectorAll(".menuItem")

const product = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
          p : "Nike Air Force 1 shoes. These are classic, stylish, and versatile sneakers that have been popular since their debut in 1982. They come in various styles, including:"
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img : "./img/hippie2.png"
        },
        {
          code: "black",
          img: "./img/hippie2(1).png",
        },
      ],
    },
  ];

  let choosenproduct = product[0]

  const currentProductImg = document.querySelector(".productImg")
  const currentProductTitle = document.querySelector(".productTitle")
  const currentproductPrice = document.querySelector(".productPrice")
  const currentProductcolors = document.querySelectorAll(".color")
  const currentProductSizes = document.querySelectorAll(".size");
  
    menuItem.forEach((item,index) => {
    item.addEventListener("click", ()=>{

        //change the current slide

        wrapper.style.transform = `translateX(${-100*index}vw)`;

        //change the choosen product

        choosenproduct = product[index]

        //change text of current product

        currentProductTitle.textContent = choosenproduct.title
        currentproductPrice.textContent = "$" + choosenproduct.price
        currentProductImg.src = choosenproduct.colors[0].img;

        //assing new colors

        currentProductcolors.forEach((color,index)=>{
            color.style.backgroundColor = choosenproduct.colors[index].code
        })
    })
})



currentProductcolors.forEach((color,index)=>{
  color.addEventListener("click", ()=>{
    currentProductImg.src = choosenproduct.colors[index].img
  })
})
currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});