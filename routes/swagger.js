/**
 * @swagger
 * /books:
 *   get:
 *     summary: Returns ALL books
 *     description: Return an array of all books.
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               example: [{"id":1,"name":"On a roulé sur la Terre","year":2000,"category":"Travel"},{"id":12,"name":"Le monde en stop","year":2016,"category":"Travel"}]   
 */

 /**
 * @swagger
 * /books/{id}:
 *   get:
 *     summary: Returns a SPECIFIC book.
 *     description: Returns a specific book, using it's id as parameter.
 *     parameters:
 *       - in: path
 *         name: id
 *         type: integer
 *         required: true
 *         description: Numeric ID of the book to get.   
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               example : [{"id":1,"name":"On a roulé sur la Terre","year":2000,"category":"Travel"}]
*/

/**
 * @swagger
 * /books:
 *   post:
 *     summary: ADD a new book
 *     description: Add a new book, by giving it's name, year of publication and category. 
 *     parameters:
 *       - in: body
 *         name: name
 *         type: string
 *         required: true
 *         description: Name of the book
 *         example: On a roulé sur la Terre   
 *       - in: body
 *         name: year   
 *         schema: 
 *          type: integer
 *         required: true    
 *         example: 2000     
 *       - in: body
 *         name: category
 *         type: string
 *         required: false 
 *         example: Travel      
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example: {"message":"The book 'Le monde en stop' has been added."} 
 */


/**
 * @swagger
 * /books/{id}:
 *   delete:
 *     summary: DELETE a book
 *     description: Delete a specific book, by using it's id. 
 *     parameters:
 *       - in: path
 *         name: id
 *         type: integer
 *         required: true
 *         description: Numeric ID of the book to delete.   
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: The book has been deleted.   
 */

/**
 * @swagger
 * /books/{id}:
 *   put:
 *     summary: UPDATE a specific book.
 *     description: Update a specific book, using its id as parameter.
 *     parameters:
 *       - in: path
 *         name: id
 *         type: integer
 *         required: true
 *         description: Numeric ID of the book to update.   
 *       - in: body
 *         name: name
 *         type: string
 *         required: true
 *         description: Name of the book
 *         example: On a roulé sur la Terre   
 *       - in: body
 *         name: year   
 *         type: integer
 *         required: true     
 *       - in: body
 *         name: category
 *         type: string
 *         required: true 
 *         example: Travel 
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example: {"message":"The book 'On a roulé sur la Lune' has been updated."}
*/