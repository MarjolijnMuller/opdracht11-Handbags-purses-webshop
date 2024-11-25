import React from 'react';
import './App.css'
import Button from "./components/Button.jsx";
import Product from "./components/Product.jsx";
import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";
import brand from "./assets/brand.png";
import ourStory from "./assets/our_story.png";
import Tile from "./components/Tile.jsx";


function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>

            {/****buttons****/}
            <nav>
                <Button buttonName="to the collection" disabled={false} />
                <Button buttonName="shop all bags" disabled={false} />
                <Button buttonName="pre-orders" disabled={true} />
            </nav>

            {/****products****/}
            <main>

                <Product
                    extraInfo="Best seller"
                    image={bag1}
                    bagName="The handy bag"
                    price="€400,-"
                />
                <Product
                    extraInfo="Best seller"
                    image={bag2}
                    bagName="The stylish bag"
                    price="€250,-"
                />
                <Product
                    extraInfo="New Collection"
                    image={bag3}
                    bagName="The simple bag"
                    price="€300,-"
                />
                <Product
                    extraInfo="New collection"
                    image={bag4}
                    bagName="The trendy bag"
                    price="€150,-"
                />
            </main>
            <footer>
                <Tile>
                    <img src={brand} />
                </Tile>
                <Tile>
                    <h2>
                        The brand
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ex itaque labore nisi perferendis quae quos ratione repellendus sapiente totam.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere harum in minus molestias porro quasi rem rerum sit temporibus voluptatem?
                    </p>
                </Tile>

                <Tile>
                    <h2>
                        Our Story
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque hic molestias nobis reprehenderit? Ad adipisci aperiam deserunt dolores, esse est id natus necessitatibus nobis quo quod sed ut, voluptatem voluptatum?
                    </p>
                </Tile>
                <Tile>
                    <img src={ourStory} />
                </Tile>
            </footer>
        </>
    )
}

export default App
