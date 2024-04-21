/* Q:1. Declare an empty array using JS literal notation to store
student names in future. 

              ------Ans-------
   var studentNames = [];
   
 Q:2 Declare an empty array using JS object notation to store
student names in future.
   
              -------Ans-------
              
   var studentNames = [];
   
 Q:3. Declare and initialize a strings array.
 
              -------Ans-------
    
   var studentNames = ["Hassan","Hussain"; "Atique"];
   
 Q:4. Declare and initialize a numbers array.
 
              -------Ans-------
              
   var num = [10,6,5];
   
  Q:5. Declare and initialize a boolean array.
  
   -------Ans-------
              
     var BooleanArray = [true,false,true];
   
   Q:6. Declare and initialize a mixed array.
  
              -------Ans-------

     var mixedArray = [10,"Hassan",true,false];

   
              -------Ans-------
 Q:7. Declare and Initialize an array and store available
   education qualifications in Pakistan (e.g. SSC, HSC, BCS,
   BS, BCOM, MS, M. Phil., PhD). Show the listed
   qualifications in your browser like:

              -------Ans-------

      var pkQualification = ["SSC","HSC","Bcs","BS","BCOM","MS","M.Phil","Phd"];

      document.write("<h1>Qualificatons</h1>")
      document.write("<h3>1)" + pkQualification[0] + "<br>" + "2)" + pkQualification[1] + "<br>" + "3)" + pkQualification[2] + "<br>" + "4)" + pkQualification[3] + "<br>" + "5)" + pkQualification[4] + "<br>" + "6)" + pkQualification[5] + "<br>" + "7)" + pkQualification[6] + "<br>"+ "8)" + pkQualification[7] + "<br></h3>")


   Q:8. Write a program to store 3 student names in an array.Take
   another array to store score of these three students.
   Assume that total marks are 500 for each student, display
   the scores & percentages of students like:

              -------Ans-------

   var studentNames =["HASSAN","ATIQ","HUSSAIN"]           
   var studentscores =[320,230,430]
   var totalMarks =[500]
   
   document.write("Score of Hassan is" +" "+ studentscores[0] + ".Percentage:" + ((studentscores[0] / totalMarks * 100).toFixed(2) + "%")+ "<br>")  
   document.write("Score of Atiq is" +" "+ studentscores[1] + ".Percentage:" + ((studentscores[1] / totalMarks * 100).toFixed(2) + "%") + "<br>")  
   document.write("Score of Hussain is" +" "+ studentscores[2] + ".Percentage:" + ((studentscores[2] / totalMarks * 100).toFixed(2) + "%"))  


    Q:9. Initialize an array with color names. Display the array
      elements in your browser.
      a. Ask the user what color he/she wants to add to the
      beginning & add that color to the beginning of the array.
      Display the updated array in your browser.
      b. Ask the user what color he/she wants to add to the end
      & add that color to the end of the array. Display the
      updated array in your browser.
      c. Add two more color to the beginning of the array.
      Display the updated array in your browser.
      d. Delete the first color in the array. Display the updated
      array in your browser.
      e. Delete the last color in the array. Display the updated
      array in your browser.
      f. Ask the user at which index he/she wants to add a color
      & color name. Then add the color to desired
      position/index. . Display the updated array in your
      browser.
      g. Ask the user at which index he/she wants to delete
      color(s) & how many colors he/she wants to delete. Then
      remove the same number of color(s) from user-defined
      position/index. . Display the updated array in your
      browser.

       
      var Colors = ["red","blue","green","yellow","black"];
        document.write(Colors + "<br>");

      var beginningcolor = prompt("Enter the color to add to the begining:");
      Colors.unshift("beginningcolor");
        document.write("After adding color to the begining:" + Colors + "<br>" );
    




      

Q:10.Write a program to store student scores in an array &
sort the array in ascending order using Array’s sort
method.
                    -----Ans-----

     var studentScores = [320,230,480,120]
     document.write("Scores of students:" + studentScores +"<br>" );

     studentScores.sort();
     document.write("Orderedscores of students:" + studentScores);

Q:11.Write a program to initialize an array with city names.
Copy 3 array elements from cities array to selectedCities
array.

                     -------Ans--------
  
  var Cities = ["karachi","lahore","islamabad","peshawar","quetta"];
  document.write("Cities list:" + Cities +"<br>");
  Cities.slice(2);
  document.write("Selected cities list:" + Cities)

  Q:12. Write a program to create a single string from the below mentioned array:
  var arr = [“This ”, “ is ”, “ my ”, “ cat”];
  (Use array’s join method).

       -----Ans-----

var arr = ["This ", " is ", " my ", " cat"];
document.write("<h1>Array:</h1>")
document.write(arr);
var str = arr.join("");
document.write("<h1>String:</h1>")
document.write(str);

13. Create a new array. Store values one by one in such a way
that you can access the values in the order in which they 
were stored. (FIFO-First In First Out)

                        ------Ans------

var newArray = ["keyboard", "mouse", "printer", "monitor", "speaker"]
 
document.write("Out:" + "<br>" + newArray[0] + "<br>");
document.write("Out:" + "<br>" + newArray[1] + "<br>");
document.write("Out:" + "<br>" + newArray[2] + "<br>");
document.write("Out:" + "<br>" + newArray[3] + "<br>");
document.write("Out:" + "<br>" + newArray[4] + "<br>");


14. Create a new array. Store values one by one in such a way
that you can access the values in reverse order. (Last In-
First Out)

var array = ["keyboard", "mouse", "printer", "monitor", "speaker"]
 var newArray = array.reverse("");
document.write("Out:" + "<br>" + newArray[0] + "<br>");
document.write("Out:" + "<br>" + newArray[1] + "<br>");
document.write("Out:" + "<br>" + newArray[2] + "<br>");
document.write("Out:" + "<br>" + newArray[3] + "<br>");
document.write("Out:" + "<br>" + newArray[4] + "<br>");*/



              
  
