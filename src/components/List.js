import React from 'react';
import {connect} from 'react-redux';
import {ProgressBar} from 'react-bootstrap';
import InfiniteScroll from "react-infinite-scroll-component";

let page = 1;
let fetch_size = 30;
const code_INCOMPLETE_DATA = 206;

function dispatchFetch() {
    this.dispatch({
        type: 'ITEM_FETCH_LIST',
        limit: page * fetch_size
    });
}

export class List extends React.Component {

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

            <div id="items" className="itemsMasonry">

                <InfiniteScroll next={this.fetchMore}
                                hasMore={this.props.noMore}
                                pullDownToRefresh={true}
                                refreshFunction={this.refreshFunction}
                                loader={<h4>Loading...</h4>}>
                    {this.props.items.map(item => {
                        return (
                            <div className="item" id={item.id} key={item["_id"]}>
                                <img src={item.photo}/>
                                <h2>{item.full_name}</h2>
                                <span>{item.location}</span>
                            </div>
                        )
                    })}
                </InfiniteScroll>

            </div>
        ) : (
            <ProgressBar active now={100}/>
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