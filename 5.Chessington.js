/*
Unit Testing = Writing automated tests to verify the code behaviour
-Arrange: Creates the class to be tested and any dependencies
-Act: Performs the code to check if there is anny issue
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

--> PART 1
1. Run tests that will fail (TDD Red): git cherry-pick Red-2
2. Find the failing tests in the test runner file and fix it
Failing test: Add a test for pawns moving two spaces initially? -  2 files changed, 38 insertions(+), 11 deletions(-)
(row, column)
Each pawn can move up to 2 squares up (white) or down (black) on the first move, then only one and it can never return
3. Commit the changes: git commit -m 'Comment'
4. Run more tests that will fail (TDD Red): git cherry-pick Red-3

CHESS MOVES
-Bishop: Moves diagonally as many squares as it likes, as long as it's unobstructed
-King: Moves only one space up, down, right, left or diagonal - It also can move once two right/left and swap with the rook
-Knight: L moves in any direction
-Queen: Moves vertically, horizontally, diagonally as many squares as it likes, as long as it's unobstructed
-Rook: Moves vertically and horizontally as many squares as it likes, as long as it's unobstructed
*/