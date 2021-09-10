# OBJECTIVE

This project was created to better understand more the virtualization engine `react-cool-virtual`.

# STACK

- CRA
- Typescript
- React Cool Virtual

### REFERENCE

[https://blog.logrocket.com/how-to-virtualize-large-lists-using-react-window/](https://blog.logrocket.com/how-to-virtualize-large-lists-using-react-window/)

[https://material-ui.com/pt/components/data-grid/virtualization/](https://material-ui.com/pt/components/data-grid/virtualization/)

[https://github.com/bvaughn/react-window](https://github.com/bvaughn/react-window)

[https://www.youtube.com/watch?v=QhPn6hLGljU&ab_channel=AddyOsmani](https://www.youtube.com/watch?v=QhPn6hLGljU&ab_channel=AddyOsmani)

[https://github.com/wellyshen/react-cool-virtual](https://github.com/wellyshen/react-cool-virtual)

### WHAT IS

- rendering concept that focuses on tracking the user’s position and only committing what is visually relevant to the DOM in any given scroll position.
- It provides us with all the benefits of pagination along with the UX of infinite scrolling.

### BENEFITS

- you don't need to pay the cost of thousands of rows of data being rendered at once

### HOW TO CALCULATE

- We pre-calculate the total height of our list using the dimensions of the given list items
- and multiplying it by the count of our list items.
- then, we position the items to create a list that the user can scroll through.

### HOW IT WORKS

Infinite Scroll

![image](https://user-images.githubusercontent.com/8363610/132918474-4ef744cc-e9a5-4fb8-9238-c74d3644f464.png)

![image](https://blog.logrocket.com/wp-content/uploads/2020/02/virtual-scrolling-initial-state-change.gif)
