# Prompt: Valentine's Day Cards for each of my cats
## Valentines

Woops, I forgot to make valentine's for my cats. I don't want to make these all by hand... 

Help me out by looping through the valentine's and making them into a web page!

**id**: valentine-1
**name**: Rudy
**message**: It'd be rude not to say happy Valentine's day!

**id**: valentine-2
**name**: Pomengranate
**message**: You da POM! Happy Valentine's Day!

**id**: valentine-3
**name**: Schmitty
**,essage**: We're schmitten with you, our Valentine!

## Requirements
### Initializing Logic (outside of functions):
- [ ] Create a Valentine Object for each Valentine listed above, using the property names provided
- [ ] Create an Array to hold each already created Valentine Object
- [ ] Call the function `processValentines()` at the end of the file
    - You can comment this out until you actually create it, which I recommend you do last

### Proccessing Function Logic:
- [ ] Create a function called `setHTMLValentinesName`
    - It takes one parameter called `valentine`
        - This will be a valentine object. You do not know what that is yet, you just know you can access its `id` and its `name`.
    - Using `valentine.id`, `document.getElementById`, and `${stringInterpolation}`, find and store the Valentine's Name element from the HTML 
        - *Hint*: Check the IDs on the already created HTML
- [ ] Create a function called `setHTMLValentinesMessage`
    - It takes one parameter called `valentine`
        - This will be a valentine object. You do not know what that is yet, you just know you can access its `id` and its `name`.
    - Using `valentine.id`, `document.getElementById`, and `${stringInterpoloation}`, find and store the Valentine's Message element from the HTML 
        - *Hint*: Check the IDs on the already created HTML

- [ ] Create a function called `processValentines()` that takes no parameters
    - Loop through the Array and use functions `setHTMLValentinesName` and `setHTMLValentinesMessage` to make all three valentines for my kitties

### Bonus
- Utilize Bootstrap or another CSS Framework like Bulma to style the site
- Add images by targeting the img "src" attributes and adding place kitten URLs to the valentine objects