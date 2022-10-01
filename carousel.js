const dishes = [
    {
        id: 1,
        Name: 'Nkwobi',
        image: 'naija-dishes/nkwobi.jpg',
        about: `Nkwobi is a Nigerian dish made from spiced cow foot.
        It's served in posh restaurants and beer bars in Nigeria. Nigerians 
        love it. The only problem is that cowfeet take a long time to boil. 
        Slow cookers or pressure cookers are good since they cook food more slowly. 
        If neither option was available, I found that boiling and freezing cowfeet 
        was a great substitute. My freezer always has ready-to-eat meats. This 
        reduces my kitchen time`

    },
    {
        id: 2,
        Name: 'Abacha',
        image: 'naija-dishes/abacha.png',
        about: `East Nigeria is where the Abacha salad originated. This African 
        salad has simple ingredients, such shredded cassava, traditional spices, 
        like calabash nutmeg, and a delectable dressing. It can be made quickly using a 
        few common components. Abacha is fermented, sun-dried, thinly sliced cassava root.
         The condiments distinguish this dish. 
        Food options include garden eggs, Ugba, roasted or fried pork, and fried fish.`
    },

    {
        id: 3,
        Name: 'Jollof Rice',
        image: 'naija-dishes/jollof-and-beef.jpg',
        about: `Long-grain parboiled rice, tomatoes, tomato paste, pepper, vegetable oil,
         onions, and stock cubes are the essential ingredients in traditional Nigerian 
         jollof rice. The base of the dish is typically a rich beef stock and a fried 
         tomato and pepper puree, and it is prepared with the majority of the components 
         in a single pot. The liquid is then allowed to simmer with the rice. Fried plantains, 
         moi moi, steaming vegetables, coleslaw, salad, etc., are common accompaniments
          to the protein of choice.`
    },
    {
        id: 4,
        Name: 'Asaro',
        image: 'naija-dishes/asaro.jpg',
        about: `Asaro is a porridge-like Nigerian yam dish produced by boiling yam chunks in a 
        seasoned pepper mix. It's quick. It's a fantastic dinner or snack and a party favorite. 
        Asaro is made by cooking puna yam in a sauce of peppers, tomatoes, onions, palm oil, and 
        seasonings. While it's more common in the Yoruba-speaking region, it's a popular dish across
         Nigeria with various modifications.`
    },
    {
        id: 5,
        Name: 'Ofada',
        image: 'naija-dishes/ofada.jpg',
        about: `Ofada rice is an indigenous variety of rice grown in the small town of Ofada,
         which is located in the Obafemi Owode Local Government Area of Ogun State. Most commonly,
          "Ayamase," a special stew, is served with Prada rice. a type of stew common in Western
           Nigeria. Ofada stew is a popular native savory dish that has a powerful taste thanks to 
           the use of smoked dead shrimp and fermented locust beans (iru).`
    },
    {
        id: 6,
        Name: 'Egusi and Pounded Yam',
        image: 'naija-dishes/egusi-and-akpu.jpg',
        about:  `Egusi soup, made from melon, is a traditional soup from Western Africa. Pounded yam, 
        fufu, or eba make great accompaniments to this soup.The sight of steaming bowls of egusi
         soup and pounded yam is enough to make anyone's mouth water. Commonly, pulverized melon 
         seeds are used to thicken the egusi soup. Meat, fish, onions, tomatoes, herbs, and greens 
         make up the bulk of the ingredients. To make pounded yam, boil peeled yam until soft, then 
         pound it until desired consistency is reached.`
    },
    {
        id: 7,
        Name: 'Small Chops',
        image: 'naija-dishes/small-chops.jpg',
        about: `Nigerian Small Chops are typically served as appetizers or finger snacks
         at gatherings and celebrations. This is a miniature version of traditional Nigerian
          food. Spring Rolls, baby puff puffs, Samosas, chicken kebabs, coconut candy, mini
           donuts, stick meat, peppered gizzards/snails, gizdodo, mini sausage rolls, mini 
           fish rolls, and a lot more are all included in the little chops.`  
    },
    {
        id: 8,
        Name: 'Goat meat Peppersoup',
        image: 'naija-dishes/peppersoup.jpg',
        about: `Goat meat cutlets or chunks, pepper soup spice, and other tasty African 
        spices are the foundation of a robust soup known as African pepper soup. You'll 
        get the big, powerful African flavors you love in this soup if you're looking 
        for a genuine Goat meat pepper soup. Most of the African Pepper Soup is liquid,
         and it is typically served hot. The meat or fish is boiled to extract their flavor. 
         The meat stock is further flavored with traditional African herbs and spices.`

    },
    {
        id: 9,
        Name: 'Bole and Fish',
        image: 'naija-dishes/bole-and-fish.jpg',
        about: `Nigerians love bole and fish. A typical Nigerian street meal from Port Harcourt,
         Rivers State. This oil city is famed for many things, but its Bole street food stands out
          (roasted plantain and fish). bole and fish is roasted plantain and smoked/grilled fish 
          from Port Harcourt (the plantain could be ripe, half-ripe or unripe). Is dish served 
          with different accompaniments, usually a stew and protein of choice (commonly fish or chicken).`
    }
]

const img = document.getElementById("image")
const title = document.getElementById("food-title")
const about = document.getElementById("about")
const randomc = document.getElementById("random")

const previous = document.querySelector('#prevarrow')
const random = document.querySelector('#random')
const next = document.querySelector('#nextarrow')
const dishdetails = document.getElementById("dishdetails")


function counter(count){
    if(count > 8){
        let count = 0;
        
    }
    else{
        return count++
    }
}

function contentChange(index){
    const item = dishes[index]
    img.src = item.image;
    title.textContent = item.Name
    about.textContent = item.about
    document.body.style.backgroundImage = `linear-gradient(to top, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.9)), url(${item.image})`
    let index1 = parseInt(index) + 1;
    randomc.textContent = `${index1} out of 9`

}

let currentItem = 0

window.addEventListener("DOMContentLoaded", ()=>{
    contentChange(currentItem);
})

next.addEventListener("click", ()=>{
    document.body.style.transition = 'all 0.5s';
    currentItem++;
    if(currentItem > 8){
         currentItem = 0;
         contentChange(currentItem)
        
    }
    else{
       contentChange(currentItem) 
    }
   
    
    
})

previous.addEventListener("click", ()=>{
    document.body.style.transition = 'all 0.5s';
    currentItem--;
    if(currentItem < 0){
         currentItem = 8;
         contentChange(currentItem)
        
    }
    else{
       contentChange(currentItem) 
    }
   
    
    
})