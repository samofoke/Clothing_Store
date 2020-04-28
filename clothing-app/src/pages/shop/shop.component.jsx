import React from 'react';
import Shop_data from './shop.data';
import CollectionPreview from  '../../components/preview-collection/preview-collection.component'

class shopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: Shop_data
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className='Shop-Page'>
                {
                    collections.map(({id, ...otherCollectionProps}) =>(
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        );
    }
}

export default shopPage;