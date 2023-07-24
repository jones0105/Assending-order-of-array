var arr=parseInt(prompt("Enthr The length"));
 var a=[];
 var result=[];
 var temp;
 for (let i=0;i<arr;i++){
	  a[i]=parseInt(prompt("Enthr The value" + (i+1)));
 }
  for(let i=0;i<arr;i++){
  for(let j=i+1;j<arr;j++){
      if (a[i]>a[j])
     {
     temp =a[i];
     a[i]=a[j];
     a[j]=temp;
     }
  }
 result.push(a[i]);
 }
document.write(result)