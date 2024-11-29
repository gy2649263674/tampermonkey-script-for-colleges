// ==UserScript==
// @name        evaluate mooc
// @namespace   Violentmonkey Scripts
// @match       https://www.icourse163.org/*
// @grant       none
// @version     1.0
// @author      -
// @description 2024/11/29 18:07:45
// ==/UserScript==
// 点击run按钮，自动评价mooc课程
(function run() {
    'use strict';
    console.log("run");
    const runBtn = document.createElement("button");
    runBtn.innerText = "run";
    runBtn.style.position = "fixed";
    runBtn.setAttribute("style", "position: fixed; top: 0px; left:0px ; z-index: 9999;width:100px;height:50px;backgrounColor:red;");
    // runBtn.setAttribute("style""width:100px;height:50px;background-color:red;left:0;top:0");
    document.body.appendChild(runBtn);
    runBtn.addEventListener("click", doEvaluate);
    runBtn.click();
})();
//*[@id="courseLearn-inner-box"]/div/div[3]/div/div[3]/div/div[1]/div[2]/div[4]/div/div/div[2]/div[1]/div/div[4]/div[2]/div/label[1]
//*[@id="auto-id-1732875059387"]
//*[@id="auto-id-1732875059387"]
/* <input id="j-select-2168517065264630-1732875059378" type="radio"
name="j-select-216851706526463-1732875059378" class="j-select" data-jid="216851706526463" value="0" checked="true"></input> */
/* <textarea name="inputtxt" class="j-textarea inputtxt" id="auto-id-1732875059387" style="width: 665px; height: 84px;"></textarea> */
function doEvaluate() {
    doComment();
    let detailList = document.querySelectorAll(".detail");
    let ratioList = [];
    detailList.forEach(function (div) {
        ratioList.push([...div.querySelectorAll("input.j-select")].at(-1));
    });
    // console.log(ratioList);
    ratioList.forEach(function (ratio) {
        if (ratio) {
            // console.log(ratio);
            ratio?.setAttribute("checked", true);
        }
    });
    submit();
}

function doComment() {
    commentList = document.querySelectorAll("textarea.j-textarea.inputtxt");
    // console.log(commentList);
    commentList.forEach(function (comment) {
        if (comment) {
            comment.value = "hello world";
        }
    });
}

function submit() {
    let submibBtn = document.querySelector(".u-btn.u-btn-default.f-fl.j-submitbtn");
    if (submibBtn) {
        submibBtn.click();
    }
    else{
        console.log("no submit button");

    }
}