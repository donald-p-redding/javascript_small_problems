//Write  a function that takes a word and some bulk text. Return an integer representing
//how often the word occurs in the text.

//Some of the words in the text may appear in a different case and may be
//along with punctuation but they should still count towards the word count.

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

function searchWord(word, text) {
  if (arguments.length < 2) {throw TypeError('Cannot find matches');};
  let regex = new RegExp(`\\b${word}\\b`, 'ig');
  let matches = text.match(regex);
  return matches ? matches.length : 0;
}

searchWord('sed', text);      // 3
searchWord('qui', text);      // should return 4, NOT 13