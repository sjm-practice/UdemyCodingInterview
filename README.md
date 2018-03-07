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