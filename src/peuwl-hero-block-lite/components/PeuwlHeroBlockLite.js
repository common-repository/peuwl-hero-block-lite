import React from "react";

class PeuwlHeroBlockLite extends React.Component {
    constructor() {
        super();
        this.state = { windowWidth: window.innerWidth};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    componentDidMount() {
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }  
    updateWindowDimensions() {
        this.setState({ windowWidth: window.innerWidth});
    }
    createMarkup(input) {
        return input;
    }
    render() {
        const attr = this.props.attributes;
            let imageUrl = ''; 
            if(attr.image){
                switch(attr.imageresolution) {
                    case 'full':
                        imageUrl = attr.image.full.url;
                    break;
                    case 'large':
                        if(attr.image.large){ imageUrl = attr.image.large.url; }else{ imageUrl = attr.image.full.url;}
                    break;
                    case 'medium':
                        if(attr.image.medium){ imageUrl = attr.image.medium.url; }else{ imageUrl = attr.image.full.url;}
                    break;
                    default: 
                    imageUrl = attr.image.full.url;
                }
            }
            const generalStyle = { backgroundSize: 'cover', backgroundPositionY: attr.verticalalign, backgroundPositionX: 'center', backgroundRepeat: 'no-repeat', backgroundImage: `url(${ imageUrl })`};
            const desktopStyle = { height: attr.height+'vh', minHeight: attr.minheight+'px', maxHeight: attr.maxheight+'px'}
            const heroStyle = Object.assign(generalStyle, desktopStyle)
            return (
                <div className={'fwb peuwl-hero-block-lite'}>
                    <div className="peuwl-hero-block-lite-inner">    
                        {(attr.overlay) &&
                            <div class="peuwl-hero-block-lite-overlay" style={{background: attr.overlaycolor}}></div>    
                        }    
                        <div className="peuwl-hero-block-lite-main" style={heroStyle}></div>
                        {(attr.forcetextcolor) &&
                            <div class="peuwl-hero-block-lite-inner-content peuwl-force-color" style={{maxWidth: (attr.contentmaxwidth+'%'), width: attr.contentwidth, color: attr.textcolor}}>
                                {this.props.children}
                            </div>
                        }
                        {(!attr.forcetextcolor) &&
                            <div class="peuwl-hero-block-lite-inner-content" style={{maxWidth: (attr.contentmaxwidth+'%'), width: attr.contentwidth}}>
                                {this.props.children}
                            </div>
                        }
                    </div>
                </div>
            )
        }          
    }
export default PeuwlHeroBlockLite;