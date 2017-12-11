# homeawaymatches

Randomizing home and away sides for teams of online ice hockey league automatically.

Also works as my FIRST practise of using Github! This is going to get interesting...

Basic rules for the project:

- We have 2 conferences of varying number of teams.
- Maximum difference in the number of teams in a conference is one.
- Every team plays once against the teams of the other conference.
- Every team should have even amount of home and away matches, if possible.
- If amount of matches is uneven, randomly select the teams who get less games at home.

Steps to take:
- (DONE) Create a textarea element for both conferences.
- (DONE) Make a JS Array for both conferences.
- (DONE) Check the amount of teams for both conferences.
- (DONE) Check if number of games will be even or not.
- (DONE) Create an array for pairs of teams.
- (DONE) Create a function which chooses a team randomly from both conferences.
- Store and pair the chosen teams (lets say TeamA1 and TeamB2), if they pass the tests:
    - TeamA1+TeamB2 should not exist.
    - TeamA1+TeamB? Has <= than max number of games/home games.
- Loop the function described above, until all teams from conf A have a max number of home games.
- Check for every conf b team, if a pair with every conf a teams exist. If it doesn't exist, add a new pair where the team from conf b is home.
- Produce a tidy list to give as an output.
