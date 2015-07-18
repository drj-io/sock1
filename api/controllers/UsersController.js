/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	page: function(req,res){

		Users.find(function(err,users){
				res.view('page', {users: users });
		})



	}
};
