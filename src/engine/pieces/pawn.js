import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        if (this.player === Player.WHITE) {
            if(location.row > 1) return [Square.at(location.row + 1, location.col)] // Not white pawn's first move
            else return [Square.at(location.row + 1, location.col),Square.at(location.row + 2, location.col)] // White pawn's first move
        } else {
            if(location.row < 6) return [Square.at(location.row - 1, location.col)] // Not black pawn's first move
            else return [Square.at(location.row - 1, location.col),Square.at(location.row - 2, location.col)] // Black pawn's first move
        }
    }
}
