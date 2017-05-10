        Ar = document.querySelectorAll(".timestamp span");
        var patt = new RegExp(":?[0-9]{1,}:?", "g");
        var startNum = 1 - 1; //Edit: value is index 0 so sub 1 from index 1 in youtube
        var endNum = Ar.length - 1; //Edit: value is index 0 so sub 1 from index 1 in youtube
        var totalhrs = 0;
        var totalmin = 0;
        var totalsec = 0;
        for (let i = startNum; i <= endNum; i++){
        let tempMatches = (Ar[i].innerHTML).match(patt);
        if (tempMatches.length === 3){
        totalsec += parseInt(tempMatches[2]);
        totalmin += parseInt(tempMatches[1]);
        totalhrs += parseInt(tempMatches[0]);
        } else if (tempMatches.length === 2){
        totalmin += parseInt(tempMatches[0]);
        totalsec += parseInt(tempMatches[1]);
        } else{
        console.log("Parse Error!!!");
        }

        //Fix overflows:
        totalmin += Math.floor(totalsec / 60);
        totalsec = totalsec % 60;
        totalhrs += Math.floor(totalmin / 60);
        totalmin = totalmin % 60;
        console.log(i + 1 + ": " + "(" + totalhrs + ":" + totalmin + ":" + totalsec + ")");
        }

        //Fix overflows:
        totalmin += Math.floor(totalsec / 60);
        totalsec = totalsec % 60;
        totalhrs += Math.floor(totalmin / 60);
        totalmin = totalmin % 60;
        console.log("Total Time: " + totalhrs + ":" + totalmin + ":" + totalsec);
