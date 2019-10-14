import React from 'react';

class FavoriteList extends React.Component {
    render() {
        let favorites = this.props.favorites.map((favvo)=>{
            return (
            <option>
                {favvo}
            </option>)
        });
        return (
            <div className="FavoriteBox">
                <p>Favoriter</p>
                <select>
                    {favorites}
                </select>
            </div>);
    }
  }
  
  export default FavoriteList;