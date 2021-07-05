/*-----------Event Listeners-----------*/
$(document).ready(function () {
    $(".centeredInput").attr('maxlength', '15');
    $('#content').hide();
    $('#modemenuback').hide();
    $('#content').fadeIn(1000);
    $('#modemenu').hide();
    // Enter Key Press
    $("#answer").keydown(function (e) {
        if (e.keyCode === 13) {
            check();
        }
    });

    // Mode Menu
    $("#normal").click(function () {
        $('#modemenu').hide();
        $('#modemenuback').hide();
        setMode("normal");
        $("#mode").text("Mode: Normal");
        newGame();
    });
    $("#hard").click(function () {
        $('#modemenu').hide();
        $('#modemenuback').hide();
        setMode("hard");
        $("#mode").text("Mode: Hard");
        newGame();
    });
    $("#veryhard").click(function () {
        $('#modemenu').hide();
        $('#modemenuback').hide();
        setMode("very hard");
        $("#mode").text("Mode: Very Hard");
        newGame();
    });

    // Start Game Button Click
    $("#start, #newGame").click(function () {
        $('#menu').fadeOut(200);
        newGame();
    });
    $("#modemenuback").click(function () {
        $('#modemenuback').fadeOut(500);
        $('#menu').fadeIn(2000);
        $('#modemenu').fadeOut(500);
    });
    // High Scores Button Click
    $("#viewhighscores").click(function () {
        $('#highScores').modal('show');
    });
    // Check Button Click
    $("#check").click(function () {
        check();
    });
    $("#skip").click(function () {
        skip();
    });
    $("#quitgame").click(function () {
        $("#quitmodal").fadeIn(100);
        $("#yes").focus();
    });
    $(document).keydown(function (e) {
        if ($("#imagebox").is(":visible") === true) {
            if (e.keyCode === 27) {
                $("#quitmodal").fadeIn(100);
                $("#yes").focus();
            }
        }
    });
    $("#yes").click(function () {
        $("#quitmodal").fadeOut(100);
        quit();
    });
    $(".no").click(function () {
        $("#quitmodal").fadeOut(100);
        $("#answer").focus();
    });
    $("#confirmPlayerName").click(function () {
        checkValue();
    });
    $("#playerNameInput").keydown(function (e) {
        if (e.keyCode === 13) {
            checkValue();
        }
    });
});
/*-----------Event Listeners-----------*/

function updateLife(lives) {
    $("#timerContainer").empty();
    $("#timerContainer").show();
    var i;
    for (i = 0; i < lives; i++) {
        $("#timerContainer").append("<span class='fa fa-heart fa-2'></span>");
    }
}

function checkValue() {
    if ($('#playerNameInput').val() !== "") {
        checkExistingUser();
    } else {
        $('#playerNameInput').val("required");
        $('#playerNameInput').css("background-color", "#FFC0BC");
        setTimeout(function () {
            $('#playerNameInput').css("background-color", "white");
        }, 200);
        setTimeout(function () {
            $('#playerNameInput').css("background-color", "#FFC0BC");
        }, 400);
        setTimeout(function () {
            $('#playerNameInput').css("background-color", "white");
            $('#playerNameInput').val("");
        }, 800);
    }
}

function checkExistingUser() {
    var playerName = $('#playerNameInput').val().charAt(0).toUpperCase() + $('#playerNameInput').val().slice(1);

    $.post("checkExistingUser.php", {
        playerName: playerName
    }, function (data) {
        if (data === "0") {
            insertScore();
            $.get('viewscores.php', function (data) {});
            $('#highScores').modal('show');
            $("#playerNameModal, #imagebox").fadeOut(500);
            $("#menu").fadeIn(500);
        } else {
            $('#playerNameInput').val("name taken");
            $('#playerNameInput').css("background-color", "#FFC0BC");
            setTimeout(function () {
                $('#playerNameInput').css("background-color", "white");
            }, 200);
            setTimeout(function () {
                $('#playerNameInput').css("background-color", "#FFC0BC");
            }, 400);
            setTimeout(function () {
                $('#playerNameInput').css("background-color", "white");
                $('#playerNameInput').val("");
            }, 800);
        }
    });
}

function insertScore() {
    var playerName = $('#playerNameInput').val();
    $.post("insertScore.php", {
        playerName: playerName.charAt(0).toUpperCase() + playerName.slice(1),
        score: score
//        ALTER TABLE `scores` AUTO_INCREMENT = 1;
    });
}

function setMode(mode) {
    $.post("setMode.php", {
        mode: mode,
    });
}

var score = 0;

