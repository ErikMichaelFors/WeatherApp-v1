import React from 'react';
import {MyFavorites} from '../LocalStorageHandler';
import { BrowserRouter, Route } from 'react-router-dom';
import DetailView from './DetailView';


export default class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        // To do
    }
    /*
    <BrowserRouter>
        <div className="pageContent">
          <Navbar searchValue={this.state.searchValue} onChange={this.onChange} />
          <div className="mainContent">
            <Route
              exact
              path="/"
              component={() => <StartPage auctions={this.state.auctions} />}
            />

            <NavLink className="foundAuctionLinks" to={"/DetailView/" + auction.AuktionID}>
                            <h2>{auction.Titel}</h2>
                            <p>Slutar: {auction.SlutDatum.replace('T', ' ')}</p>
                            <h5>Utropspris: {auction.Utropspris}</h5>
                            <h5>{this.GetNrOfBidsForThisAuction(auction.AuktionID)} bud</h5>
                        </NavLink>
    */
   HandleFavoritesChange = (event) =>{
       console.log("FavvO: "+event.target.value);
   }

    render(){
        let favorites = MyFavorites.map((favvo)=>{
            return (
            <Route
                exact
                path="/"
                component={()=> <DetailView city={favvo[0]}></DetailView>}
            >
                <option value={favvo}>{favvo}</option>
            </Route>);
        });
        let newfavorites = (<BrowserRouter>{favorites}</BrowserRouter>);
        return(
        
            <div id="searchBar">
                <label>Favoriter</label>
                <select onChange={this.HandleFavoritesChange} value={this.onSelect}>
                    {newfavorites}
                </select>
                <label>Sök</label>
                <input id="serachField" type="text"></input>
                <button type="button"></button>
            </div>
        );
    }
}