// Calculator program 

#include <iostream>

using namespace std;

int main(int argc, char const *argv[])
{
    int a, b;
    
    cin >> a ;
    
    char ch;
    cin>>ch;

    cin>>b;

    switch (ch)
    {

    case '+':
        cout <<"="<< a + b;
        break;
    case '-':
        cout <<"="<< a - b;
        break;
    case '*':
        cout <<"="<< a * b;
        break;
    case '/':
        cout <<"="<< a / b;
        break;
    }

    return 0;
}
