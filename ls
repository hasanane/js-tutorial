[1mdiff --git a/main.js b/main.js[m
[1mindex 87211cc..6847e32 100644[m
[1m--- a/main.js[m
[1m+++ b/main.js[m
[36m@@ -44,11 +44,35 @@[m [mfunction addthree(a,b,c){[m
 // description about git command [m
 [m
 // there is a problem in working with coding team and that is that when for example two people wants to work on same file at the same time they cant save the file at the same time and if one of them save it there was a different between the saved file and second persons file and if the second person save the file the first persons work will be destroyed [m
[31m-// for solving this problem we can make a repository and [m
[32m+[m[32m// for solving this problem we can make a repository and share it with team members and work with it[m
[32m+[m[32m// with repository we can save all the code versions that team members make[m
[32m+[m[32m// all the code changes will bw saved in git directory[m
[32m+[m[32m// we can control the repository with (git) command[m[41m [m
[32m+[m[32m// when we want to get a clone of repository that somone else made we should use this command (git clone <name of repository>)[m
[32m+[m[32m// when we want to update the repository to get the newest version(changed codes) that other members  uploaded on the repository we should use this command (git pull)[m
[32m+[m[32m// now that we have the newest version we can start to change the code and when we finished changing we should use the (git add <name of file that we want to save(we can use dot to save all the files)>) command to save the code in the (stage)[m[41m [m
[32m+[m[32m// stage is a memory which is in our computer and we can save our codes in it[m
[32m+[m[32m// if we wants to see the difrents between our code and stage we can use this command (git diff)[m
[32m+[m[32m// now when we finished coding and saving the code in stage, we must make a version of our code with this command (git commit -m "description about the version")[m
[32m+[m[32m// when we make a version, we cant change the code anymore and if we wants to change the code we should make a new version of the code[m
[32m+[m[32m// now that we are done with making the last version, we should upload it in the main repository with this command (git push)[m
 [m
 // description about functions[m
 [m
[31m-[m
[32m+[m[32m// some times we wants to write one code many times in our file and if we write it many times, our code will be large[m
[32m+[m[32m// we can use functions to minify the code, we can write a function and call it when ever we want it[m[41m [m
[32m+[m[32m// for write a function we should use the (function) command[m
[32m+[m[32m// the general construction of the functions are as follows[m
[32m+[m[32mfunction NameOfFunction(firstVariable,secondVariable,...and){[m
[32m+[m[32m//  here we write what will hapened to the variables[m
[32m+[m[32m}[m
[32m+[m[32m// if we want our function return something we should use (return) command beside caculations[m
[32m+[m[32m// example[m
[32m+[m[32mfunction example(a,b){[m
[32m+[m[32m    return a+b[m
[32m+[m[32m}[m
[32m+[m[32m// this function will return answer of a+b to our code[m
[32m+[m[32m// tip: the function will not be actived when we write it, the functions only when we call them will be actived[m
 [m
 // factorial[m
 [m
