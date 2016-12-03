#include <stdio.h>

#define LOOPTIME 1000

int main(){
	int i;
	for(i=1;i<LOOPTIME+1;i++){
		printf("=countif(F%d:F%d,F%d)\n",i,LOOPTIME,i);
  }
	return 0;
}
