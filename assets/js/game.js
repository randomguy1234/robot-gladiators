var playerName= window.prompt("What is your robot's name?");
var playerHealth= 100;
var playerAttack= 10;
var playerMoney= 10;

//show multiple variables at the samae time
console.log(playerName, playerHealth, playerAttack);

var enemyNames= ["Roberto", "Amy Android", "Robo Tumble"];
var enemyHealth= 50;
var enemyAttack= 12;

//Alert players that they are starting the round
window.alert("Welcome to Robot Gladiators!");

var fight= function(enemyName){
    

    while (enemyHealth > 0)
    {
        var promptFight= window.prompt("Would you like to FIGHT or SKIP this battle?"
        +" Enter 'FIGHT' or 'SKIP' to choose.");
    
        //if player chooses to fight, then fight 
        if(promptFight === "fight" || promptFight === "FIGHT")
        {
        
            /*subtract the value of 'playerAttack' from the value of 'enemyHealth' and 
            use that result to update the value in the 'enemyHealth'variable */
            enemyHealth= enemyHealth - playerAttack;

            //log a resulting message to the console so we know that it worked
            console.log(playerName+" attacked "+enemyName+". "+enemyName+" now has "+enemyHealth
            +" health remaining.");

            //check enemy's health
            if (enemyHealth <= 0)
                window.alert(enemyName+" has died!");
            else
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            
            /*subtract the value of 'enemyAttack' from the value of 'playerHealth' and 
            use that result to update the value in the 'playerHealth' v ariable*/
            playerHealth= playerHealth- enemyAttack;

            //log a resulting message to the console so we know that it worked
            console.log(enemyName+" attacked "+playerName+" . "+playerName+" now has "
            +playerHealth+" health remaining.");
            

            //check player's health
            if (playerHealth <= 0)
                window.alert(playerName+" has died!");
            else
                window.alert(playerName+" still has "+playerHealth+" health left.");
        }    
        
        else if (promptFight === "skip" || promptFight === "SKIP")
        {
            //confirm player wants to quit
            var confirmSkip= window.confirm("Are you sure you'd like to quit?");

            //if yes(true), leave fight
            if(confirmSkip)
            {
                window.alert(playerName+" has decided to skip this fight. Goodbye!");
                //subtract money from playerMoney for skipping
                playerMoney= playerMoney -2;
            } 
        
            //if no(false), ask question again by running fight again
            else
            {
                fight(enemyName);
            }
        }
    
        else
        {
            window.alert("You need to choose a valid option. Try again!");
        }
    }
};

//fight();
for(var i= 0; i < enemyNames.length; i++ )
{
    var pickedEnemyName= enemyNames[i];
    enemyHealth= 50;
    //call fight function with enemy-robot
    fight(pickedEnemyName);
}