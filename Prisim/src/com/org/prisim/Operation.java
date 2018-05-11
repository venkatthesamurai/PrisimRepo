package com.org.prisim;

public class Operation {
	public int add(int a, int b){
		
		int c=a+b;
		return c;
	}
	

	public static void main(String[] args) {
		
		Operation O=new Operation();
		int result=O.add(4, 5);
		System.out.println(+result);
		
	}

}
