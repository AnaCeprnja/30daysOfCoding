#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

// Day 0: Hello, World.
int main() {
   char inputString[105]; // declare a variable to hold our input
   scanf ("%[^\n]%*c", inputString); // get a line of input from stdin and save it to our variable
  
   // Your first line of output goes here
   printf("Hello, World.\n");

   printf("%s\n",inputString);

   return 0;
}
