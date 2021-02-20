class Quiz{
 constructor(){

 }

async start(){

 if(gameState === 0){
   contestant = new Contestant();
   var contestantCountRef = await database.ref('contestantCount').once("value");
   if(contestantCountRef.exists()){
       contestantCount = contestantCountRef.val();
       contestant.getCount();
   }
   question = new Question();
   question.display();
 }
}

display(){
 this.title.html("MyQuiz Game");
 this.title.position(350, 0);
 
 this.question.html("Question : What starts and ends with the letter 'E', but has only one letter?");
 this.question.position(150, 80);
 this.option1.html("1 : Everyone");
 this.option1.position(150, 100);
 this.option2.html("2 : Envelope");
 this.option2.position(150, 120);

 this.input1.postion(150, 230);

 }

}