import React from 'react'

import ShopData from './shop.data'
import { TrendingItems } from '../../components/trending-item/trending.component'

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: ShopData
        }
    }
    render() {
        const { collections } = this.state
        return (
            <div className='shop-page'>
                <h1>Trending</h1>
                {
                    collections.map(({ id, ...otherCollectionProps }) => (
                        <TrendingItems key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}
export default ShopPage; 