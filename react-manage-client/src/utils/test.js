// let a=["kccomwcgcs","socgcmcwkc","sgckwcmcoc","coswcmcgkc","cowkccmsgc","cosgmccwkc","sgmkwcccoc","coswmccgkc","kowcccmsgc","kgcomwcccs"]
var numSimilarGroups = function(strs) {
  const len=strs.length;
  let arr=new Array(len).fill(0).map((value,index)=>index);
  console.log(arr);
  let res=1;
  for(let i=0;i<len;i++){
    for(let j=i+1;j<len;j++){
      if(find(strs[i],strs[j])){
        if(arr[j]!=j&&arr[i]==i){
          arr[i]=arr[j];
        }else if(arr[i]!=i&&arr[j]!=j){
          correct(arr,arr[j],arr[i]);
          
        }else{
          arr[j]=arr[i];
        }

        console.log(i,j);
      }
    }
  }
  console.log(arr)
  arr.sort();
  let temp=arr[0];
  for(let i=1;i<len;i++){
    if(arr[i]!=temp){
      res++;
      temp=arr[i];
    }
  }
  console.log(arr)
  return res;
};
var correct=function(arr,val,value){
  console.log('in',arr,val,value);
  for(let i=0;i<arr.length;i++){
    if(arr[i]==val){
      arr[i]=value;
    }
  }
  // arr.forEach((item,index)=>{
  //   if(item==i){arr[index]=value}
  // })
  console.log('out',arr);
}
var find=function(a,b){
  let count=0;
  for(let i=0;i<a.length;i++){
    if(a.charAt(i)!=b.charAt(i)){
      count++;
    }
  }
  // console.log(a,b,count,count<=2)
  if(count<=2)return true;
  return false;
}
// let a=["ajdidocuyh","djdyaohuic","ddjyhuicoa","djdhaoyuic","ddjoiuycha","ddhoiuycja","ajdydocuih","ddjiouycha","ajdydohuic","ddjyouicha"]
let a=["qihcochwmglyiggvsqqfgjjxu","gcgqxiysqfqugmjgwclhjhovi","gjhoggxvcqlcsyifmqgqujwhi","wqoijxciuqlyghcvjhgsqfmgg","qshcoghwmglygqgviiqfjcjxu","jgcxqfqhuyimjglgihvcqsgow","qshcoghwmggylqgviiqfjcjxu","wcoijxqiuqlyghcvjhgsqgmgf","qshcoghwmglyiqgvigqfjcjxu","qgsjggjuiyihlqcxfovchqmwg","wcoijxjiuqlyghcvqhgsqgmgf","sijgumvhqwqioclcggxgyhfjq","lhogcgfqqihjuqsyicxgwmvgj","ijhoggxvcqlcsygfmqgqujwhi","qshcojhwmglyiqgvigqfgcjxu","wcoijxqiuqlyghcvjhgsqfmgg","qshcojhwmglyiggviqqfgcjxu","lhogcgqqfihjuqsyicxgwmvgj","xscjjyfiuglqigmgqwqghcvho","lhggcgfqqihjuqsyicxgwmvoj","lhgocgfqqihjuqsyicxgwmvgj","qihcojhwmglyiggvsqqfgcjxu","ojjycmqshgglwicfqguxvihgq","sijvumghqwqioclcggxgyhfjq","gglhhifwvqgqcoyumcgjjisqx"]
console.log(numSimilarGroups(a));;
