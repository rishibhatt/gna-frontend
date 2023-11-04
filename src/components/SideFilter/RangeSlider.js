import ReactSlider from 'react-slider'
import React from 'react'
import './RangeSlider.css';

const RangeSlider = () => {
    return (
        <div>
          
            <ReactSlider
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                defaultValue={[0, 10000]}
                ariaLabel={['Lower thumb', 'Upper thumb']}
                ariaValuetext={state => `Thumb value ${state.valueNow}`}
                renderThumb={(props, state) => <div {...props}></div>}
                pearling
                minDistance={10}
            />
        </div>
    )
}

export default RangeSlider
