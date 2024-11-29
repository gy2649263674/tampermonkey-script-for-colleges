// ==UserScript==
// @name        New script 210.30.204.138
// @namespace   Violentmonkey Scripts
// @match http://*/*
// @match https://*/*
// @grant       none
// @version     1.0
// @author      -
// @description 2024/11/26 22:00:42

// ==/UserScript==
// @ http: //210.30.204.138/school/proj/evaluatevl-0/module/task/org/*
(function() {
    // alert("dfa");
    'use strict';
    let runButton = document.createElement("button", {id: "run", innerText: "run"});
    document.body.appendChild(runButton);
    runButton.addEventListener("click", run);
    runButton.setAttribute("style", "position: fixed; top: 0px; left:0px ; z-index: 9999;width:100px;height:50px;backgrounColor:red;");
    runButton.textContent = "run";

})();

function run()
{
    console.log("Tampermonkey running");
    const mainTbale = document.querySelector("#evlTable");
    let trList = document.querySelectorAll("#evlTable>tbody tr");
    console.log(trList);
    let lastChoice = null;
    trList.forEach((tr)=>{
        // console.log(tr);
        let tdList = tr.querySelectorAll("td");
        // console.log(tdList);
        for(let i = 0;i<tdList?.length;i++){
            // console.log(tdList[i]);
            if(tdList[i].querySelector("input")){
                lastChoice = tr;
                tdList[i].querySelector("input").checked = true;
                console.log("checked");
                break;
            }
        }
        });
    let tdList = lastChoice.querySelectorAll("td");
    let has = 0;
    console.log(lastChoice);
    console.log(tdList);
    for(let i = 0;i<tdList.length;i++){
        console.log("enter")
        if(tdList[i].querySelector("input")){
            if(has == 1)
            {
                tdList[i].querySelector("input").checked = true;
                console.log("rechecked");
                break;
            }
            has++;
        }
    }
setTimeout(document.getElementById("btn-saveResult").click(),1000);

    //     while(!document.querySelector(".confirm"))
    //     {
    //         console.log("waiting");
    //     }
    //     document.querySelector(".confirm").click();

    // setTimeout(1000);
    // document.getElementById("btn-goBack").click();
    return;
};
    
    
