# Why CQRS?

In a nutshell, CQRS is all about separating **read** functions from **write** functions. In this exercise, however, we just want to apply a basic convention to manage scripts in our project.

## How does it work?

1. Create a folder for each **new domain** and place it under **Domains** folder.
2. Create two sub-folder **Commands** and **Queries**

If you remember single responsiblity principle. Each script (*.js) you place inside **Commands**/**Queries** folder should has a single responbility.

## Script template
```javascript
module.exports = {
    actionName: 'IssueOrder', /* command or query name */
    execute: function(/* arguments if needed */) {
        /* function to be execute if this command or query is invoked */ 
    }
};
```

## Usage

```javascript
/* The only infrastructure code */
var Domain = require('./Domains');
/* Load Sale domain */
var Sale = Domain.loader('Sale');

/* execute basic sale command */
Sale.Commands.IssueOrder();

/* query some sale data */
Sale.Queries.PendingOrders();

```