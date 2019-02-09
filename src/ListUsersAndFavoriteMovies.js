import React, {Component} from 'react'

class ListUsersAndFavoriteMovies extends Component {

  	render(){
      
    	const movies = Object.keys(this.props.movies).map(key => this.props.movies[key])
		const users = Object.keys(this.props.users).map(key => this.props.users[key])
     
      return(
     	<ul>
        {this.props.profiles.map(profile => 
         	<li key={profile.id}>
        		{users.find(user => String(user.id) === profile.userID).name}'s favorite movie is 
				{movies.find(movie => String(movie.id) === profile.favoriteMovieID).name} .
			</li>
		)}
        </ul>
      )
    }     
}

export default ListUsersAndFavoriteMovies
