# TEST #1 Practice

Use the provided function *excuseMeDoctor*.  
This function has an optional variable that can be passed as a parameter and will return a string. There is no output within this function.

### Function description
Given limited conversation skills when you talk to the doctor his answers are restricted and will return a specific response based on the given parameter.

The function should perform the following 

**If you ask a question**  
Return the following `Indubitably`  
*A question will always end with a question mark?* 

```javascript
excuseMeDoctor("Will I pass this Test?");   
excuseMeDoctor("Is it REALLY cold outside?"); 
```

**If you yell**  
Return the following `Whoa!! Where is the fire?`  
*Yelling will contain only UPPERCASE* 
```javascript
excuseMeDoctor("BEAUTIFUL DAY FOR A TEST"); 
excuseMeDoctor("IT'S FREEZING OUTSIDE");  
```

**If you yell a question**  
Return the following `Do YOU want to do it instead?`  
*A question will always end with a question mark?*  
*Yelling will contain only UPPERCASE*

```javascript
excuseMeDoctor("IS THE TEST REALLY TODAY?");    
excuseMeDoctor("WHY IS IT SO COLD?");   
```

**If you say nothing (empty string)**  
Return the following `Pff, I do not need you either`  

```javascript
excuseMeDoctor(""); 
excuseMeDoctor(); 
```

***Anything else***  
should return the following `I understand. But you are still wrong!`


### Function to use
```javascript
/**
 * Conversation with a doctor
 * @param {string} conversation What you are saying to the doctor
 * @returns {string} The doctors reply
 */
function excuseMeDoctor( conversation ){
  
} 
```