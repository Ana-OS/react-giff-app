import React, { Component } from 'react';
import SearchBar from "./search_bar";
import Gif from "./gif";
import GifList from "./gif_list";
import giphy from 'giphy-api'

class App extends Component {
    //  Add constructor if you need state
    constructor(props){
        super(props)

        this.state = {
            gifs: [],
            selectedGifId: null
        }
    }

    search = (query) => {
        // call API
        giphy('B0AnJ5suZRu9SI9HN1xuOGqqbrz4hWLN').search({
            q: query,
            rating: 'g',
            limit:5
            }, (err, res) => {
              this.setState({
                gifs: res.data
              });
          });
    };

    selectGif = (id) => {
        console.log(id)
        this.setState({
            selectedGifId: id
        });
    };


    render() {
        return (
            <div>
                <div className="left-scene">
                    <SearchBar searchFunction={this.search}/>
                    <div className="selected-gif">
                        <Gif id={this.state.selectedGifId} />
                    </div>
                </div>
                <div className="right-scene">
                    <GifList gifs={this.state.gifs} selectGifFunction={this.selectGif }/>
                </div>   
            </div>
        );
    } 
}


export default App;