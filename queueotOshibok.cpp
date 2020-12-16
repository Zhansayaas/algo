#include <iostream>
#include <queue>
using namespace std;

int main(){
    queue<int>q;
    string s;
    int n,m;
    bool t = true;
    while (t)
    {
        cin>>s;
        if(s=="exit"){
            cout<<"bye";
            t=false;
        }
        if(s=="push"){
            cin>>n;
            q.push(n);
            cout<<"ok";
        }
        else if(s=="pop"){
            if(!q.empty()){
                cout<<q.front();
                q.pop();
            }else{
                cout<<"error";
            }
        }
        else if(s=="front"){
            if(!q.empty()){
                cout<<q.front();
            }else cout<<"error";
        }else if (s=="clear")
        {
            while (!q.empty())
            {
                q.pop();
            }cout<<"ok";
            
        }
        else if (s == "size"){
            cout << q.size();
        }
        cout<<endl;
    }
    
    return 0;
}