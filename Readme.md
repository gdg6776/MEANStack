Team members:

1. Gaurav Gawade
2. Amruta Deshpande
3. Avni Tailor

Project Summary:

	In this project, we are building a Web API using 4 components of MEAN Stack technology which is MongoDB, ExpressJS, NodeJS and AngularJS. In this, we have used two datasets. The first one is twitter dataset which has over 11000 documents and consist of 11 attributes. The second one is the Amazon food services review dataset which has over 0.5 million instances and 10 attributes and has been taken from the Kaggle site.The aplication basically allows the user to Search from thousands  of amazon frood products check their review also the user can add his own review to product. While in Twitter dataset the user can search for tweets from several users and add comments to their tweets.


Requirement to run the project:

	1.	MongoDB 
	2.	NodeJS
	3.	ExpressJS
	4.	AngularJS

Note:- The project has been divided into two parts one for Twitter and other for amazon datasets and both of them have been saved in folder named 'KRT Project'. Also it is necessary to note that it was difficult for us to retrieve the product name from Product ID from the amazon.com we tried using the web services to obtain the product name but due to it's policies amazon.com doesn't us to do so. Hence in order to make list of product on our web page user friendly we have attached product description to the product id.

Instructions:

 - For virtual machine:
	1. Open terminal and go to the directory where the amazon project is saved and run the following commands 
		 1. 'mongoimport --db krtdb --collection amazoncollections amazon.json --jsonArray'
		 2. npm install
		 3. node app.js
	2. Open another terminal and go to the directory where twitter project is saved and run the following commands.
		1. 'mongoimport --db krtdb --collection twittercollections twitter.json --jsonArray'
		 2. npm install
		 3. node app.js
	3. In the 'KRT Project' folder open the file 'Home.Html' and following the onscreen instructions. 

 - For personal mac
	1. Assuming that you have already installed MongoDB open the terminal and run command 'mongod'.
	2. Open terminal and go to the directory where the amazon project is saved and run the following commands 
		 1. 'mongoimport  --db krtdb  --collection amazoncollections amazon.json --jsonArray'
		 2. npm install
		 3. node app.js
	2. Open another terminal and go to the directory where twitter project is saved and run the following commands.
		1. 'mongoimport --db krtdb --collection twittercollections twitter.json --jsonArray'
		 2. npm install
		 3. node app.js
	3. In the 'KRT Project' folder open the file 'Home.Html' and following the onscreen instructions. 
		
Output Interpretation:
1.	For twitter dataset
		On giving input to the search bar the number of users list is reduced and on clicking on any of the user his/her tweets can be seen on the next page. The user is also allowed to add his comment.
2. For Amazon Food Service review dataset.
		On giving input to the search bar the number of product list is reduced and on clicking on any of the product its reviews can be seen on the next page. The user is also allowed to add his comment.
