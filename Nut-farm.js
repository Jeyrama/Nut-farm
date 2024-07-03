/*
Once a year, we harvest nuts. 
We just shake the trees and the nuts fall out!

As they fall down the nuts might hit branches:
  Sometimes they bounce left.
  Sometimes they bounce right.
  Sometimes they get stuck in the tree and don't fall out at all.

Legend:
  o = a nut
  \ = branch. A nut hitting this branch bounces right.
  / = branch. A nut hitting this branch bounces left.
  _ = branch. A nut hitting this branch gets stuck in the tree.
  . = leaves, which have no effect on falling nuts.
  | = tree trunk, which has no effect on falling nuts.
    = empty space, which has no effect on falling nuts.

Task:
  Shake the tree and count where the nuts land.
  Output - An array (same width as the tree) which indicates how many nuts fell at each position.

Notes:
  The nuts are always found at the top of the tree.
  Nuts do not affect the falling patterns of other nuts.
  There are always enough spaces for nuts to fall between branches.
  There are no branches at the extreme left/right edges of the tree matrix,
  so it is not possible for a nut to fall "out of bounds".

Example:
  .o.oooooo.o.o.oooooo.
  ..\.\.../..\.../..\..
  ..../..\..../....../.
  .....\...././.\..\.\.
  ...../../././...\....
  .../.../..\./.\..\...
  ./.......\../.\../...
  ....\..../....././...
  .../.\._.\../._../.\.
  .\...././....\../.\..
  ./......././.../../..
                  
  101005000020000000040
*/


// Solution

let shakeTree = function(tree)
{  
  let harvesting = Array(tree[0].length).fill(0);
  tree.reduce(function(p,v,x){tree[x] = [...tree[x]]},0)
  let x = 0, z = 0, nut = tree[0][x];
  while(nut)
  {
    nut = tree[0][x];
    if(nut == "o")
    {
      let pos = x, y = 1;
     	while(tree[y]) 
      {
        let fall = tree[y][pos]
        if(fall == "/"){pos--}
        if(fall == "\\"){pos++}
        if(fall == "_"){break}
        y++;
     	}
      (fall != "_") ? harvesting[pos]++ : null;
    }
    x++;
  }
  return harvesting;
}