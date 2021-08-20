const Band = require("./band");

class BandList {
    constructor(){
        this.bands = [
            new Band('Metalica'),
            new Band('Soda Stereo'),
            new Band('Enanitos Verdes'),
            new Band('Queen'),
        ];
    }

    addBand( name ){
        const newBand = new Band( name );
        this.bands.push( newBand );
    }

    removeBand( id ){
        this.bands = this.bands.filter( band => band.id !== id);
    }

    getBands(){
        return this.bands;
    }

    increaseVotes( id ){
        this.bands = this.bands.map( band => {
            if(band.id === id){
                band.votes += 1
            }
            return band;
        });
    }

    changeBandName( id, newName ){
        this.bands = this.bands.map( band => {
            if(band.id === id){
                band.name = newName;
            }
            return band;
        });
    }

}

module.exports = BandList;