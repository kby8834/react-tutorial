import React, { Component } from 'react';
import Draggable from 'react-draggable';

export default class Example_1 extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <Draggable
                // axis="x"
                axis="both"
                handle=".handle"
                defaultPosition={{ x: 0, y: 0 }}
                position={null}
                grid={[25, 25]}
                scale={1}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}>
                <div>
                    <div className="handle">Drag from here</div>
                    <div>This readme is really dragging on...</div>
                </div>
            </Draggable>
        );
    }

}