// Kung na click ang "Check" nga button kay mudagan ni nga function
function check() {
    $.get('check.php', function (data) {
        var original = data;
        var answer = document.getElementById("answer").value.toLowerCase();
        var format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

        if (answer === original) {
            // If ang answer kay sakto
            score += 100;
            $("#check").hide(50);
            $("#answer").hide(50);
            $("#result").css("color", "green");
            document.getElementById("result").innerHTML = "Correct!";
            document.getElementById("answer").value = "";
            $("#result").toggle(50);
            $("#result").toggle(50);
            setTimeout(function () {
                getData();
                document.getElementById("result").innerHTML = "";
            }, 2000);
            setTimeout(function () {
                $("#check").show(500);
                $("#answer").show(500);
                $("#answer").focus();
            }, 2000);             // Background Color Change
            $("body").css("background-color", "#A3EBB1");
            setTimeout(function () {
                $("body").css("background-color", "#D6EBFF");
            }, 2000);
        } else if (!answer || format.test(answer) === true) {
            // If ang answer kay blank or sayop ang format or ang answer kay number
            $("#result").css("color", "orange");
            document.getElementById("result").innerHTML = "Enter a valid answer!";
            $("#result").toggle(50);
            $("#result").toggle(50);
            setTimeout(function () {
                document.getElementById("result").innerHTML = "";
            }, 2000);             // Background Color Change
            $("body").css("background-color", "#FFF0CF");
            setTimeout(function () {
                $("body").css("background-color", "#D6EBFF");
            }, 2000);
        } else {
            // If ang answer kay wrong
            $("#result").css("color", "red");
            document.getElementById("result").innerHTML = "Wrong! Try again.";
            $("#result").toggle(50);
            $("#result").toggle(50);
            setTimeout(function () {
                document.getElementById("result").innerHTML = "";
            }, 2000);             // Background Color Change
            $("body").css("background-color", "#FFC0BC");
            setTimeout(function () {
                $("body").css("background-color", "#D6EBFF");
            }, 2000);
        }
    });
}

function getData() {
    $("#answer").focus();
    setTimeout(function () {
        $.ajax({
            url: 'getData.php',
            type: 'POST',
            dataType: 'json',
            data: {test: '1'},
            success: function (data) {
                if (data === 'none') {
                    $("#imagebox").hide(100);
                    $("#nodata").css("color", "orange");
                    document.getElementById("nodata").innerHTML = "No words available.";
                    setTimeout(function () {
                        $("#nodata").show(500);
                        $("#menu").show(500);
                    }, 1000);
                } else {
                    $("#image").attr("src", "Data/" + data[0].picture);
                    $("#word").html(data[1]);
                    $("#image").css("height", "25%");
                    $("#image").css("width", "25%");
                    $("#image").css("user-drag", "none");
                    $("#image").fadeOut(100);
                    $("#image").fadeIn(100);
                    $("#imagebox").show(100);
                }
            }
        });
    }, 1000);
}
function skip() {
    $.get('skip.php', function (data) {
        if (data === "0") {
            $("#skip").css("color", "green");
            $("#skip").text("I surrender!");
            updateLife(data);
            getData();
        } else if (data <= "0") {
            $("#imagebox").fadeOut(500);
            $("#playerNameModal").fadeIn(500);
        } else {
            if (data === "1") {
                $("#skip").css("color", "red");
            }
            updateLife(data);
            getData();
        }
    });
}

function quit() {
    $.get('newGame.php', function (data) {
        $("#nodata").hide(500);
        $("#menu").hide(500);
        $("#imagebox").hide(500);
        $("#menu").fadeIn(2000);
        clearInterval(timer);
    });
}

function newGame() {
    $.get('newGame.php', function (data) {
        $("#nodata").hide(500);
        $("#menu").hide(500);
        $("#imagebox").show(1000);
        $("#skip").css("color", "darkgray");
        updateLife(data);
        getData();
    });
}

function hide() {
    $("#imagebox").hide();
    $("#newGame").hide();
    //Timer.start(0, 1, 5);
}

var Clock = {
    totalSeconds: 0,

    start: function () {
        var self = this;
        this.interval = setInterval(function () {
            self.totalSeconds += 1;
            $("#hour").text(Math.floor(self.totalSeconds / 3600));
            $("#minute").text(Math.floor(self.totalSeconds / 60 % 60));
            $("#second").text(parseInt(self.totalSeconds % 60));
        }, 1000);
    },

    pause: function () {
        clearInterval(this.interval);
        delete this.interval;
    },

    resume: function () {
        if (!this.interval)
            this.start();
    }
};

var Timer = {

    elapsedTime: 0,

    start: function (x, y, z) {
        var self = this;
        var hours = x;
        var minutes = y;
        var seconds = z;
        //var duration = 600;
        var duration = (hours * 3600) + (minutes * 60) + (seconds) + 1;

        this.interval = setInterval(function () {
            //alert(self.duration);
            self.elapsedTime += 1;
            if ((duration - self.elapsedTime) === 0) {
                alert("timer");
            }

            var timer = new Date((duration - self.elapsedTime) * 1000).toISOString().substr(11, 8);

            $("#hour").text("0");
            $("#minute").text(Math.floor((duration / 60) - (self.elapsedTime / 60)));
            $("#second").text(timer.substring(4));
        }, 1000);
    },

    pause: function () {
        clearInterval(this.interval);
        delete this.interval;
    },

    resume: function () {
        if (!this.interval)
            this.start();
    }
};