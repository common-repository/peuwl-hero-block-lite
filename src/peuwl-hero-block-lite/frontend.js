const { render } = wp.element;
import PeuwlHeroBlockLite from "./components/PeuwlHeroBlockLite"
const heroblock = document.querySelectorAll(".peuwl-hero-block-lite");

heroblock.forEach( hero => {
    const innerhtml = document.getElementById('peuwl-hero-fetch-content').innerHTML;

    console.log(hero.dataset.props);
    render(
        <PeuwlHeroBlockLite attributes={JSON.parse(hero.dataset.props)}>
            <div dangerouslySetInnerHTML={{__html: innerhtml}} />
        </PeuwlHeroBlockLite>, 
        hero
    );
});

