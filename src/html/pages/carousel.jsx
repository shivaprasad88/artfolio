import React from "react";
import {
    Switch,
    Route,
    useRouteMatch,
    useParams
} from "react-router-dom";
import CarouselItem from '../components/carousel-item';
import TravelPhotolist from "../components/lists/travel-photolist";

function Carousel() {
    let match = useRouteMatch();

    return (

        <Switch>
            <Route path={`${match.path}/:photoId`}>
                <Topic />
            </Route>
            <Route path={match.path}>
                <CarouselItem image={TravelPhotolist} />
            </Route>
        </Switch>

    );
}

function Topic() {
    let { photoId } = useParams();
    return (
        <div className="image-grid" >
            <CarouselItem image={TravelPhotolist} active={photoId} />
        </div >
    );
}

export default Carousel;
