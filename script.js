$(() => {
  let currentScore = 0;
  let globalScore = 0;
  let globalScorePlayer2 = 0;
  let playerOne = "joueur1";
  let playerTwo = "joueur2";
  let actualPlayer = playerOne;

  function lancerDe() {
    const nombreDecimal = Math.random() * 6 + 1;
    const nombre = Math.trunc(nombreDecimal);
    return nombre;
  }

  function switchPlayer() {
    if (actualPlayer === playerOne) {
      actualPlayer = playerTwo;
      $("#actual-p1-score").text((currentScore -= currentScore));
      alert("Joueur 2");
    } else {
      actualPlayer = playerOne;
      $("#actual-p2-score").text((currentScore -= currentScore));
      alert("Joueur 1");
    }
  }

  function winner() {
    if (actualPlayer === playerOne && globalScore >= 100) {
      alert("Joueur 1 a gagner");
      $(".global-score-p1").text((globalScore -= globalScore));
      $("#actual-p1-score").text((currentScore -= currentScore));
      $(".global-score-p2").text((globalScore -= globalScore));
      $("#actual-p2-score").text((currentScore -= currentScore));
    } else if (actualPlayer === playerTwo && globalScore >= 100) {
      alert("Joueur 2 a gagner");
      $(".global-score-p1").text((globalScore -= globalScore));
      $("#actual-p1-score").text((currentScore -= currentScore));
      $(".global-score-p2").text((globalScore -= globalScore));
      $("#actual-p2-score").text((currentScore -= currentScore));
    }
  }

  function dice1() {
    $(".dice1").css("display", "none");
    $(".dice2").css("display", "none");
    $(".dice3").css("display", "none");
    $(".dice4").css("display", "none");
    $(".dice5").css("display", "none");
    $(".dice6").css("display", "none");
    $(".dice1").css("display", "block");
    $(".dice1").css("margin", "auto");
  }

  function dice2() {
    $(".dice1").css("display", "none");
    $(".dice3").css("display", "none");
    $(".dice4").css("display", "none");
    $(".dice5").css("display", "none");
    $(".dice6").css("display", "none");
    $(".dice2").css("display", "block");
    $(".dice2").css("margin", "auto");
  }

  function dice3() {
    $(".dice1").css("display", "none");
    $(".dice2").css("display", "none");
    $(".dice4").css("display", "none");
    $(".dice5").css("display", "none");
    $(".dice6").css("display", "none");
    $(".dice3").css("display", "block");
    $(".dice3").css("margin", "auto");
  }

  function dice4() {
    $(".dice1").css("display", "none");
    $(".dice2").css("display", "none");
    $(".dice3").css("display", "none");
    $(".dice5").css("display", "none");
    $(".dice6").css("display", "none");
    $(".dice4").css("display", "block");
    $(".dice4").css("margin", "auto");
  }

  function dice5() {
    $(".dice1").css("display", "none");
    $(".dice2").css("display", "none");
    $(".dice3").css("display", "none");
    $(".dice4").css("display", "none");
    $(".dice6").css("display", "none");
    $(".dice5").css("display", "block");
    $(".dice5").css("margin", "auto");
  }

  function dice6() {
    $(".dice1").css("display", "none");
    $(".dice2").css("display", "none");
    $(".dice3").css("display", "none");
    $(".dice4").css("display", "none");
    $(".dice5").css("display", "none");
    $(".dice6").css("display", "block");
    $(".dice6").css("margin", "auto");
  }

  $(".roll-dice").click(function () {
    const resultat = lancerDe();
    let result = (currentScore += resultat);
    console.log(resultat);
    if (resultat === 1) {
      dice1();
      result = currentScore -= currentScore;
      switchPlayer();
    } else if (resultat === 2) {
      dice2();
    } else if (resultat === 3) {
      dice3();
    } else if (resultat === 4) {
      dice4();
    } else if (resultat === 5) {
      dice5();
    } else if (resultat === 6) {
      dice6();
    }
    if (actualPlayer === playerOne) {
      $("#actual-p1-score").text(result);
    } else {
      $("#actual-p2-score").text(result);
    }
  });

  $(".hold").click(function () {
    if (actualPlayer === playerOne) {
      $(".global-score-p1").text((globalScore += currentScore));
      $("#actual-p1-score").text((currentScore -= currentScore));
    } else {
      $(".global-score-p2").text((globalScorePlayer2 += currentScore));
      $("#actual-p2-score").text((currentScore -= currentScore));
    }
    winner();
    switchPlayer();
  });

  $(".new-game").click(function () {
    $(".global-score-p1").text((globalScore -= globalScore));
    $("#actual-p1-score").text((currentScore -= currentScore));
    $(".global-score-p2").text((globalScore -= globalScore));
    $("#actual-p2-score").text((currentScore -= currentScore));
    if (actualPlayer === playerTwo) {
      actualPlayer = playerOne;
      $("#actual-p1-score").text((currentScore -= currentScore));
    } else {
      actualPlayer = playerOne;
      $("#actual-p2-score").text((currentScore -= currentScore));
    }
  });
});
