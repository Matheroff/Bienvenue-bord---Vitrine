import './Bienvenue.css'
import avatar from './assets/avatar.png'
import responsive from './assets/responsive.png'
import scalable from './assets/scalable.png'
import inclusive from './assets/inclusive.png'


function Bienvenue() {
    
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>Articles</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <div id="bigTitle">
                    <img src={avatar}/>
                    <h1>Welcome <br/> on board!</h1>          
                </div>
            </header>
            <main>
                <section>
                    <h2>Recent articles</h2>
                    <div id="cardContainer">
                        <article>
                            <img src={responsive}/>
                            <h3>Responsive</h3>
                            <button>READ</button>
                        </article>
                        <article>
                            <img src={scalable}/>
                            <h3>Scalable</h3>
                            <button>READ</button>
                        </article>                            
                        <article>
                            <img src={inclusive}/>
                            <h3>Inclusive</h3>
                            <button>READ</button>
                        </article>
                    </div>
                </section>
                <section>
                    <h2>About</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur magnam deserunt iure quisquam, enim dignissimos ex doloribus sunt quasi cumque assumenda molestias excepturi totam, ullam distinctio asperiores vel molestiae id eaque incidunt unde nam cum ea animi. Dignissimos ratione ipsa expedita exercitationem assumenda eveniet provident obcaecati. Rerum non, odit aliquam dignissimos exercitationem voluptatibus sapiente consequatur ratione fugit laboriosam inventore facere animi cumque, aperiam cum saepe maxime tempora amet ipsam, explicabo atque neque? Deleniti itaque tenetur recusandae deserunt blanditiis assumenda incidunt, odit laudantium sapiente alias praesentium! Dolores repellat placeat molestias dicta impedit soluta doloribus eum? Non, numquam dignissimos. Sunt deserunt aliquid odit nam, commodi enim cum sed obcaecati animi, itaque eveniet aperiam cumque odio repellat consequuntur? Beatae omnis soluta nisi delectus hic labore! Ipsam, veniam rem laudantium perspiciatis fugiat nihil dolores dolorem. Quasi sunt illo maxime earum ex consequatur sint fugit voluptates, modi rerum atque fugiat mollitia ea ducimus dolorum debitis!</p>
                    <br/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta amet rem ex odit architecto dolor ad, eos ducimus cumque. Accusamus recusandae quidem in? Quam ullam rem necessitatibus perferendis, optio dolore quibusdam fugit veritatis eligendi tempore consequatur doloribus excepturi corrupti voluptatibus suscipit labore illo error, nostrum esse rerum aut. Cupiditate itaque eum laudantium assumenda veritatis earum corporis, suscipit maiores consequatur ex quae vitae a debitis non ullam tenetur placeat asperiores hic ipsa. Quia iste perspiciatis animi mollitia officia fuga placeat nisi ab unde minus nemo rem repellendus dignissimos, voluptate beatae nostrum amet at, sit itaque illum quae? Repellat eligendi, nemo quod dolore sint soluta hic et. Qui tempore dolores, ut cumque nihil, ullam doloribus ex expedita eum dicta odit voluptatem inventore illo nulla voluptatibus temporibus voluptatum sunt. Consequuntur, quibusdam, numquam aliquid id perspiciatis soluta quia cum distinctio ut placeat aut laborum architecto earum possimus nulla. Voluptas quae perferendis vero qui placeat.</p>
                </section>
            </main>
            <footer>
                <p>© 2024 Wild Code School</p>
                <p>Made with <span id="heart">♥</span> by wilder</p>
                <p>Image <span>freepicks</span></p>
            </footer>
        </>
    )
}

export default Bienvenue