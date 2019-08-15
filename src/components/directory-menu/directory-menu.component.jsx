import React from 'react'
import MenuItem from '../menu-item/menu-item.component';

class DirectoryMenu extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [{
                title: 'JACKETS',
                imgURL: 'https://www.wallpaperup.com/uploads/wallpapers/2012/08/29/11934/dc9fd306036d18dac822c6b684c698a8-1400.jpg',
                id: 1,
                linkurl: ''
            },
            {
                title: 'HATS',
                imgURL: 'https://images.pexels.com/photos/777156/pexels-photo-777156.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                id: 2,
                linkurl: 'hats'
            },
            {
                title: 'SNEAKERS',
                imgURL: 'https://www.thetrendspotter.net/wp-content/uploads/2015/07/10-Best-Sneakers-for-Men-Spotted-at-Men%E2%80%99s-Fashion-Week.jpg',
                id: 3,
                linkurl: ''
            },
            {
                title: 'WOMENS',
                imgURL: 'https://i.pinimg.com/originals/a7/0e/cd/a70ecd546b5970036ff74a20e8ab9aa7.jpg',
                size: 'large',
                id: 4,
                linkurl: ''
            },
            {
                title: 'MENS',
                imgURL: 'https://wallpapercave.com/wp/wp3075871.jpg',
                size: 'large',
                id: 5,
                linkurl: ''
            }
            ]
        }
    }
    render() {
        const { sections } = this.state
        return (
            <div className="directory-menu">
                {
                    sections.map(({ id, ...otherSectionProps }) => <MenuItem key={id} {...otherSectionProps} />)
                }
            </div>

        );
    }

}
export default DirectoryMenu