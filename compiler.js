/**
Compilers, Project 1
Morgen Warner

February 28th, 2013

Script: Compiler

*****
*/

function compile() {
  //Reset
  reset();

  out("Begin compilation!");

  //Run lexer
  lex();

  // Proceed to parser if no errors
  if(errorCount  === 0) {
    parse();
  }

  if(errorCount > 0) {
    out("\nCompilation unsuccessful...");
  }
  else {
    out("\nCompilation worked!");
  }

}
