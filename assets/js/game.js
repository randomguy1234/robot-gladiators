var playerName= window.prompt("What is your robot's name?");
var playerHealth= 100;
var playerAttack= 10;
var playerMoney= 10;

//show multiple variables at the samae time
console.log(playerName, playerHealth, playerAttack);

var enemyNames= ["Roberto", "Amy Android", "Robo Tumble"];
var enemyHealth= 50;
var enemyAttack= 12;




var fight= function(enemyName){
    

    while (playerHealth > 0 && enemyHealth > 0)
    {
        var promptFight= window.prompt("Would you like to FIGHT or SKIP this battle?"
        +" Enter 'FIGHT' or 'SKIP' to choose.");
    
        //if player picks skip, confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP")
        {
            //confirm player wants to quit
            var confirmSkip= window.confirm("Are you sure you'd like to quit?");

            //if yes(true), leave fight
            if(confirmSkip)
            {
                window.alert(playerName+" has decided to skip this fight. Goodbye!");
                //subtract money from playerMoney for skipping
                playerMoney= playerMoney -10;
                console.log("playerMoney",playerMoney);
                break;
            } 
        }

        
        /*remove enemy's health by subtracting the amount set in the playerAttack variable */
        enemyHealth= enemyHealth - playerAttack;
        
        console.log(playerName+" attacked "+enemyName+". "+enemyName+" now has "+enemyHealth
        +" health remaining.");

        //check enemy's health
        if (enemyHealth <= 0)
        {
            window.alert(enemyName+" has died!");

            //award player money for winning
            playerMoney= playerMoney + 20;

            //leave while loop since enemy is dead
            break;
        }
        
        else
        {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        /*remove the player's health by subtracting the amount set in the enemyAttack variable*/
        playerHealth= playerHealth- enemyAttack;

        console.log(enemyName+" attacked "+playerName+" . "+playerName+" now has "
        +playerHealth+" health remaining.");
            

        //check player's health
        if (playerHealth <= 0)
        {
            window.alert(playerName+" has died!");

            //leave while loop since player is dead
            break;
        }    
            
        else
        {
            window.alert(playerName+" still has "+playerHealth+" health left.");
        }    
        
        
    }
};

//fight();
for(var i= 0; i < enemyNames.length; i++ )
{
    /*let player know what round they are in, remember the array starts at 0 so
    it needs to have 1 added to it*/ 
    if (playerHealth > 0)
    {
        window.alert("Welcome to Robot Gladiators! Round "+(i + 1));
    }
    else
    {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }

    //pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName= enemyNames[i];

    //reset enemyHealth before starting new fight
    enemyHealth= 50;

    //use debugger to pause script from running and check what's going on at that moment in the code
    //dubugger;
    
    /*passed the pickedEnemyName variable into the the fight function,
    where it will assume the value of the enemyName parameter*/
    fight(pickedEnemyName);
}