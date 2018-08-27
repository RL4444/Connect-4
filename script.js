(function() {
    var curPlayer = "player1";

    // var boardPosition = slotsInColumn.eq();

    $(".column").on("click", function(e) {
        var slotsInColumn = $(e.currentTarget).find(".slot");
        var allRows = [
            row0Slot,
            row1Slot,
            row2Slot,
            row3Slot,
            row4Slot,
            row5Slot
        ];
        var row0Slot = $(".row0");
        var row1Slot = $(".row1");
        var row2Slot = $(".row2");
        var row3Slot = $(".row3");
        var row4Slot = $(".row4");
        var row5Slot = $(".row5");

        // adding the class of either player1 or player2 to an empty slot of a row

        for (var i = 5; i >= 0; i--) {
            if (
                !slotsInColumn.eq(i).hasClass("player1") &&
                !slotsInColumn.eq(i).hasClass("player2")
            ) {
                break;
            }
        }
        slotsInColumn.eq(i).addClass(curPlayer);
        var winner = $("#winner-screen");

        if (victory(slotsInColumn) == true) {
            winner.css({
                display: "block"
            });
            $("." + curPlayer + "screen").css({
                display: "block"
            });
            $("column").addClass(".shrink");
        } else if (victory($(".row" + i))) {
            console.log("victor");
            winner.css({
                display: "block"
            });
            $("." + curPlayer + "screen").css({
                display: "block"
            });
            $("column").addClass(".shrink");
        } else if (diagonalVictory() == true) {
            console.log("victor");
            winner.css({
                display: "block"
            });
            $("." + curPlayer + "screen").css({
                display: "block"
            });
            $("column").addClass(".shrink");
        }

        console.log("a counter has been dropped!");
        if (curPlayer == "player1") {
            curPlayer = "player2";
            console.log("player 2 playing");
        } else curPlayer = "player1";
        console.log("player 1 playing");
    });
    //check for vertical victory

    function victory(slots) {
        var checkStr = "";
        // console.log(checkStr);
        for (var k = 0; k < slots.length; k++) {
            if (slots.eq(k).hasClass(curPlayer)) {
                console.log(checkStr);
                checkStr += "y";
            } else {
                checkStr += "n";
            }
        }
        console.log(checkStr);
        return checkStr.indexOf("yyyy") > -1;
    }

    //check for diagonal victory
    function diagonalVictory(slots) {
        var slots = $(".slot");
        //diagonal possibilites
        var lists = [
            [0, 7, 14, 21],
            [7, 14, 21, 28],
            [14, 21, 28, 35],
            [1, 8, 15, 22],
            [8, 15, 22, 29],
            [2, 9, 16, 23],
            [6, 13, 20, 27],
            [13, 20, 27, 34],
            [20, 27, 34, 41],
            [12, 19, 26, 33],
            [19, 26, 33, 40],
            [18, 25, 32, 39],
            [3, 8, 13, 18],
            [4, 9, 14, 19],
            [9, 14, 19, 24],
            [5, 10, 15, 20],
            [10, 15, 20, 25],
            [15, 20, 25, 30],
            [11, 16, 21, 26],
            [16, 21, 26, 31],
            [21, 26, 31, 36],
            [17, 22, 27, 32],
            [22, 27, 32, 37],
            [23, 28, 33, 38]
        ];

        for (var i = 0; i < lists.length; i++) {
            if (slots.eq(lists[i][0]).hasClass(curPlayer)) {
                if (slots.eq(lists[i][1]).hasClass(curPlayer)) {
                    if (slots.eq(lists[i][2]).hasClass(curPlayer)) {
                        if (slots.eq(lists[i][3]).hasClass(curPlayer)) {
                            console.log("victory");
                            return true;
                        }
                    }
                }
            }
        }
    }

    $("button").on("click", function() {
        location.reload();
    });
    // horizontal victory not working - returning error of not recognising '.length' on line 125
})();
