import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {

        let location = board.findPiece(this)
        let availableMoves=[]
        if (this.player === Player.WHITE) {
            if(!(this.isFirstSquareFree(board))){ return availableMoves}
            else{
                if(location.row >1) 
                {
                    availableMoves.push(Square.at(location.row + 1, location.col))
                    return  availableMoves
                }
                else {
                    if(this.isSecondSquareFree(board)) 
                    {
                        availableMoves.push(Square.at(location.row + 1, location.col),Square.at(location.row + 2, location.col))
                    } 
                    return availableMoves
                 }
            }     

        //     if((location.row >1) && ((this.isFirstSquareFree(board))))
        //     return availableMoves.push(Square.at(location.row + 1, location.col))
        //     else((location.row === 1) && ((this.isFirstSquareFree(board))) && ((this.isFirstSquareFree(board)))) 
        //     if(!(this.isFirstSquareFree(board))) return []
        //  //   else if (location.row ==1 && this.isFrontSquareFree) return 
        //     else if(location.row >1 ) return [Square.at(location.row + 1, location.col)]
        //     else return [Square.at(location.row + 1, location.col),Square.at(location.row + 2, location.col)]
                      
        } else {
            if(!(this.isFirstSquareFree(board))){ return availableMoves}
            else{
                if(location.row <6) 
                {
                    availableMoves.push(Square.at(location.row - 1, location.col))
                    return  availableMoves
                }
                else {
                    if(this.isSecondSquareFree(board)) 
                    {
                        availableMoves.push(Square.at(location.row - 1, location.col),Square.at(location.row - 2, location.col))
                    } 
                    return availableMoves
                 }
            }     

            
        }
    }  
    
    isFirstSquareFree(board){
        let location = board.findPiece(this)
        if (this.player === Player.WHITE){
        return (board.getPiece(Square.at(location.row+1,location.col)) === undefined)
        }
        else{
        return (board.getPiece(Square.at(location.row-1,location.col)) === undefined)
        }
    }

    isSecondSquareFree(board){
        let location = board.findPiece(this)
        if (this.player === Player.WHITE){
        return (board.getPiece(Square.at(location.row+2,location.col)) === undefined)
        }
        else{
        return (board.getPiece(Square.at(location.row-2,location.col)) === undefined)
        }
    }


}
