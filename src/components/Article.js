import { Link } from "react-router-dom"
export default function Article() {
    return (
        <>
            <main className="contentboxes">
                <article>
                    <h2 id="date">11/12/20</h2>
                    <h3 id="headline">On the Street in Brooklyn</h3>
                    <img id="image" src="./images/blog-image-1.jpeg" alt="img" />
                    <p id="content">Cray ipsum, dolor sit amet consectetur adipisicing elit. Repellat quidem deserunt nemo dignissimos
                        fuga veniam inventore eligendi magna, aperiam odit mollita cupiditate eveniet velit officis magni aliquid,
                        laborum dolor? Quasi? Veniam amet rerum ducimus est ea at neque alias. Temporibus perspicatis at impedit
                        voluptas aut voluptas facere totam aliquid debitis rerum, ex consequuntur, nulla eius qua corrupti optio atque
                        ut. Repellendus meolestiae doloribus recusandae, itaque voluptatibus placeat repellat deserunt amet eaque
                        dignissimos, iste sapiente magnam dolormque. Fugit, cum, cupiditate aliquam, molltia quisquam sed nulla eveniet
                        doloribus neque optio odio qui! Id architecto impedit consequatur rem quaerat voluptatibus pariatur quas, quod
                        quisquam quo ab meolestiae.</p>
                    <Link to="..." id="continue">Continues...</Link>
                </article>
                <article>
                    <h2 id="date">11/11/20</h2>
                    <h3 id="headline">Vintage in Vogue</h3>
                    <img id="image" src="./images/blog-image-2.jpeg" alt="img" />
                    <p id="content">Selfies sunt, dolor sit amet consectetur adipisicing elit. Repellat quidem deserunt nemo
                        dignissimos fuga veniam inventore eligendi magnam aperiam odit mollitia cupiditate eveniet velit officiis magni
                        aliquid, laborum dolor? Quasi? Veniam amet rerum ducimus est ea at neque alias. Temporibus perspicatis at
                        impedit voluptas aut voluptates facere totam aliquid debitis rerum, ex consequuntur, nulla eius quae corrupti
                        optio atque ut. Repellendus molestiae doloribus recusandae, itaque voluptatibus placeat repellat deserunt amet
                        eaque dignissimos, iste sapiente magnam doloremque. Fugit, cum, cupiditate aliquam, molltia quisquam sed nulla
                        eveniet doloribus neque optio odio qui! Id architecto impedit consequatur r</p>
                    <Link to="..." id="continue">Continues...</Link>
                </article>
            </main>

        </>
    );
}
