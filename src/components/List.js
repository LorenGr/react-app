import React from 'react';
import {connect} from 'react-redux';
import InfiniteScroll from "react-infinite-scroll-component";
import ListItem from './ListItem';

let page = 1;
let fetch_size = 30;
const code_INCOMPLETE_DATA = 206;

function dispatchFetch() {
    this.dispatch({
        type: 'ITEM_FETCH_LIST',
        limit: page * fetch_size
    });
}

class List extends React.Component {

    constructor(props) {
        super(props);
        this.fetchMore = this.fetchMore.bind(this);
        this.refreshFunction = this.refreshFunction.bind(this);

        if (!this.props.items.length) {
            dispatchFetch.call(this.props);
        }
    }

    fetchMore() {
        page++;
        dispatchFetch.call(this.props);
    }

    refreshFunction() {
        page = 1;
        dispatchFetch.call(this.props);
    }

    render() {
        return this.props.items.length ? (

            <div id="items" style={{textAlign: 'center'}}>

                <InfiniteScroll next={this.fetchMore}
                                hasMore={this.props.noMore}
                                pullDownToRefresh={false}
                                refreshFunction={this.refreshFunction}
                                loader={<h4>Loading...</h4>}>
                    {this.props.items.map(item => {
                        return (
                            <ListItem key={item["_id"]} item={item}/>
                        )
                    })}
                </InfiniteScroll>

            </div>
        ) : (
            <div>Loading</div>
        );
    }
}

function mapStateToProps(state) {
    return ({
        items: state.items.list && state.items.list.data || [],
        noMore: state.items.list && state.items.list.status === code_INCOMPLETE_DATA
    });
}

export default connect(mapStateToProps)(List);