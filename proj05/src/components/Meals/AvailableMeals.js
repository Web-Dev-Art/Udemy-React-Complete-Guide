import React from 'react';
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {id: 'm1', title: 'Sushi', description: 'Finest fish and veggies', price: 22.99},
    {id: 'm2', title: 'Schnitzel', description: 'A german specialty!', price: 16.50},
    {id: 'm3', title: 'Barbecue Burger', description: 'American, raw, meaty', price: 12.99},
    {id: 'm4', title: 'Green Bowl', description: 'Healthy...and green...', price: 18.99},
];

const AvailableMeals = () => {
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {DUMMY_MEALS.map(meal => <MealItem key={meal.id} id={meal.id} title={meal.title} description={meal.description} price={meal.price} />)}
                </ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;