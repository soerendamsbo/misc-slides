Reveal.configure({
     keyboard: {
         74: () => { Reveal.slide(prompt("Jump to slide ##")-1) }
     }
 });
