export default class Piece {
    constructor(player,isKing) {
        this.player = player;
        this.isKing = isKing;
    }
   

    getAvailableMoves(board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }

   
}
