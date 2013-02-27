/**
Compilers, Project 1
Morgen Warner

February 2013

Script: Lexer

*****
*/

function lex() {
  out("\nBeginning lexical analysis");

  
  for(index = 0; index < sourceCode.length; index++) {

    //Output
    out(tab + "Lexing " + thisCharName());

    //type: digit
    if(!isNaN(parseInt(currChar(), 10))) {

      // add token to array
      addToken({
        type: T_DIGIT,
        value: currChar()
      });

    //type: char
    } else if(currChar().match(/[a-z]/)) {

      // add token to array
      addToken({
        type: T_CHAR,
        value: currChar()
      });

    //type: Type int
    // 
    } else if(thisChar() === "i" && nextCharExists() && !nextChar().match(/\s|\)|\}/) {

      checkKeyword("int");

    //type: Type char

    } else if(thisChar() === "c" && nextCharExists() && !nextChar().match(/\s|\)|\}/) {

      checkKeyword("char");

    //type: id
    } else if(thisChar().match(/[a-z]/)) {

    // type: operator
    } else if(thisChar() === "+" || currChar() === "-") {

      // add token to array
      addToken({
        type: T_OP,
        value: thisChar()
      });

    // type: eof
    } else if(currChar() === "$") {

      // add token to array
      addToken({
        type: T_EOF
      });

    // type: print
    } else if(thisChar() === "P") {

      // add token to array
      addToken({
        type: T_PRINT
      });

    // type: equals
    } else if(thisChar() === "=") {

      // add token to array
      addToken({
        type: T_EQUAL
      });

    // type: braces
    } else if(thisChar().match(/[\{\}\(\)\]/)) {

      // add token to array
      addToken({
        type: T_BRACE,
        value: thisChar()
      });

    // type: quotation mark
    } else if(thisChar() === '"') {

      //switch in and out of CharExpr
      switchCharExpr();

      // add token to array
      addToken({
        type: T_QUOTE
      });

    // type: newline
    } else if(thisChar() === "\n") {

      //increase line count
      lineCount++

      //initialize character count as current character count
      initCharCount = index;

    // Unless whitespace, this character is not in lex
    } else if(!thisChar().match(/\s/)) {

      outError(tab + 'ERROR: could not lex "' + currChar() + '" at ' + errorLoaction());
      }
}

