var array = ["sanic", "enchiladas", "fisheroos", "dataman"];

document.write("Have the user write in a prompt their favorite random word. Add that word to the array<br>");
  random = prompt("Please enter your favorite random word!");
  array.push(random);
     for(a=0;a<array.length;a++)
     {
        document.write(array[a]+"<br>");
     }


document.write("<br>Write the new list of items with the added item<br>");
   for(a=0;a<array.length;a++)
   {
      document.write(array[a]+"<br>");
   }


document.write("<br>Write the array to the HTML in the opposite order it is listed<br>");
    for(a=array.length-1;a>=0;a--)
    {
      document.write(array[a]+"<br>");
    }


document.write("<br>Write the second and fourth array items <br>");
    document.write("2nd: "+array[1]+"<br>");
    document.write("4th: "+array[3]+"<br>");


document.write("<br>Write only the items in the array that have the letter 'e'<br>");
    for(a=0;a<array.length;a++)
    {
      if(array[a].includes("e"))
          { 
          document.write(array[a]+"<br>");
          }
    }


document.write("<br>Write the array in alphabetical order<br>");
  array.sort();
    for(i=0;i<array.length;i++)
    {
       document.write(array[i]+"<br>");
    }