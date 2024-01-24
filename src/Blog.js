import './Blog.css';
import Menu from './Menu';
import Footer from './Footer';

export default function Blog(){
    
    return(
        <div>
            <Menu />
            <main>
        <section>
            <div class="container-fluid blogListSection">
                <h1>Main Blog Page</h1>
                <div class="url-route">
                    <a href="home">Home</a>
                    <span> &gt;</span>
                    <a href="blog">Blogs</a>
                </div>
            </div>
        </section>

        <section>
            <div class="container-fluid">
                <div class="row blogHolder">
                </div>
            </div>

        </section>
    </main>
    <Footer />
        </div>
    );
}