/*
 * TP 1 Section Exercise - hit a Bug
 * Handles hitting bugs.
 */

"use strict";
let count = 0;
(function() {

  window.addEventListener("load", init);

  /**
   * Sets up event listeners for the start button and the bugs.
   */
  function init() {
    let bugs = qsa("#bug-container img");
    for(let i = 0; i < bugs.length; i++) {
      bugs[i].addEventListener("click", () => hitBug(bugs, i));
    }
  }

  /**
   * TODO
   * whacks the clicked bug and increments the score. The bug cannot be whacked again afterwards.
   */
  function hitBug(bugs, i) {
    // your code goes here
    if (!bugs[i].classList.contains('hit')) {
      const score = document.getElementById('score')
      bugs[i].src = 'bug-dead.png'
      bugs[i].classList.add('hit')
      count++;
      score.innerText = count

    }
    if (count === 24) {
      const gameText = document.querySelector('#game p')
      gameText.innerText = 'all bugs have been hit'
    }
  }

/* --- TP1 HELPER FUNCTIONS --- */

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} name - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(name) {
    return document.getElementById(name);
  }

  /**
   * Returns first element matching selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} - DOM object associated selector.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Returns an array of elements matching the given query.
   * @param {string} query - CSS query selector.
   * @returns {array} - Array of DOM objects matching the given query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }

})();
