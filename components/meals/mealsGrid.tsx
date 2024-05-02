import MealItem from './mealItem';
import classes from './mealsGrid.module.css';
export interface MealItemProps {
    title: string;
    slug: string;
    image: string;
    summary: string;
    creator: string;
    id: number;
}

export default function MealsGrid({ meals }: { meals: MealItemProps[] }) {
    return (
        <ul className={classes.meals}>
            {
                meals?.map(meal => (
                    <li key={meal.id}>
                        <MealItem {...meal} />
                    </li>
                ))
            }
        </ul>
    );
}
