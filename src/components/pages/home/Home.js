import RestaurantIntroduction from './restaurantIntroduction/RestaurantIntroduction';
import FeaturedSpecials from './featuredSpecials/FeaturedSpecials';

export default function Home() {
    return (
        <>
            <RestaurantIntroduction />
            <FeaturedSpecials />
        </>
    );
}