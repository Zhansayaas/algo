#include <iostream>
#include <stack>

using namespace std;

bool ok(string s){stack<char>st;
    for(int i=0;i<s.size();i++){
        if(s[i]=='('||s[i]=='[' || s[i]=='{'){
            st.push(s[i]);
        }else{
            if(st.empty()) return false;
            if(st.top()!='(' && s[i]==')'){
               return false;
            }
            if(st.top()!='[' && s[i]==']') return false;
            if(st.top()!='{' && s[i]=='}') return false;
            st.pop();
        }
    }return (st.empty());
}
int main(){
    string s;
    cin>>s;    
    if(ok(s)) cout<<"yes";
    else cout<<"no";
    return 0;
}