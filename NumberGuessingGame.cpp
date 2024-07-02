#include <iostream>

#include<bits/stdc++.h>

#include <cstdlib>

#include <ctime>

using namespace std;

int main() {
    
    srand(static_cast<unsigned int>(time(0)));


    // FOllowing line is for generating a Random Number between 1 to 100 

    int randomNumber = rand() % 100 + 1;

    int userGuess = 0;

    cout << " I have generated a random number between 1 to 100 \n";

    cout << "I challenge you , can you guess , what number it is ?\n";

    // The following loop  will run untill the user guesses the correct number 


    while (userGuess != randomNumber) {

        cout << "Enter your guess: ";
        
        cin >> userGuess;

        if (userGuess < randomNumber) cout << "Too low! Try again.\n";
        
        else if (userGuess > randomNumber)  cout << "Too high! Try again.\n";
           
         else  cout << "Congratulations! You guessed the correct number.\n";

    }

    return 0;
}