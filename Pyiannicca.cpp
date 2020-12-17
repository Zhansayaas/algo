#include <iostream>
#include <queue>
using namespace std;

int main(){
    int cnt=0;
    int x;
    queue <int>q1,q2;
    for(int i=0;i<5;i++){
        cin >>x;
        q1.push(x);
    }
    for(int i=0;i<5;i++){
        cin >>x;
        q2.push(x);
    }
    while (!q1.empty() && !q2.empty()){
        if (q1.front()==9 &&q2.front()==0){
            q2.push(q1.front());
            q2.push(q2.front());
        }
        else if (q1.front()==0 &&q2.front()==9){
            q1.push(q1.front());
            q1.push(q2.front());
        }
        else if(q1.front()>q2.front()){
            q1.push(q1.front());
            q1.push(q2.front());
        }
        else if(q1.front()<q2.front()){
            q2.push(q1.front());
            q2.push(q2.front());
        }cnt++;
        q1.pop();
        q2.pop();
        
    }
    if(q1.empty()&& !q2.empty()){
        cout<<"second"<<" "<<cnt;
    }else cout<<"first"<<" "<< cnt;
    
}