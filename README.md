# react-testimonial
A bootstrap supported react library for adding testimonial

## Documentation

### Installation

**npm**

```bash
npm install react-testimonial --save
```

**yarn**

```bash
yarn add react-testimonial
```

### Example

```js
import React, { Component } from 'react'
import Testimonial from 'react-testimonial';

class TestimonialTest extend Component {
    render(){
        return {
            <Testimonial>
                <div className="card content mx-auto" style={style}>
                    <div className="card-body">
                        <span>
                            I had the pleasure of working with him on an exciting project for over 18 months.
                            We have shared some highs, lows and some real head scratching moments.
                            He has been a real asset to the team and to me personally.
                        </span>
                        <p>Abc</p>
                    </div>
                </div>
                <div className="card content mx-auto" style={style}>
                    <div className="card-body">
                        <span>
                            He has been a real asset to the team and able to pick up new technologies quickly. He has a passion for all flavours of development and is a team player with an excellent attitude both in and outside of work.
                        </span>
                        <p>Xyz</p>
                    </div>
                </div>
            </Testimonial>
        }
    }
}
```

### Props

| Props Name       |                                          |
| --------------   |:---------------------------------------: |
| `timer`          | `for changing the testimonial time`      |


### Methods

Updating soon
