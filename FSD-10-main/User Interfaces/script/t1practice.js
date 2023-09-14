function excuseMeDoctor(conversation = "") {

  // Define question/yell 
  let askedQuestion;
  let isYelling;


  // Check for "?""
  if (conversation[conversation.length - 1] == "?") {
    askedQuestion = true;
  }

  // Check for all caps, with at least one letter - so "." doesn't cause yell = true)
  if (conversation === conversation.toUpperCase() &&  // is string the same in uppercase
			conversation.length > 0 && //string not empty
			/[a-zA-Z]/.test(conversation)) { // *bonus to ensure it has at least 1 letter
    isYelling = true;
  }

  if (askedQuestion == true) {
    if (isYelling == true)
      return "Do YOU want to do it instead?";
    else 
			return "Indubitably";
  } else if (isYelling == true) {
    return "Whoa!! Where is the fire?";
  } else if (conversation == "") {
    return "Pff, I do not need you either";
  } else return "I understand.  But you are still wrong!";

}
