<!DOCTYPE html>
<html lang="en">

    <head>
        <?php include 'Imports/top.php'; ?>
        <title>4 Pics 1 Word</title>
    </head>

    <body>
        <div hidden id="content">
            <h1><a id="title" href="index.php"><span class="title">4</span> Pics <span class="title">1</span> Word</a></h1><br>
            <h1><span id="second"></span></h1><br>
            <div id="menu">
                <button  id="start" type="button">Start Game</button><br><br>
                <button id="viewhighscores">High Scores</button>
            </div>

            <button  id="modemenuback" type="button">Back</button><br>
            <h1 id="nodata"></h1>
            <button hidden id="newGame" type="button">New Game</button>

            <span hidden id="timeIsUp" class="centerFixed">Time is up!</span>

            <div hidden id="imagebox">
                <div id="toprightinfo">
                    <button id="quitgame">Quit</button><br>
                    <span id="mode"></span><br>
                </div>
                <div hidden id="timerContainer">
                    <!--<span class="fa fa-heart fa-2"></span>-->
                </div><br>
                <a id="skip" href="#">Skip Word</a><br>
                <img id='image'><br>
                <span id="word"></span><br>
                <input autofocus id="answer" type="text" class="centeredInput"><br>
                <span id="result"></span><br>
                <button id="check">Check</button><br><br>
            </div>

            <!--<div id="backdrop"></div>-->

            <div hidden id="quitmodal" class="centerFixed">
                <div id="quitcontent">
                    <h3>Are you sure you wanna quit?</h3>
                    <p id="quitmessage">Your game will not be saved. Continue?</p>
                    <div class="lower-right">
                        <button autofocus id="yes" type="button">Yes</button>
                        <button class="no" type="button">No</button>
                        <button class="no" type="button">Cancel</button>
                    </div>
                </div>
            </div>

            <div hidden id="playerNameModal" class="centerFixed">
                <div id="playerNameContent">
                    <h3>High Score</h3>
                    <p id="quitmessage">Enter your name:</p>
                    <input id="playerNameInput" type="text" class="centeredInput">
                    <div class="lower-center">
                        <button id="confirmPlayerName">Confirm</button>
                    </div>
                </div>
            </div>

            <!-- Modal -->
            <div class="modal fade" id="highScores" role="dialog">
                <div class="modal-dialog">
                    <!-- Modal content-->
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">High Scores</h4>
                        </div>
                        <div class="modal-body">
<!--                            <p>1st.	5 Words	Welmer Angbun</p>-->
                            <?php require_once 'viewscores.php'; ?>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <?php include 'Imports/bottom.php'; ?>
    </body>

</html>