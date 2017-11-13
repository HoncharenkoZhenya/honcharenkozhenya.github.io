import React, { Component } from 'react'

export default class Comment extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { comment } = this.props

        return (
            <div>{comment.user} - {comment.text}</div>
        )
    }
}