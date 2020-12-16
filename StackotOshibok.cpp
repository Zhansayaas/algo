#include<iostream>
#include<stack>
using namespace std;
int main()
{
	int n,m,k;
	string s;
	stack <int> stk;
	bool t=true;
	
	while(t)
	{
		cin>>s;
		if(s=="push")
		{
			cin>>n;
			stk.push(n);
			cout<<"ok";
		}
		else if(s=="size")
		{
			cout<<stk.size();
		}
		else if(s=="clear")
		{
			while(stk.size()!=0)
			{
				stk.pop();
			}
			cout<<"ok";
		}
		else if(s=="back")
		{
            if(stk.size() !=0) cout<<stk.top();
            else
            {
                cout<<"error"<<endl;
            }
			
		}
		else if(s=="pop")
		{
            if(stk.size()!=0){
                cout<<stk.top();
			    stk.pop();
            }else
            {
                cout<<"error"<<endl;
            }
			
		}
		else if(s=="exit")
		{
			t=false;
			cout<<"bye";
		}
		cout<<endl;
	}
}
