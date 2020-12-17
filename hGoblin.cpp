#include <iostream>
#include <deque>

using namespace std;


int main(){
    int n,m;
    deque<int>d1,d2;
    cin>>n;
    for(int i=0;i<n;i++){
        string s;
        cin>>s;
        if(s=="+"){
            cin>>m;
            d1.push_back(m);
        }
        if(s=="-"){
            cout<<d2.front()<<endl;
            d2.pop_front();
        }
        if(s=="*"){
            cin>>m;
            d1.push_front(m);
        }
        if(d2.size() < d1.size()){
            d2.push_back(d1.front());
            d1.pop_front();
        }
    }
}