import React from 'react';
import * as d3 from 'd3';

const useD3 = (renderChartFn, dependencies) => {
    const ref = React.useRef();

    React.useEffect(() => {
        renderChartFn(d3.select(ref.current));
        return () => {};
        // eslint-disable-next-line
    }, dependencies);
    return ref;
};

export default useD3;
