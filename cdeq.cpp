#include <iostream>
#include <deque>

using namespace std;


int main(){
    deque <int > d;
    
    int n,m;
    string s;
    bool t = true;
    while (t)
    {
        cin>> s;
        if(s=="exit"){
            t=false;
            cout<<"bye";
        }
        if (s=="push_front")
        {
            cin>>n;
            d.push_front;
            cout<<"ok";
        }else if(s=="push_back"){
            cin>> n;
            d.push_back(n);
            cout<<"ok";
        }
        else if(s=="pop_back"){
            if(!d.empty()){
                cout<<d.back();
                d.pop_back();
            }else{
                cout<<"error";
            }
        }else if(s=="pop_front"){
            if(!d.empty()){
                cout<<d.front();
                d.pop_front();
            }else{
                cout<<"error";
            }
        }
        else if (s=="back")
        {
            if(!d.empty()){
                cout<<d.back();
            }
            else{
                cout<<"error";
            }
        }
        else if (s=="front")
        {
            if(!d.empty()){
                cout<<d.front();
            }else cout<<"error";
        }
        else if(s=="size")
        {
            cout<<d.size();
        }
        else if(s=="clear"){
            while(!d.empty()){
                d.pop_back();
            } 
            cout<<"ok";
        }cout<<endl;
        
        
    }
    
}