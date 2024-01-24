/*
Unit Testing = Writing automated tests to verify the code behaviour
-Arrange: Creates the class to be tested and any dependencies
-Act: Performs the code to check if there is any issue
-Assert: Checks that the code is performing how it was supposed to

--> SETUP INSTRUCTIONS
1. Fork the Chessington project from Github and deselects from 'Copy main branch only')
2. Clone the repository locally: git clone URL > cd folderName (To move to the right folder)
3. Install the dependencies: npm install
4. Run tests: npm test
5. Run the application: npm run start

--> THE RED-GREEN-REFACTOR CHALLENGE
Test Driven Development (TDD) = Writing unit tests in the following order:
-Red: Writing a test or more that fails
-Green: Writing the simplest test that passes
-Refactor: Upon all tests passed, rewrite the code neatly

chai = Testing library in Javascript

--> PART 1
1. Run tests that will fail (TDD Red): git cherry-pick Red-2
To run a single test, add '.only' in front of 'it' or the 'describe' in the test files
2. Find the failing tests in the test runner file and fix it
Failing test: Add a test for pawns moving two spaces initially? -  2 files changed, 38 insertions(+), 11 deletions(-)
(row, column)
3. Commit the changes: git commit -m 'Comment'
4. Run more tests that will fail (TDD Red): git cherry-pick Red-3

CHESS MOVES
-Bishop: Moves diagonally as many squares as it likes, as long as it's unobstructed
-King: Moves only one space up, down, right, left or diagonal - It also can move once two right/left and swap with the rook
-Knight: L moves in any direction
-Pawn: Each pawn can move up to 2 squares up (white) or down (black) on the first move, then only one and it can never return
-Queen: Moves vertically, horizontally, diagonally as many squares as it likes, as long as it's unobstructed
-Rook: Moves vertically and horizontally as many squares as it likes, as long as it's unobstructed

Class Board
{key : createBoard} // Creates the board (Arrange)
{key : setPiece} // Places the piece in the specified square: this.board[square.row][square.col] = piece - (Act)
{key : getPiece} // Checks if a piece exist in the square: this.board[square.row][square.col] - (Assert)
{key : findPiece} // Looks for a piece in the board to move and returns its location/error message: Square.at(row, col) - (Assert)
{key : movePiece} // Moves the piece from a square to another

Class Piece
{key : 'getAvailableMoves'} // Array of possible moves
:ket : 'moveTo'} // Moves the piece from one piece to another
*/