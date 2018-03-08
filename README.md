# UdemyCodingInterview
A collection of notes and coding exercises based on a Udemy Coding Interview course

### Left off at:
https://www.udemy.com/coding-interview-bootcamp-algorithms-and-data-structure/learn/v4/t/lecture/8534260?start=0

NOTE: will need to install jest (locally)

## Setup
* course exercises source code setup
  - https://github.com/StephenGrider/AlgoCasts

## Project Directory Structure
* `completed_exercises` - contains solutions to the exercises (by course author)
* `exercises` - contains the being to do, or completed by me
* `exercises_orig` - contains a copy of the  original exercises, no solution, for ease of reference

## Using debugger;
* The tutorial provided helpful steps on how to use the debugger / node inspect
* add a `debugger;` statement where you would like a breakpoint
* then in the code, you need to call the function that contains debugger statement, so that it will be run (invoke it)
* from the command line, `node inspect index.js`
* this will run load the file, and break at line 1
* press 'c' at the 'debug>' prompt, to continue to the first breakpoint
* at this point, you can type 'repl' at the prompt, to go in to repl mode
  - where you can inspect variable, execute code etc.
* type 'ctrl-c' to exit repl mode
* back at the debugger propmt, type 'c' to continue to next breakpoint or program end
* '.exit' or 'ctrl-c' will exit you from the debugger
* pretty cool.

## Exercise Notes
### Runtime Complexity
* It is not uncommon, that after you code an exercise in an interview, the interviewer will ask you what the 'runtime complexity' of your solution is
  - Runtime Complexity, describes the performance of an algorithm
  - e.g. for each additional input to process, requires one additional step to execute
    + N, or linear runtime [revStr, using loop is a good example]
  - e.g. for each input, have to do input squared amount of steps
    + N^2, or quadratic runtime [steps exercise is a good example]
* Big O ~ Runtime Complexity ~ Efficiency
* NOTE: see notes from GA WDI on Big O notation
  - O(n) is Linear
  - O(1) is constant
  - O(n^2) is Quadratic
* Common Runtime Complexities
  - __Constant Time [1]__ - no matter how many elements we're working with, the algorithm/operation will always take the same amount of time
  - __Logarithmic Time [log(n)]__ - doubling the number of elements you are iterating over doesn't double the amount of work
    + efficient. increasing by x, only increases steps by a fraction of x
    + always assume that searching operations are log(n)
  - __Linear Time [n]__ - value of input roughly matches the number or steps (or amount of time)
    + e.g. iterating through a collection, simple loop
  - __Quasilinear Time [n * log(n)]__ - doubling the number of elements you are iterating over doesn't double the amount of work
    + each increase of input, increases the steps by 1 plus a little bit more
    + always assume that sorting operations are n*log(n)
  - __Quadratic Time [n^2]__ - every element in a collection has to be compared to every other element; as in put increases, steps square
    + handshake problem
  - __Exponential Time [2^n]__ - each input increase, processing power required doubles
