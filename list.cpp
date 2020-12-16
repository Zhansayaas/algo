#include <iostream>
#include <queue>

using namespace std;

int main(){
    int n;
    string s;
    queue <pair<int,string> > q,q1,q2;
    while(cin>> n){
        cin>>s;
        if(n==9){
            q.push(make_pair(n,s));
        }else if(n==10)
            q1.push(make_pair(n,s));
        else if (n==11)
        {
            q2.push(make_pair(n,s));
        }
        
    }
    while (!q.empty())
    {
        cout<<q.front().first<<" "<<q.front().second<<endl;
        q.pop();
    }
    while (!q1.empty())
    {
        cout<<q1.front().first<<" "<<q1.front().second<<endl;
        q1.pop();
    }
    while (!q2.empty())
    {
        cout<<q2.front().first<<" "<<q2.front().second<<endl;
        q2.pop();
    }
    
    return 0;
}