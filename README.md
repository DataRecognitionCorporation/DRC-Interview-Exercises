# DRC-Interview-Exercises

## DM Developers
This branch is to be used for DM interview exercises. 
<br/><br/>

### .Net Excercise
Code the `Get()` and `Get(int id)` methods for `ParticipantsController`.

- Use the solution (VS 2017+): `./dotNet/WebApplication1/WebApplication1.sln`
- A skeleton controller is provided: `.../WebApplication1/Controllers/ParticipantController.cs`
- Defined in the controller file is a simple data class: `Participant`
- Use the static data element `Participant.Data` as your data source
- The method `Get()` should return all items in `Participant.Data`
- The method `Get(int id)` should return the item from `Participant.Data` with the matching id, or `null`
- Optionally, adapt `Get()` to return only those items where the `name` is a partial match to the querystring-supplied value `nameLike`
<br/><br/>

### Node Exercise -
Using the REST API at https://gorest.co.in/public/v1/users print out a list of all gmail.com email addresses.

After pulling the node branch, please run: &nbsp;&nbsp; ```npm install```.

You may install an additional library (e.g. `node-fetch`).

#### Run Typescript solution - Code entry point: app.ts:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```npm start```

#### Run js solution - Code entry point: app.js:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```npm run start-js```

#### Expected output:
Your final output should look something like (see also `expected-output.txt`):
```
kjhakjhhhhhk@gmail.com
jhfhfigjhfwfhk@gmail.com
kjhadfhsbsbk@gmail.com
adhhdodhdajk@gmail.com
shreya.prakash23@gmail.com
```


### SQL Exercise -
Using the online SQL sandbox at https://www.w3schools.com/sql/trysql.asp?filename=trysql_asc create a query that returns the 10 customers with the most orders and how many orders each has.

#### Expected output:
Your result look something like:

|CustomerID   |CustomerName   |NumOrders   |
|---|---|---|
|20|	Ernst Handel	|10|
|63|	QUICK-Stop	|7|
|65|	Rattlesnake Canyon Grocery	|7|
|87|	Wartian Herkku	|7|
|37|	Hungry Owl All-Night Grocers	|6|
|75|	Split Rail Beer & Ale	|6|
|41|	La maison d'Asie	|5|
|46|	LILA-Supermercado	|5|
|51|	Mère Paillarde	|5|
|7|	Blondel père et fils	|4|

