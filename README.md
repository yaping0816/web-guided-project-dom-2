# DOM II

## Instructions to run this project

- Clone the project from Github
- Using your command line, navigate into the project folder
- Run `npm install`. This downloads all dependencies listed in the `package.json` file
- Run `npm start`. This compiles the project and launches a development server
- Navigate with Chrome to the URL indicated by the output of the `npm start` command

**Please, do NOT run the project using `live-server`, or VSCode extensions, or however you were doing it in the past, before attempting the previous steps!**

If we can't get get `npm install` and `npm start` working, we are still able to follow the guided project, but we won't be able to compile this afternoon's project. Use the help channel to get Node and NPM working correctly.


<!-- Is there a rule of thumb as to when we should hard-code html versus adding html via the DOM? How will we know if we should use a combination of the two? -->
- for the most part when I've worked in the DOM I generate the code inside of a
<div class="container">
</div>
so there's just the html, head and body.
So I would do something like
const app = document.querySelector(".container")
then just appendChild my header, main, and footer elements to app
const header = document.createElement("header")
const main = document.createElement("main")
const footer = document.createElement("footer")
app.appendChild(header)
app.appendChild(main)
app.appendChild(footer)
which gives me something to work with
<div class="container">
  <header></header>
  <main></main>
  <footer></footer>
</div>
React will simplify this process, but it's still DOM manipulation

- There will be times when you need to dynamically create instances like a new comment that someone just posted. Think in terms of Facebook, less in terms of a static blog.
  
- if you are making a web page, yes hard coding is totally easier. How about if you are doing 250 web pages, and you need to add a menu item to all 250 of them. If I started off where all 250 pages have access to an object something like this:
const menuItems = [
  {
    href="/contact.html",
    menuName="contact",
    menuIcon="/images/contact.jpg"
  },
  {
    href="/products.html",
    menuName="products",
    menuIcon="/images/products.jpg"
  },
]
and I wanted to add a home to those 250 pages I could do it by modifying the object
const menuItems = [
  {
    href="/index.html",
    menuName="home",
    menuIcon="/images/home.jpg"
  },
  {
    href="/contact.html",
    menuName="contact",
    menuIcon="/images/contact.jpg"
  },
  {
    href="/products.html",
    menuName="products",
    menuIcon="/images/products.jpg"
  }
]
mind you the object file might be a LOT larger, then you wouldn't have to copy and paste 250 times like on a hard coded page

- Another example would be a user profile page. let's say you have 250 users (strange it's 250) instead of having a page for me (/users/brian_hague.html) and a page for you (/users/marvin_kirkland.html), etc. we can make a generic users page (/users/index.html) that, assuming the user is logged in, will display that user's information, and even let them edit or update their information. In general practice, if you are making a web page, you'd just hard code it (say I was making a friend a page to advertise his business). if you are making a web application (say my friend wants to be able to sell things to customers from the website), there will be very little hard coded information, just the basic HTML file, with a div.container inside of body. Which leads to components, which are taught next week

- If I'm going to use DOM manipulation using "vanilla JS", or a library or framework like React... I'm going to use framework or library, unless it's not allowed on the project.
---
As an example, the contract I'm currently working (well, in 20 minutes) I must use DOM manipulation using "vanilla js". 90% of the dom manipulation is performed by an archaic "PHP" language. Even though PHP does DOM manipulation, I need to use vanilla JS DOM manipulation to add events to items as that cannot be done in PHP.
It's also a 20 year old system, which was written well before React existed. If we were to rewrite this system from scratch, or do a new version of it, it would be written in React

<!-- Difference between stopPropogation and stopImmediatePropogation -->
- stopPropogation allows other event handlers on the same element to be executed, while stopImmediatePropogation prevent this
- they both prevent event handlers in the capturing and bubbling phases from being executed (eg. prevent the event from bubbling up)

<!-- difference between innerHTML and textContent -->
- innerHTML: returns HTML, parses content as HTML, so it takes longer. It outputs text/html(tell the broswer to parse it before displaying it).
- textContent: uses staight text, does not parse HTML, and is faster. It outputs text/plain.
- innerHTML: returns the content in the elements and the HTML markup contained, including any spacing,line breaks,etc
- textContent: return the content of all elements in the node(elemtn),including script and style
  
<!-- differences between mouseover and mouseenter -->
- mouseover:
- bubble
- triggers when the mouse enters the div element and its child element
- mouseenter:L
- not bubble
- triggers when the mouse pointer eneters the div element
- In short, a mouseover occurs on an element when you are over it-coming from either its child OR parent element; but a mouseenter event only occurs when the mouse moves from outside this element to this element