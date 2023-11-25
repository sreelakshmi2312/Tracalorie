class CalorieTracker {
    constructor(){
        this._calorieLimit=2000;
        this._totalCalories=0;
        this._meals=[];
        this._workouts=[];
    }


addMeal(meal){
    this._meals.push(meal);
    this._totalCalories +=meal.calories;
    this._render();
}
addWorkout(workout){
    this._workouts.push(workout);
    this._totalCalories -=this._workouts.calories;
    this._render();
}
}
class Meal{
  constructor(name,calories){
    this.id=Math.random().toString(16).slice(2);
    this.name=name;
    this.calories=calories;
  }}
  class Workout{
    constructor(name,calories){
       this.id=Math.random().toString(16).slice(2);
       this.name=name;
       this.calories=calories;
     }
   
    }



//private methods

_displayCaloriesTotal()
{
    const totalCaloriesEl=document.getElementById(`calories-total`);
    totalCaloriesEl.innerHTML=this._totalCalories;
}
_displayCaloriesLimit()
{
    const _calorieLimitEl=document.getElementById(`calories-limit`);
    calorielimitEl.innerHTML=this._Calorielimit;
}
_displayCaloriesConsumed()
{
    const caloriesConsumedEl=document.getElementById(`calories-consumed`);
    const consumed=this._meals.reduce((total,meal)=>total+meal.calories,0);
    caloriesConsumedEl.innerHTML=consumed;
}
_displayCaloriesBurned()
{
    const caloriesBurnedEl=document.getElementById(`calories-burned`);
    const burned=this._workouts.reduce((total,workout)=>total+workout.calories,0);
    caloriesBurnedEl.innerHTML=burned;
}
_displayCaloriesRemaining()
{
    const caloriesRemainingEl=document.getElementById(`calories-remaining`);
    const remaining=this._workouts.reduce((total,workout)=>total+workout.calories,0);
    caloriesBurnedEl.innerHTML=burned;
}
_displayCalorieprogress()
{ const progressEl= document.getElementById(`calorie-progress`);
const percentage= (this._totalCalories/this._Calorielimit)*100;
const Width=Math.min(percentage,100);
progressEl.style.width=`${width}%`;

}
_render()
{
    this._displayCaloriesTotal();
    this._displayCaloriesConsumed();
    this._displayCaloriesBurned();
    this._displayCaloriesRemaining();
}

class App()
{constructor()

{
    this._tracker=new CalorieTracker();
    document.getElementById(`meal-form`).addEventListener(`submit`,this._newMeal)
}
_newMeal(e){
    e.preventDefault(`meal-form`).addEvent
}

{ 


}


}

