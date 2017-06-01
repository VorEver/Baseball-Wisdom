
function getQuoteList() {
  var arrays = [quotes0, quotes1, quotes2];
  var i = Math.floor(Math.random() * arrays.length);

  displayRandomQuote(arrays[i]);
};

function displayRandomQuote(quoteList) {
        var qIndex = Math.floor(Math.random() * quoteList.length);
  
        var quoteString = "<i id=\"quote-icon-left\" class=\"fa fa-quote-left\" aria-hidden=\"true\" ></i>";
        quoteString = quoteString + quoteList[qIndex].quote;
        quoteString = quoteString + "<i id=\"quote-icon-right\" class=\"fa fa-quote-right\" aria-hidden=\"true\" ></i>";
        var authString = "<em>" + quoteList[qIndex].author + "</em>";
    $("#quote").html(quoteString);
    $("#author").html(authString);
};



$(document).ready(function(){
  $("#get-new-quote").on("click", getQuoteList);
  $("#tweet-quote").on("click",function(){
    window.open("https://twitter.com/share?text="+$("#quote").text()+" - "+$("#author").text()+ "\n\n");
  });
  
});


var quotes0 = [{"quote": "You always get a special kick on opening day, no matter how many you go through. You look forward to it like a birthday party when you're a kid. You think something wonderful is going to happen.", "author": "Joe DiMaggio"},{"quote": "One of the beautiful things about baseball is that every once in a while you come into a situation where you want to, and where you have to, reach down and prove something.", "author": "Nolan Ryan"},{"quote": "Playing baseball for a living is like having a license to steal.", "author": "Pete Rose"},{"quote": "Guessing what the pitcher is going to throw is eighty percent of being a successful hitter. The other twenty percent is just execution.", "author": "Hank Aaron"},{"quote": "Baseball is a game, yes. It is also a business. But what it most truly is, is disguised combat. For all its gentility, its almost leisurely pace, baseball is violence under wraps.", "author": "Willie Mays"},{"quote": "There are three types of baseball players: those who make it happen, those who watch it happen, and those who wonder what happens.", "author": "Tommy Lasorda"},{"quote": "I ain't afraid to tell the world that it don't take school stuff to help a fella play ball.", "author": "Shoeless Joe Jackson"},{"quote": "I never smile when I have a bat in my hands. That's when you've got to be serious.", "author": "Hank Aaron"},{"quote": "It helps if the hitter thinks you're a little crazy.", "author": "Nolan Ryan"},{"quote": "After I hit a home run I had a habit of running the bases with my head down. I figured the pitcher already felt bad enough without me showing him up rounding the bases.", "author": "Mickey Mantle"},{"quote": "I never blame myself when I'm not hitting. I just blame the bat and if it keeps up, I change bats.", "author": "Yogi Berra"},{"quote": "I'd like to thank the good Lord for making me a Yankee.", "author": "Joe DiMaggio"},{"quote": "Any man who can look handsome in a dirty baseball suit is an Adonis. There is something about the baggy pants, and the Micawber-shaped collar, and the skull-fitting cap, and the foot or so of tan, or blue, or pink undershirt sleeve sticking out at the arms, that just naturally kills a man's best points.", "author": "Edna Ferber"},{"quote": "With the money I'm making, I should be playing two positions.", "author": "Pete Rose"},{"quote": "The pitcher has got only a ball. I've got a bat. So the percentage in weapons is in my favor and I let the fellow with the ball do the fretting.", "author": "Hank Aaron"},{"quote": "The only thing I can do is play baseball. I have to play ball. It's the only thing I know.", "author": "Mickey Mantle"},{"quote": "Baseball is what we were. Football is what we have become.", "author": "Mary McGrory"},{"quote": "The game's isn't over until it's over.", "author": "Yogi Berra"},{"quote": "Baseball is the belly-button of our society. Straighten out baseball, and you straighten out the rest of the world.", "author": "Bill Lee"},{"quote": "Baseball is such a game of hope. Anything can happen--and often does--usually in the most tension-filled times. Maybe your team is up by a run or two with only three outs to get. Why does it seem that those three outs are always the toughest three to get? Or maybe you are on the other side of the ledger with your team being down a run or two with three outs to go. Doesn't hope spring eternal if you get a base runner or two on?", "author": "Peter G. Doumit"},{"quote": "Baseball is an American icon. It is the Statue of Liberty, the bald eagle, 'In God We Trust,' Mount Rushmore, ice cream, apple pie, hot dogs, and rally monkeys. BASEBALL IS AMERICA.", "author": "Victor Alexander Baltov"},{"quote": "Football may be the 'disco beat' of modern sports, but baseball is Chopin or the mystique of Mozart. Every baseball game is new with the pristine beauty of the notes of Beethoven's Ninth.", "author": "Phillip Gerstle"},{"quote": "What we’ve done for baseball is this: We made all the ballparks smaller, we’ve juiced up the ball, the pitchers are bigger and stronger, and we won’t call strikes. Everything is against the pitcher. They should raise the mound again, put them on even terms. They lowered the mound after the ’68 season; that’s because Bob Gibson had 13 shutouts and Denny McLain won 31 games. And they haven’t done anything with it since then.", "author": "Pete Rose"},{"quote": "The seductiveness of baseball is that almost everyone with an abiding interest in it knows exactly how it should be played. And secretly believes that he could do it, if only God had seen fit to make him just a little bit less clumsy.", "author": "George V. Higgins"},{"quote": "Baseball is a game of long-suffering, and if one doesn't have the endurance to get over the hard times, bad hops, bad luck, failure-at-the-rate-of-70%-or-better hitting, and all the other things that happen that try one's patience, they won't last long in the game.", "author": "Peter G. Doumit"},{"quote": "Baseball is drama with an endless run and an ever-changing cast.", "author": "Joe Garagiola"},{"quote": "The state of baseball is the barometric pressure of America's soul.", "author": "Victor Alexander Baltov"},{"quote": "Baseball has the largest library of law and love and custom and ritual, and therefore, in a nation that fundamentally believes it is a nation under law, well, baseball is America's most privileged version of the level field.", "author": "A. Bartlett Giamatti"},{"quote": "Baseball gives you every chance to be great. Then it puts every pressure on you to prove that you haven't got what it takes. It never takes away the chance, and it never eases up on the pressure.", "author": "Joe Garagiola"},{"quote": "I think I was the best baseball player I ever saw.", "author": "Willie Mays"},{"quote": "I always say, the only time you gotta worry about getting booed is when you're wearing a white uniform. And I've never been booed wearing a white uniform.", "author": "Pete Rose"},{"quote": "Baseball is essentially a 19th century sport that is no longer congruent with contemporary American cultural dynamics and thus seems terribly slow and boring to many people. Baseball games are now events at which to drink beer and relax, and the ambience at baseball games is considerably different from what one finds at football games--especially crucial games, where ancient antagonisms or bowl bids hang in the balance.", "author": "Arthur Asa Berger"},{"quote": "The fundamental reason for the popularity of the game is the fact that it is a national safety valve. Voltaire says that there are no real pleasures without real needs. Now a young, ambitious and growing nation needs to 'let off steam.' Baseball furnishes the opportunity. Therefore, it is a real pleasure.... That is what baseball does for humanity. It serves the same purpose as a revolution in Central America or a thunderstorm on a hot day.... A tonic, an exercise, a safety-valve, baseball is second only to Death as a leveler. So long as it remains our national game, America will abide no monarchy, and anarchy will be too slow.", "author": "Allen Sangree"},{"quote": "There are three things you can do in a baseball game. You can win, or you can lose, or it can rain.", "author": "Casey Stengel"},{"quote": "Baseball is a universal language. Catch the ball, throw the ball, hit the ball.", "author": "Pete Rose"},{"quote": "Baseball is not a conventional industry. It belongs neither to the players nor management, but to all of us. It is our national pastime, our national symbol, and our national treasure.", "author": "John Thorn"},{"quote": "Baseball is sunshine, green grass, fathers and sons, our rural past.", "author": "Albert Theodore Powers"},{"quote": "Baseball is purer than life; it's symmetrical, fair, and dignified. There's no debating what happened: it happened.", "author": "Marvin Cohen"},{"quote": "Baseball is reassuring. It makes me feel as if the world is not going to blow up.", "author": "Sharon Olds"},{"quote": "The first thing baseball wants to do is make you a superstar and then say that you owe baseball something. I don't owe baseball anything. Baseball owes me.", "author": "Hank Aaron"},{"quote": "Like a tree, baseball is a thing of dignity. A tree knows how to balance itself, roots in relation to trunk in relation to the outspreading and the growth. Pitcher battles a balance, with all the fielders on his side, against the wood-wielding enemy. The distances are right. From pitcher to batter, from base to base. There are enough chances, there are enough accidents, and when those things even out, it's still a test of skill. What it comes down to is that the batters with the most talent have the best records. Ditto with the pitchers. Baseball tests ability. Out of it all, an archives, a legacy of records, of statistics, has come down to us. And the compilation is always going on, season after season.", "author": "Marvin Cohen"},{"quote": "In spite of its varied and primarily English origins, baseball is American. Many of our dramas as a people are played out on baseball's stage. The game of baseball is simple, fair, and for eight months of every year served up daily. Three strikes and a batter is out. Three outs for each team every inning. Each team has as many chances to bat and to score as its opponent. Nine innings except in the case of a tie. All games are played until one team wins, even if the game lasts all day and all night. Baseball, among all major American sports, is the only game not limited by a clock. Very simple, very just. Everything else about baseball is surrounded by a hazy aura where America's soul can be found.", "author": "Albert Theodore Powers"}];
var quotes1 = [{"quote": "Baseball is indulgent about facades, preferring them to reality. The game has surrounded itself with euphemisms, like a junkyard with an ivy-covered fence. Baseball is peanuts and hot dogs and heart and team spirit and camaraderie and good feeling and a way of life second in wholesomeness only to the Boy Scouts. Of course, it is none of these things, and one only has to examine the fortunes and personnel of a single team over a period of time to understand how shimmery the facade is.", "author": "Leonard Shecter"},{"quote": "To connect faith and the national pastime is not to argue that baseball is something more than a game; it is to affirm that baseball is a game.", "author": "Christopher H. Evans & William R. Herzog Ii"},{"quote": "Baseball is a pretty sight and a nice experience, win or lose, particularly if it is watched in a nice park.", "author": "Daniel Okrent & Harris Lewine"},{"quote": "Some argue that baseball is a subtler game than football, which, if true, may be part of the reason many Americans find baseball boring.", "author": "Arthur Asa Berger"},{"quote": "Baseball is an art! A drama! A ballet without music! Let us give it a Greek chorus!", "author": "Deborah Wiles"},{"quote": "I believe in the church of baseball. I've tried all the major religions and most of the minor ones. I've worshipped Buddha, Allah, Brahma, Vishnu, Siva, trees, mushrooms, and Isadora Duncan. I know things. For instance there are 108 beads in a Catholic rosary and there are 108 stitches in a baseball. When I learned that, I gave Jesus a chance. But it just didn't work out between us. The Lord laid too much guilt on me. I prefer metaphysics to theology. You see, there's no guilt in baseball. And it is never boring.... I've tried them all, I really have, and the only church that truly feeds the soul, day in and day out, is the church of baseball.", "author": "Ron Shelton"},{"quote": "seball is as American as turkey and apple pie. Baseball is a tradition that passes from generation to generation. Baseball crosses social barriers, creates community spirit, and is much more than a private enterprise. Baseball is a national pastime.", "author": "Harry Seymour Crump"},{"quote": "What I like best about baseball is the continuity. Generation after generation can follow the game and get the same satisfactions year after year and bring to it the same interest and spirit. I want to take that with me into the next century.", "author": "Dan Shaughnessy"},{"quote": "It breaks your heart. It is designed to break your heart. The game begins in the spring, when everything else begins again, and it blossoms in the summer, filling the afternoons and evenings, and then as soon as the chill rains come, it stops and leaves you to face the fall alone. You count on it, rely on it to buffer the passage of time, to keep the memory of sunshine and high skies alive, and then just when the days are all twilight, when you need it most, it stops ... And summer is gone.", "author": "A. Bartlett Giamatti"},{"quote": "The great thing about baseball is that there's a crisis every day.", "author": "Gabe Paul"},{"quote": "What's true for the people who play baseball is true in different ways for those of us who mostly just watch it. On the one hand, a baseball stadium becomes a kind of home for many of us who go often. Whether it's a big league stadium where you can leave your peanut shells scattered beneath your seat or a high school field where you know the person who chalks the base paths every Thursday, it's a personal space. You can keep score with your private notation system, sound of authoritatively on what Bud Selig is doing wrong, or tell an ump that he's missed a call even when you are 140 feet and a bad angle away from the plate.", "author": "Eric Bronson"},{"quote": "If you can't enjoy the game unless you are pretty sure your team is going to win, baseball is not the game for you. Remember, the best team in baseball in any year is going to be beaten about 60 times.", "author": "Daniel Okrent & Harris Lewine"},{"quote": "The structure of baseball is its art. It's a structure that admits of infinitely complicated possibilities and combinations, within the rigid framework of rules in common, of distances to fences, of worked-out angles, of human proportions. Man is the measure of all things. The Major League ballplayer is the measure of the distances on his field of trade. Given these, he must do or die, win or lose. It's the majesty that dignity imparts.", "author": "Marvin Cohen"},{"quote": "Baseball is a curious anomaly in American life. It seems to have been ingrained in people in their childhood.... Baseball is, after all, a boy's game, and children are innocent of evil. So even adults who are prejudiced revert to their childhood when they encounter a baseball player and they react with the purity of little children.", "author": "Jackie Robinson"},{"quote": "Baseball is both poetic and narrative in its action. It is an activity grounded in a quest for home. Home is the game's beginning and end; its movement is both Grail-like and Odyssean.", "author": "Peter Gizzi"},{"quote": "One of the great things about baseball is that it can be played almost anywhere.", "author": "Josh Leventhal"},{"quote": "Baseball is impossible without psychology: impossible to play, and impossible to appreciate fully as a fan. The physical demands of the game are intense and the physical abilities of the players, as extraordinary as they are, cannot by themselves meet those demands. Working alone, even the fastest reflexes would be insufficient--the reflexes must be supported by the player's intellect. The player's intellect, in turn, is shaped by those cognitive and emotional forces that are the province of psychology.", "author": "Mike Stadler"},{"quote": "It doesn't take much to get me up for baseball. Once the National Anthem plays, I get chills. I even know the words to it now.", "author": "Pete Rose"},{"quote": "Baseball is only a pastime, a sport, an entertainment, a way of blowing off steam. But it is also the national game, with an appeal to Americans of every race, color, creed, sex or political opinion. It unites Americans in the common cause of rooting for the home team.", "author": "Jackie Robinson"},{"quote": "The average age of our bench is deceased.", "author": "Tommy Lasorda"},{"quote": "My theory of hitting was just to watch the ball as it came in and hit it. As I realized years later, that is still the finest theory of hitting yet devised.", "author": "Tommy Lasorda"},{"quote": "I walk into the clubhouse and it's like walking into the Mayo Clinic. We have four doctors, three therapists and five trainers. Back when I broke in, we had one trainer who carried a bottle of rubbing alcohol and by the seventh inning he had drunk it all.", "author": "Tommy Lasorda"},{"quote": "For most baseball fans, maybe oldest is always best. We love baseball because it seizes and retains the past, like the snowy village inside a glass paperweight.", "author": "Donald Hall"},{"quote": "To be an American and unable to play baseball is comparable to being a Polynesian and unable to swim.", "author": "John Cheever"},{"quote": "College baseball is an imperfect game; that is its beauty and the key to its enjoyment. Place it in a major league setting and it becomes an awkward parody. In the major leagues, a ground ball to the shortstop is an out, but in college ball, even a pop-up carries an element of doubt. The appeal of college baseball is that the players have talent but not perfection. They are capable of outstanding accomplishment and unbelievable mistakes; they are, in short, just like ourselves. It is a game all of us can understand.", "author": "Paul Burka"},{"quote": "Baseball is a lot more like life than life is. It's nine or more innings of struggle, against the game itself as much as the opponent. Take good swings at the right pitches and hits will come. Command the corners with quality pitches and you'll get hitters out. Good mechanics and good decisions, along with a little luck, produce victory. The obstacle is not the other team, not the problems in life, but how you approach the game.", "author": "Richard Daigle"},{"quote": "The world of baseball is fan-made. The fan's interest is sentimental in the sense that sentimentality is an emotion in excess of its cause. His interest is also coincidental, for baseball just happens to offer the best means to obtain a wishful end. The tensions of a changing world may reproduce new symptom formations. The neurotic compromise that the fan makes between his interest in Baseball and his inability to attain absolute pleasure from it could produce a regressive turn to other sports. Like football, that blood game.", "author": "Jim Brosnan"},{"quote": "Baseball is a public trust. Players turn over, owners turn over and certain commissioners turn over. But baseball goes on.", "author": "Peter Ueberroth"},{"quote": "Baseball is the most perfect of games, solid, true, pure and precious as diamonds. If only life were so simple.", "author": "W. P. Kinsella"},{"quote": "Baseball is the most intellectual game because most of the action goes on in your head.", "author": "Henry Kissinger"},{"quote": "Baseball is as close a liturgical enactment of the white Anglo-Saxon Protestant myth as the nation has. It is a cerebral game, designed as geometrically as the city of Washington itself, born out of the Enlightenment and the philosophies so beloved of Jefferson, Madison, and Hamilton. It is to games what the Federalist Papers are to books; orderly, reasoned, judiciously balanced, incorporating segments of violence and collision in a larger plan of rationality, absolutely dependent on an interiorization of public rules.", "author": "Michael Novak"}];
var quotes2 = [{"quote": "The professional baseball fan is an American cultural phenomenon. His fund of quotable statistics, his trove of memorable traditions, his collections of valueless mementos comprise a mine of guilt-edged insecurity. Although he can neither do nor teach, he regards himself as a player-coach.", "author": "Jim Brosnan"},{"quote": "The best words--most fun words--in our language are 'play ball.' Those words conjure up home runs and strikeouts, extra innings and double plays. 'Play ball' is what baseball is all about--its call to arms--and there isn't a baseball fan in the USA or Canada who isn't a little excited over the beginning of a new season.", "author": "Peter Ueberroth"},{"quote": "Baseball is continuous, like nothing else among American things, an endless game of repeated summers, joining the long generations of all the fathers and all the sons.", "author": "Donald Hall"},{"quote": "If you don’t think it’s the greatest game, leave, cause you’re missing it all. It’s the greatest game there ever was. It is the only game where nobody cares where you come from. And nobody cares who you are. They only care, can you play. That’s all this game is. It’s a game of having fun.", "author": "Sparky Anderson"},{"quote": "Baseball is something of a ballet, the trouble is that the music is substandard (they use pretty much the same score at the hockey rink) and the performers often spit tobacco juice all over the place.", "author": "Dave Shiflett"},{"quote": "To the fierce, ardent, leather-lunged Professional fan, baseball is life itself, a motive for breathing, the yeast that helps his spirit, as well as his gorge, rise.", "author": "Jim Brosnan"},{"quote": "It is hard to imagine a democratic republic without baseball for the instruction of its citizens.", "author": "Michael Novak"},{"quote": "Every day is a new opportunity. You can build on yesterday's success or put its failures behind and start over again. That's the way life is, with a new game every day, and that's the way baseball is.", "author": "Bob Feller"},{"quote": "Baseball is not life and death. But in life and death, we remember the game, and we remember those who shared the game with us.", "author": "Jeff Zillgitt"},{"quote": "Baseball is part of America's plot, part of America's mysterious, underlying design--the plot in which we all conspire and collude, the plot of the story of our national life.", "author": "A. Bartlett Giamatti"},{"quote": "Baseball gives ... a growing boy self-poise and self-reliance. Baseball is a man maker.", "author": "Al Spalding"},{"quote": "Baseball is as urban as sparring gladiators in the Colosseum, fighting each other, fighting lions, the scent of terror and failure and blood sickly-sweet in the air. Baseball is as urban as bearbaiting on the south bank of the Thames, a spectacle that competed for shillings with the words of Shakespeare and Jonson.", "author": "George Vecsey"},{"quote": "Baseball is the real game of the Nation, because it contains all the essentials of manhood, as manhood is understood in the United States, and the game has so many good qualities that it is spreading all over the earth. So long as the little sons of Uncle Sam ... play baseball, we are going to have a healthy, clean, industrious country, for as an exercise it is the best sport known.... It trains the mind as well as the body, and there is little element of danger. It can safely be played by boys of five and men of fifty. The heart, the lungs, the legs, the arms and the eye are called into play in every second the game is on; that is why baseball has been the favorite pastime of the American small boy; it is a developer par excellence.", "author": "Chief Bender"},{"quote": "Baseball is a game of moments: exhilarating and excruciating, heartwarming and heartbreaking, dazzling and, yes, sometimes even dull. Red Barber, the greatest baseball announcer of all time, said that 'baseball is dull only to dull minds,' but I respectfully disagree.... Baseball is a lot like life: there are moments of excitement and joy with long stretches of monotony.", "author": "Liz Hartman Musiker"},{"quote": "Look! Look at the yellow neon running up the foul poles.... Watch the players, white against green like froth on waves of ocean. Look around at the fans, count their warts just as they count ours; look at them waddle and stuff their faces and cheer with their mouths full. We're not just ordinary people, we're a congregation. Baseball is a ceremony, a ritual, as surely as sacrificing a goat beneath a full moon is a ritual.", "author": "W. P. Kinsella"},{"quote": "If basketball is checkers, baseball is chess--and the endless configurations of its statistics are quantum physics!", "author": "Liz Hartman Musiker"},{"quote": "Sliding headfirst is the safest way to get to the next base, I think. And the fastest. You don't lose your momentum.... And there is one more important reason that I slide headfirst. It gets my picture in the newspaper.", "author": "Pete Rose"},{"quote": "seball is a spectacle; people come to see it because it is artificial, because it distills reality into a customary form. Yet the very fact that they come to see it makes it real. A culture is its carnivals, its stage plays, its sideshows and circuses.", "author": "Timothy Morris"},{"quote": "The New York Mets are planning to move the walls of Citi Field in order to increase the number of homeruns they hit. Call me old fashioned but isn't that what steroids are for?", "author": "Conan O'Brien"},{"quote": "Am I still in uniform? Then I ain't retired.", "author": "Pete Rose"},{"quote": "Baseball is the American success story. It is the only avenue of escape for thousands of boys born into a dreay environment of poverty. It is, moreover, a great common ground on which bartenders and bishops, clergymen and bosses, bankers and laborers meet with true equality and understanding. The game has proved in everyday language that democracy works.", "author": "J. G. Taylor Spink"},{"quote": "Baseball exemplifies a tension in the American mind, the constant pull between our atomistic individualism and our yearning for community.", "author": "George F. Will"},{"quote": "Baseball is a team sport, encoding in its formula for success social and intellectual abilities that individual sports do not require.", "author": "Timothy Morris"},{"quote": "Baseball is almost the only orderly thing in a very unorderly world. If you get three strikes, even the best lawyer in the world can't get you off.", "author": "Bill Veeck"},{"quote": "Baseball is a game that boys play for fun and men play for keeps.", "author": "Barney Mann"},{"quote": "There was a beauty here bigger than the hurtling beauty of basketball, a beauty refined from country pastures, a game of solitariness, of waiting, waiting for the pitcher to complete his gaze toward first base and throw his lightning, a game whose very taste, of spit and dust and grass and sweat and leather and sun, was America.", "author": "John Updike"},{"quote": "Whoever wants to know the heart and mind of America had better learn baseball.", "author": "Jacques Barzun"},{"quote": "You don't want to get beat, number one, and you hate getting shutout, number two, and even worse, no hits.", "author": "Dusty Baker"},{"quote": "Major League Baseball announced today that Alex Rodriguez has been suspended for 211 games. So if you're familiar with baseball's schedule, it means he'll be out for about a month. I think there are 10,000 games in a season.", "author": "Conan O'Brien"},{"quote": "I enjoy Shea Stadium. But the fans are something else. I look upon each game there as an experience. I get to go to a zoo and don't have to pay admission.", "author": "Pete Rose"},{"quote": "That's the thing about baseball ... You do what they did before you. That's the connection you make. There's a whole long line. A man takes his kid to a game and thirty years later this is what they talk about when the poor old mutt's wasting away in the hospital.", "author": "Don Delillo"},{"quote": "The Yankees have blown a 10-game lead in the standings, and are now tied for first place. You can tell they're depressed. Today, five of their players tested positive for Häagen-Dazs.", "author": "Jimmy Fallon"},{"quote": "I'm lucky to have the opportunity to play baseball. However, I'm not lucky because I'm a good baseball player. I like to think that I am good because I worked hard and am dedicated to the game.", "author": "Pete Rose: Pete Rose: My Life In Baseball"},{"quote": "No matter how good you are, you're going to lose one-third of your games. No matter how bad you are, you're going to win one-third of your games. It's the other third that makes the difference.", "author": "Tommy Lasorda"},{"quote": "There are parents out there screaming as if their kid is going to be in the big leagues someday. C'mon. I chew them out if I see that. Maybe they've got their own idea how to do things, but it's wrong. Just be with the kids. Let 'em make errors. Give them all a chance. It's not about winning. It's spirit, togetherness.", "author": "Tommy Lasorda"},{"quote": "Baseball is like driving, it's the one who gets home safely that counts.", "author": "Tommy Lasorda"},{"quote": "Baseball has two main elements that grip the fan. Like many other sports, it has great subtlety and it has individual heroism. As an American child you're mesmerized by both. As a boy you play baseball all summer long, all day long and into the evening, so long as there is still light enough to be able to see the ball. Then as an adult, you watch it and follow it for the rest of your life, still like a child.", "author": "Philip Roth"}];


