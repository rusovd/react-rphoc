# React Render Props & HOC patterns
https://codesandbox.io/s/github/rusovd/react-rphoc

React offers components strategy that are a simple way to reuse code. The component encapsulates a lot of things from content, styles and to business logic. 

There are many ways (patterns) in order to optimize your code as much as possible, including in order to avoid DRY(Don't Repeat Yourself).

In this example, you can familiarize yourself with examples of using two common techniques: Render Props and HOC(High Order Component).

# Agenda

**Render Props** [*(Be careful when using Render Props with React.PureComponent)*](https://reactjs.org/docs/render-props.html)
####Idea: A render prop is a function prop that a component uses to know what to render.

The simplest example of using this pattern can be illustrated on the following task: suppose we have a component that receives data from somewhere (from a database, for example, or some kind of calculation), and then displays it, for example, in an order sheet. Of course, we can implement all this in one component ... But, obviously, the exact same data may be needed in other components: to send a letter, for the admin page, and the devil knows where. That is, we need the same data in different places!

The idea is simple:
- we create a separate component that will receive data from somewhere - ProductData
- from other components (for example, ProductList), where we need data from ProductData, we remove the code(see commit 1) to get this data
- finally, we need to implement new component loading logic.(see commit 4 & 5)


```javascript
<ProductData
    render={({ products }) =>
        <ProductList products={products} />
    }
/>
```

In general:

```JavaScript
// example 1
<Container render={prop => (
 <Presentation {...props} />
)} />

// example 2
<Container children={prop => (
 <Presentation {...props} />
)} />

// example 3
<Container>
 {props => (
    <Presentation {...props} />
  )}
</Container>
```

![RP concept](https://github.com/rusovd/react-rphoc/blob/master/_pics/pic1.jpg)

- - -

**HOC**
####Idea: Higher-order components (HOCs) take a component and return a component
When you pass a component to a function and it returns a new component, it’s called a higher-order component (HOC). If that sounds simple, it is! And your code will be simpler for using them.

IIf you weren’t familiar with HOCs before, you might have encountered them without realizing it! Some notable examples:

- react-redux - connect(mapStateToProps, mapDispatchToProps)(UserPage) 
- react-router - withRouter(UserPage)
- material-ui - withStyles(styles)(UserPage)

Understanding HOC is easier with code than with words. So let's first take a look at the code of the last commit(#6).

![HOC Component concept](https://github.com/rusovd/react-rphoc/blob/master/_pics/pic2.jpg)

![HOC Component using](https://github.com/rusovd/react-rphoc/blob/master/_pics/pic3.jpg)


## To Clone the project

```sh
git clone https://github.com/rusovd/react-rphoc.git
```

## To Deploy

```sh
npm ci
```

or

```sh
yarn --pure-lockfile
```

## Usage Hint 
In order to better understand what changes need to be implemented in the code(to move from a "straight-line" strategy to RP / HOC) - I recommend watching the commits history:

**1(initial commit)**. Init
```sh
git checkout 34fa757
```

**2**. Added ProductTable, NavBar, Router
```sh
git checkout 6c07644
```

**3**. Adding a new in-between component ProductData to begin implementing the RenderProps logic. (+some fixes)
```sh
git checkout 518c181
```

**4**. Modified ProductList(and route in App.js) to get the data from render props of ProductData
```sh
git checkout 5bea4ca
```

**5**. Similarly, we modify ProducеTable(and route in App.js) to get the data from render props of ProductData
```sh
git checkout 0ae4778
```

**6**. Added withProductData to implement the HOC pattern
```sh
git checkout 5a3cfb3
```

## To run


```sh
npm run start
```


or 

```sh
yarn start
```
## Disclaimer

This is a draft version of chapter RP/HOC for future React Tutorial.
