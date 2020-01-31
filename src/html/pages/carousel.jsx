import React from "react";
import {
    Switch,
    Route,
    useRouteMatch,
    useParams
} from "react-router-dom";
import CarouselItem from '../components/carousel-item';
import TravelPhotolist from "../components/lists/travel-photolist";
import PortraitPhotolist from "../components/lists/portrait-photolist";
import LandscapePhotolist from "../components/lists/landscape-photolist";

function Carousel() {
    let match = useRouteMatch();


    return (

        <Switch>
            <Route path={`${match.path}/travel/:photoId`}>
                <Topic list={TravelPhotolist} />
            </Route>
            <Route path={`${match.path}/portrait/:photoId`}>
                <Topic list={PortraitPhotolist} />
            </Route>
            <Route path={`${match.path}/landscape/:photoId`}>
                <Topic list={LandscapePhotolist} />
            </Route>
            <Route path={match.path}>
                <CarouselItem image={TravelPhotolist} />
            </Route>
        </Switch>

    );
}

function Topic(params) {
    let { photoId } = useParams();
    return (
        <div className="image-grid" >
            <CarouselItem image={params.list} active={photoId} />
        </div >
    );
}

export default Carousel;
