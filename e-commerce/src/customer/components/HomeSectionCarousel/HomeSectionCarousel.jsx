import React, { useState } from "react";
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { mens_kurta } from "../../../Data/mans_kurta";

const HomeSectionCarousel = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    // const slidePrev = () => {

    //     setActiveIndex(activeIndex - 1)
    // }
    // const slideNext = () => setActiveIndex(activeIndex + 1)

    // const syncActiveIndex = ({ item }) => setActiveIndex(item)
    const items = data.slice(0, 10).map((item) => <HomeSectionCard product={item} />);

    return (
        <div className="border">
            <div className="relative p-5">
                <AliceCarousel
                    responsive={responsive}
                    // disableButtonsControls
                    items={items}
                    disableDotsControls
                // onSlideChanged={syncActiveIndex}
                // activeIndex={activeIndex}
                />
                {/* {activeIndex !== items.length - 5 &&
                    <Button
                        variant="contained"
                        className="z-50 bg-white"
                        onClick={slideNext}

                        sx={{
                            position: 'absolute',
                            top: "8rem",
                            right: "0rem",
                            transform: "translateX(50%) rotate(90deg)",
                            bgcolor: "white",
                        }}
                        aria-label="next"
                    >
                        <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                    </Button>
                }
                {activeIndex !== 0 &&
                    <Button
                        variant="contained"
                        className="z-50 bg-white"
                        onClick={slidePrev}
                        sx={{
                            position: 'absolute', top: "8rem", left: "0rem",
                            transform: "translateX(-50%) rotate(-90deg)", bgcolor: "white",
                        }}
                        aria-label="previous"
                    >
                        <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                    </Button>
                } */}
            </div>
        </div>
    );
}

export default HomeSectionCarousel;
