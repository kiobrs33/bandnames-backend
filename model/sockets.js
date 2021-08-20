const BandList = require("./band-list");

class Sockets {
    constructor( io ){
        this.io = io;
        this.bandList = new BandList();

        this.socketEvents();
    }

    socketEvents(){
        this.io.on('connection', ( socket ) => {
        
            console.log('Cliente Conectado');

            // Obtener todas la Bandas
            socket.emit('current-bands', this.bandList.getBands() );

            // Agragar Votos
            socket.on('add-vote', ( id ) => {
                this.bandList.increaseVotes(id);

                // Emitiendo nuevos Cambios
                this.io.emit('current-bands', this.bandList.getBands() );
            });

            // Eliminar Banda
            socket.on('delete-band', ( id ) => {
                this.bandList.removeBand(id);

                // Emitiendo nuevos Cambios
                this.io.emit('current-bands', this.bandList.getBands() );
            });

            // Cambiar Nombre de Banda
            socket.on('change-name-band', ({id, name}) => {
                this.bandList.changeBandName(id, name);

                // Emitiendo nuevos Cambios
                this.io.emit('current-bands', this.bandList.getBands() );
            });

            // Crear nueva Banda
            socket.on('create-band', (name) => {
                this.bandList.addBand(name);

                // Emitiendo nuevos Cambios
                this.io.emit('current-bands', this.bandList.getBands() );
            });

        });
    }
}

module.exports = Sockets;