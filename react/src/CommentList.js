import React, { Component } from 'react'
import Comment from './Comment'

export default class CommentList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }
    render() {
        const { comment } = this.props
        const { isopen } = this.state.isOpen


        return (
            <div>
                <h4>Comments</h4>
                <button onClick={this.toogleOpen}>
                    {this.state.isOpen ? 'close' : 'open'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null
        const { comments } = this.props
        const commentElements = comments.map((comment) => <li key={comment.id}><Comment comment={comment} /></li>)
        return (
            <ul>
                {commentElements}
            </ul>
        )
    }

    toogleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}