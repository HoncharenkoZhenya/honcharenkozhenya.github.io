import React, { Component } from 'react'
import CommentList from './CommentList'

export default class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }
    render() {
        const { article } = this.props
        const { isopen } = this.state.isOpen

        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={this.toogleOpen}>
                    {this.state.isOpen ? 'close' : 'open'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null
        const { article } = this.props
        return (
            <div>
                <section>{article.text}</section>
                <CommentList comments={article.comments} />
            </div>
        )
    }

    toogleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}

// export default function Article(props) {

// }