var shoutouts = [
  "You are so easy to ask questions and you make teaching more engaging.",
  "You always make everyone feel included and make sure that every has an equal opportunity to thrive in this environment :)",
  "you are a passionate instructor and make coding fun!",
  "How you create a learning environment that allows us to explore for ourselves.",
  "How you always keep us on track and are super good at keeping track of who's in or out in a game. Without you, we would be all over the place and not organized at all.",
  "how serious you are when we play the games.",
  "Your instructions are very easy to understand and you make any brain break really fun!",
  "how patient and good of a teacher you are. I also love how you deal with all of our weirdness without any protests and you always have a funny story. I also always appreciate how you're the best player in the games we play (it's either that you always win or you've just made it more fun)!",
  "that you are able to explain things really well.",
  "How helpful and patient you are with everybody!",
  "Your dedication, and of course, your sense of humor. Your dedication is inspiring and I can't thank you enough for your time and enthusiasm for teaching us.",
  "How you check in on everyone and make sure we all get the help we need!",
  "how helpful and wonderful a teacher you are. You and Ally really made class so enjoyable and easy to understand the concepts. Without you too, I dont think that I would have learned the concepts as well or fast. Thanks for making class so much more enjoyable:)",
  "Your patience! I don’t think I have ever met someone so willing to help even when we ask you the same question over and over again."
]

for (x of shoutouts) {
  $("#shoutout-container").append("<p>" + x + "</p> <br>");
}
