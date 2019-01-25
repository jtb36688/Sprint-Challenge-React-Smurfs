1.  Explain the differences between `client-side routing` and `server-side routing`.
Client and Server-side routing are terms that refer to where the Web App's data will be stored upon an initial viewing. Client-side is called so because upon page-load, the client (user's device) loads and retains all the App's data in memory to collect from as the user browses. This includes data that the user is not currently viewing in the window, which allows for quicker pageloads after the initial load. Alternatively, server-side routing retains all data upon the server that the Web App is being acquired from. The user's device will only download and retain in memory what is currently being viewed. This leads to a shorter initial load, but longer page-loads. Server side routing has been a standard for much longer, so search engines are more optimized for analyzing apps that use it over client-side.
1.  What does HTTP stand for?
It is hypertext transfer protocall, specificiations that web apps use regarding transferring data remotely.

1.  What does CRUD stand for?
It is create, read, update , delete - processes upon data that is stored on a server, usually one that is responsible for holding data for a web app or other network source. These processes allow us to modify the data on the server from these remote sources.

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
Create - submitting entirely new entities of data to a server, associated with POST http method.
Read - Retrieving data from a server to be stored in memory elsewhere - associated with GET http method.
Update - replaces a currently existing entity of server data with one that is stored in memory elsewhere - associated with PUT http method
Delete - deletes an entity of server data - associated with DELETE http method.

1.  Mention three tools we can use to make AJAX requests
We can use vanilla javascript's fetch method to process an ajax request. It's not well supported by all software, but it is a way we can do this without having to acquire tools from a library.
If we can install the axios repo, this is a way we can reliably process ajax requests with similar syntax as fetch. The repo needs to be added, and then imported into the app.
If using the jQuery library, we can use the JQuery.ajax() method, which more reliable than vanilla javascript's fetch() and has more options, such as functionality to make pre-request checks with the beforeSend() function that can cancel the request itself if it returns false. This could be useful for preventing undesirable ajax requests.