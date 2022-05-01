import { Component } from "react";
import React from "react";
import Hero from "./Hero";
import Enemy from "./Enemy";

class Arena extends Component {
    render () {
        return (
            <div>
                {
                    React.Children.map (
                        this.props.children,(Hero) => {
                            return React.cloneElement(Hero, {arena:this.props.arena}, Enemy, {arena:this.props.arena})
                        }
                    )
                }
            </div>
        )
    }
}

export default Arena